import { askTheRabbiResponse } from "../types/askTheRabbi";
import cheerio from "cheerio";

/**
 *  Gets the question and answer of "ask the rabbi" question.
 *
 * @param {number} questionID The ID of the question. Can be found in `https://www.hidabroot.org/question/X` (X is the question ID).
 */
export async function askTheRabbi(
  questionID: number
): Promise<askTheRabbiResponse | null> {
  // the url for the question
  const url = "https://www.hidabroot.org/question/" + questionID;

  try {
    // fetches the url of the question
    return (
      fetch(url)
        .then((response) => response.text())
        // takees the html response
        .then((html) => {
          // loads it into cheerio
          const $ = cheerio.load(html);
          // gets the header of the question
          const header = $(".page\\_title.no\\_border").eq(0).text();
          // if the header indicates that the page was not found
          if (header == "דף שגיאה 404 - אבל יש לנו הצעות אחרות!...") {
            // return null
            return null;
          } else {
            // gets the whole div with id "article_inner" and save only the question div in the question variable
            const question = $("[id=article_inner]").contents().eq(1);
            // format the question div text content
            const formattedQuestion =
              question.text().replace(/\s+/g, " ").replace(/<br>/g, "\n") || "";
            // gets the whole div with id "article_inner" and save only the answer div in the answer variable
            const answer = $("[id=article_inner]").contents().eq(3);
            // format the answer div text content
            const formattedAnswer = answer
              .text()
              .replace(/<br>/g, "\n")
              .replace(/\s+/g, " ")
              .trim();
            return {
              title: header,
              question: formattedQuestion,
              answer: formattedAnswer,
            };
          }
        })
        .catch((error) => {
          console.error("Error: " + error);
          return null;
        })
    );
  } catch (e) {
    console.error("Error: " + e);
    return null;
  }
}
