import cheerio from "cheerio";

/**
 * Retrieves the news titles from "Hadshot Hayom" and returns them in a JSON format.
 *
 * @returns {Promise<{ [key: string]: number }>} A json object of news titles extracted along with their IDs from the website or null if an error occurs.
 */
export async function todayNews(): Promise<{ [key: string]: number }> {
  // the url for the "today news" page
  const url =
    "https://www.hidabroot.org/%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%94%D7%99%D7%95%D7%9D";

  try {
    // fetches the url
    return (
      fetch(url)
        .then((response) => response.text())
        // takes the html response
        .then((html) => {
          // loads the html response into cheerio
          const $ = cheerio.load(html);
          // gets an array of elements from the div with the class "article_block"
          const articleBlocks = $(".article_block");

          // gets the "big" article block element with the class "article_block mbl_big_article"
          const bigArticleBlock =
            $(".article_block.mbl_big_article")
              .eq(0)
              .children()
              // gets the div with the class "content" that is inside the "big" article block
              .eq(1)
              .children()
              // gets the <a> tag that contains the <h3> tag of the article title
              .eq(1)
              .children()
              // gets the <h3> tag that contains the article title
              .eq(0)
              // gets the title of the article. if was not found, returns an empty string
              .text() || "";

          const bigArticleBlockID =
            Number(
              $(".article_block.mbl_big_article")
                .eq(0)
                .children()
                .eq(1)
                .children()
                .eq(1)
                .attr("href")
                .replace("https://www.hidabroot.org/article/", "")
            ) || 0;

          const firstArticleBlockID =
            Number(
              $(".article_block")
                .eq(1)
                .children()
                .eq(1)
                .children()
                .eq(1)
                .attr("href")
                .replace("https://www.hidabroot.org/article/", "")
            ) || 0;

          const secondArticleBlockID =
            Number(
              $(".article_block")
                .eq(2)
                .children()
                .eq(1)
                .children()
                .eq(1)
                .attr("href")
                .replace("https://www.hidabroot.org/article/", "")
            ) || 0;

          const thirdArticleBlockID =
            Number(
              $(".article_block")
                .eq(3)
                .children()
                .eq(1)
                .children()
                .eq(1)
                .attr("href")
                .replace("https://www.hidabroot.org/article/", "")
            ) || 0;

          const fourthArticleBlockID =
            Number(
              $(".article_block")
                .eq(4)
                .children()
                .eq(1)
                .children()
                .eq(1)
                .attr("href")
                .replace("https://www.hidabroot.org/article/", "")
            ) || 0;

          const jsonResponse: { [key: string]: number } = {
            [bigArticleBlock]: bigArticleBlockID,
            [$(articleBlocks[1]).find("span").attr("title").trim()]:
              firstArticleBlockID,
            [$(articleBlocks[2]).find("span").attr("title").trim()]:
              secondArticleBlockID,
            [$(articleBlocks[3]).find("span").attr("title").trim()]:
              thirdArticleBlockID,
            [$(articleBlocks[4]).find("span").attr("title").trim()]:
              fourthArticleBlockID,
          };

          return jsonResponse;
        })
        .catch((error) => {
          console.error("Error:", error);
          return null;
        })
    );
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}
