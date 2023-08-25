import { describe } from "mocha";
import { expect } from "chai";
import { todayNews, getArticle } from "../build/index";

describe("todayNews function", () => {
  it("should return the json object of today news", async () => {
    const news = await todayNews();
    expect(news).to.be.an("object");
  });
});

describe("getArticle function", () => {
  it("should return the text of article content", async () => {
    const articleId = 1185334;
    const result = await getArticle(articleId);
    expect(result).to.be.a("string");
  });

  it("should return null (because article doesnt exist)", async () => {
    const notExistArticleID = 3247328947239478923;
    const result = await getArticle(notExistArticleID);
    expect(result).to.equal(null);
  });
});
