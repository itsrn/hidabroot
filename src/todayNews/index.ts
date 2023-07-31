import puppeteer from "puppeteer";
import cheerio from "cheerio";

/**
 * Retrieves the news titles from "Hadshot Hayom" and returns them in a JSON format.
 *
 * @returns {Promise<string[] | null>} An array of news titles extracted from the website or null if an error occurs.
 */
export async function todayNews(): Promise<string[] | null> {
  const url =
    "https://www.hidabroot.org/%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%94%D7%99%D7%95%D7%9D";

  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    await page.goto(url);
    const htmlContent = await page.content();
    await browser.close();

    const $ = cheerio.load(htmlContent);
    const articleBlocks = $(".article_block");

    const jsonResponse = [
      $(articleBlocks[1]).find("span").attr("title").trim() || null,
      $(articleBlocks[2]).find("span").attr("title").trim() || null,
      $(articleBlocks[3]).find("span").attr("title").trim() || null,
      $(articleBlocks[4]).find("span").attr("title").trim() || null,
    ];

    return jsonResponse;
  } catch (err) {
    console.error("Error:", err);
    return undefined;
  }
}
