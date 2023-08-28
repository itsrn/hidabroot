import cheerio from "cheerio";
import { searchOptions, searchResponse } from "../types/search";

/**
 * Search in Hidabroot's website
 *
 * @param {string} query The query string to search for.
 * @param {{ searchOptions: searchOptions }} options The JSON options for the search.
 *
 * @return Returns a promise that resolves to a JSON object containing the results URLs and titles.
 */
export async function search(
  query: string,
  options?: { searchOptions: searchOptions }
): Promise<searchResponse> {
  let url = "https://www.hidabroot.org/search?q=" + query;
  if (options.searchOptions.searchType == "faq") {
    url = "https://www.hidabroot.org/search?type=faq&q=" + query;
  } else if (options.searchOptions.searchType == "articles") {
    url = "https://www.hidabroot.org/search?type=articles&q=" + query;
  }

  try {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        let results: string[] = [];
        let resultLinks: string[] = [];

        $(".items_list")
          .eq(0)
          .contents()
          .each((index, element) => {
            if (!$(element).hasClass("mgz_paging")) {
              results.push($(element).text());
            }
          });

        $(".items_list")
          .eq(0)
          .contents()
          .each((index, element) => {
            if (!$(element).hasClass("mgz_paging")) {
              resultLinks.push($(element).children().eq(0).attr("href"));
            }
          });

        const resultObject = {};

        for (let i = 0; i < resultLinks.length && i < results.length; i++) {
          resultObject[resultLinks[i]] = results[i];
        }

        return resultObject;
      })
      .catch((error) => {
        console.error("Error: " + error);
        return null;
      });
  } catch (e) {
    console.error("Error: " + e);
    return null;
  }
}
