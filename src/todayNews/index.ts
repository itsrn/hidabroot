import cheerio from "cheerio";

/**
 * Retrieves the news titles from "Hadshot Hayom" and returns them in a JSON format.
 *
 * @returns {Promise<{ [key: string]: number }>} An array of news titles extracted from the website or null if an error occurs.
 */
export async function todayNews(): Promise<{ [key: string]: number }> {
  const url =
    "https://www.hidabroot.org/%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%94%D7%99%D7%95%D7%9D";

  try {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const articleBlocks = $(".article_block");

        const bigArticleBlock =
          $(".article_block.mbl_big_article")
            .eq(0)
            .children()
            .eq(1)
            .children()
            .eq(1)
            .children()
            .eq(0)
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
      });
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}
