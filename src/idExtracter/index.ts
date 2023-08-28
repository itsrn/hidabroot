import { idExtracterOptions } from "../types/idExtracter";

/**
 * Extract IDs from any article, "Ask The Rabbi" question page or anything else that exists on Hidabroot's website. Returns null if the page isn't a valid Hidabroot page URL.
 *
 * @param {string} input A URL for the page you want to extract the ID from.
 * @param {idExtracterOptions} options Options for extracting the ID.
 */
export function idExtracter(
  input: string,
  options: idExtracterOptions
): number | null {
  if (
    input.startsWith("www.hidabroot.org/") ||
    input.startsWith("http://www.hidabroot.org/") ||
    input.startsWith("https://www.hidabroot.org/") ||
    input.startsWith("hidabroot.org/")
  ) {
    if (options.pageType == "askTheRabbi") {
      if (input.startsWith("http://www.hidabroot.org/")) {
        const id = input
          .replace("http://www.hidabroot.org/question/", "")
          .trim();
        return Number(id);
      } else if (input.startsWith("https://www.hidabroot.org/")) {
        const id = input
          .replace("https://www.hidabroot.org/question/", "")
          .trim();
        return Number(id);
      } else if (input.startsWith("www.hidabroot.org/")) {
        const id = input.replace("hidabroot.org/question/", "").trim();
        return Number(id);
      } else if (input.startsWith("hidabroot.org/")) {
        const id = input.replace("hidabroot.org/question/", "").trim();
        return Number(id);
      } else {
        return null;
      }
    } else if (options.pageType == "article") {
      if (input.startsWith("http://www.hidabroot.org/")) {
        const id = input
          .replace("http://www.hidabroot.org/article/", "")
          .trim();
        return Number(id);
      } else if (input.startsWith("https://www.hidabroot.org/")) {
        const id = input
          .replace("https://www.hidabroot.org/article/", "")
          .trim();
        return Number(id);
      } else if (input.startsWith("www.hidabroot.org/")) {
        const id = input.replace("hidabroot.org/article/", "").trim();
        return Number(id);
      } else if (input.startsWith("hidabroot.org/")) {
        const id = input.replace("hidabroot.org/article/", "").trim();
        return Number(id);
      } else {
        return null;
      }
    } else if (options.pageType == "video") {
      if (input.startsWith("http://www.hidabroot.org/")) {
        const id = input.replace("http://www.hidabroot.org/video/", "").trim();
        return Number(id);
      } else if (input.startsWith("https://www.hidabroot.org/")) {
        const id = input.replace("https://www.hidabroot.org/video/", "").trim();
        return Number(id);
      } else if (input.startsWith("www.hidabroot.org/")) {
        const id = input.replace("hidabroot.org/video/", "").trim();
        return Number(id);
      } else if (input.startsWith("hidabroot.org/")) {
        const id = input.replace("hidabroot.org/video/", "").trim();
        return Number(id);
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}
