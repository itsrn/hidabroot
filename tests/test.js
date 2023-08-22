const { todayNews, getArticle } = require("../build/index");
todayNews().then((article) => {
  const desiredKey = Object.keys(article)[0];
  getArticle(article[desiredKey]).then((articleContent) => {
    console.log(articleContent);
  });
});
