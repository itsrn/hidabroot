import cheerio from "cheerio";

/**
 *  Get any article content by it's ID.
 *
 * @param {number} id The id of the article
 */
export async function getArticle(id: number): Promise<string | null> {
  const url = "https://www.hidabroot.org/article/" + id;

  try {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const header = $(".page\\_title.no\\_border").eq(0).text();
        let output: string | null = "";
        if (header == "דף שגיאה 404 - אבל יש לנו הצעות אחרות!...") {
          output = null;
        } else {
          $('p[dir="RTL"]').each((index, p) => {
            output += $(p).text();
          });
        }

        return output;
      })
      .catch((error) => {
        console.error("Error: " + error);
        return null;
      });
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}
