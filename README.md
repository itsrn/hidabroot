# Hidabroot API _(unofficial)_

![version](https://img.shields.io/github/package-json/v/itsrn/hidabroot)
![typescript](https://img.shields.io/badge/</>-TypeScript-blue)
![issues](https://img.shields.io/github/issues/itsrn/hidabroot)
![pull requests](https://img.shields.io/github/issues-pr/itsrn/hidabroot)

_An (unofficial) API for Hidabroot_

## Important

This API may be blocked at any time by Hidabroot's team. If any damage caused by this API, it is not my fault, use this API at your own risk.

## Install

```bash
npm install hidabroot
```

Or with yarn:

```bash
yarn add hidabroot
```

## Features

#### Note

The current version is still in beta, meaning more features are coming soon and still in development.

- [Getting the news titles from the website](#todaynews)
- [Viewing articles contents](#getarticle)

## API

### todayNews

Returns a promise that resolves to a JSON of 5 keys. Each key is the article title, and each key's value is the ID of the article (if there is an error or an issue with getting the values, it will return an empty string as the article title and 0 as the ID) of the top "Hadshot Hayom" from Hidabroot's website. The first key is the biggest box at the top of the page, while the other 4 are the smaller under it.

#### Example:

```js
const { todayNews } = require("hidabroot");
todayNews().then((result) => {
  console.log(result);
});
```

### getArticle

Returns a promise that resolves to a string (or null, if the article was not found). Here is a detailed table of the parameters of the function:

| Field | Type   | Description                                                                                | Required |
| ----- | ------ | ------------------------------------------------------------------------------------------ | -------- |
| id    | number | The ID of the article. Can be found in `https://www.hidabroot.org/article/X` (X is the ID) | yes      |

#### Example:

```js
const { todayNews, getArticle } = require("hidabroot");
todayNews().then((article) => {
  //gets todays news
  const desiredKey = Object.keys(article)[0];
  //gets the first key in the json. the first article is the biggest box at the top
  getArticle(article[desiredKey]).then((articleContent) => {
    //gets the article content of the biggest box at the top
    console.log(articleContent);
    //returns the content to the console
  });
});
```

## Contributing

All contributions are welcome! Feel free to open an issue or a pull request.
