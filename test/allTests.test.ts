import { describe } from "mocha";
import { expect } from "chai";
import {
  todayNews,
  getArticle,
  askTheRabbi,
  search,
  idExtracter,
} from "../build/index";

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

  it("should return null because article does not exist", async () => {
    const notExistArticleID = 3247328947239478923;
    const result = await getArticle(notExistArticleID);
    expect(result).to.equal(null);
  });
});

describe("askTheRabbi function", () => {
  it("should return a json with 2 string keys - question and answer", async () => {
    const questionID = 325090;
    const response = await askTheRabbi(questionID);
    console.log(response);
    expect(response).to.be.an("object");
  });

  it("should return null because question does not exist", async () => {
    const questionID = 565645645146545646551534564;
    const response = await askTheRabbi(questionID);
    expect(response).to.equal(null);
  });
});

describe("search function", () => {
  it("should return an object", async () => {
    const response = await search("האם היו עולמות קודמים?", {
      searchOptions: { searchType: "faq" },
    });
    expect(response).to.be.an("object");
  });

  it("should return an empty object", async () => {
    const response = await search("makdwjadjwkadwjkjjklwafjahjwjwajh", {
      searchOptions: { searchType: "faq" },
    });
    expect(response).to.deep.equal({}); //expect it to be an empty object
  });
});

describe("idExtracter function", () => {
  it("should extract the id from the article", async () => {
    const id = await idExtracter("https://www.hidabroot.org/article/1185418", {
      pageType: "article",
    });
    expect(id).to.be.a("number");
  });

  it("should extract the id from the video article", async () => {
    const id = await idExtracter("https://www.hidabroot.org/video/220434", {
      pageType: "video",
    });
    expect(id).to.be.a("number");
  });

  it('should extract the id from the "Ask The Rabbi" question', async () => {
    const id = await idExtracter("https://www.hidabroot.org/question/325108", {
      pageType: "askTheRabbi",
    });
    expect(id).to.be.a("number");
  });

  it("should return null as this isnt a hidabroot page url", async () => {
    const id = await idExtracter("ajkdwjkdjwkadjlwkajdkw", {
      pageType: "askTheRabbi",
    });
    expect(id).to.equal(null);
  });
});
