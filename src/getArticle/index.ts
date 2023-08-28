import cheerio from "cheerio";

/**
 *  Get any article content by it's ID.
 *
 * @param {number} id The id of the article
 */
export async function getArticle(id: number): Promise<string | null> {
  // the url for the article
  const url = "https://www.hidabroot.org/article/" + id;

  try {
    // fetches the article
    return (
      fetch(url)
        .then((response) => response.text())
        // takes the html response
        .then((html) => {
          // loads it into cheerio
          const $ = cheerio.load(html);
          // gets the header of the article
          const header = $(".page\\_title.no\\_border").eq(0).text();
          // create an output variable to contain the article content or null if it doesn't exist
          let output: string | null = "";
          // if the header says that the page is 404
          if (header == "דף שגיאה 404 - אבל יש לנו הצעות אחרות!...") {
            // set the output to null
            output = null;
          } else {
            // if it does exist, search for every <p> tag with attribute dir="RTL"
            $('p[dir="RTL"]').each((index, p) => {
              // for every <p> tag, add the text of the found <p> tag to the variable output
              output += $(p).text();
            });
          }

          // return the output variable
          return output;
        })
        .catch((error) => {
          console.error("Error: " + error);
          return null;
        })
    );
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}
