/**
 * The options for the search.
 */
export interface searchOptions {
  /**
   * The type of the search. Recommended to specify to get better results.
   *
   * ### `faq`
   * The `faq` is for "Ask The Rabbi" questions.
   *
   * ### `articles`
   * The `articles` is for the website articles.
   */
  searchType?: "faq" | "articles";
}

export type searchResponse = Promise<{
    /**
     * @param {string} key The search response URL. The value of it is the title of that result.
     */
  [key: string]: string;
}>;
