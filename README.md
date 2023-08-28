# Hidabroot API _(unofficial)_

![version](https://img.shields.io/github/package-json/v/itsrn/hidabroot)
![typescript](https://img.shields.io/badge/</>-TypeScript-blue)
![issues](https://img.shields.io/github/issues/itsrn/hidabroot)
![pull requests](https://img.shields.io/github/issues-pr/itsrn/hidabroot)
![Build Status](https://github.com/itsrn/hidabroot/actions/workflows/release.yml/badge.svg)

> _An (unofficial) API for Hidabroot_

## Important notice

This API is unofficial, meaning **I am not responisble for any damage caused by using this API**. This API may be _blocked at any time by Hidabroot's team_. **This API is never stable** as Hidabroot can change at any time their website structure that will break this API.

## Install

```bash
npm install hidabroot
```

Or with yarn:

```bash
yarn add hidabroot
```

## Usage

```js
import { todayNews } from "hidabroot";

todayNews().then((news) => {
  console.log(news);
});
//=> JSON object containing news titles along with their IDs
```

(also compitable with commonjs)

## API

### todayNews()

#### Example

```js
const { todayNews } = require("hidabroot");
todayNews().then((result) => {
  console.log(result);
});
```

Will return something like this:

```json
{
  "big article block title is here": 123456, //the number is the article ID. can be used with getArticle()
  "first small article block title is here": 123456,
  "second small article block title is here": 123456,
  "third small article block title is here": 123456,
  "fourth small article block title is here": 123456
}
```

### getArticle(id)

#### id

Type: `number`

The ID of the article. The ID can be found in the URL: `https://www.hidabroot.org/article/X` (X is the ID).

#### Example

```js
const { getArticle } = require("hidabroot");
getArticle(1185334).then((result) => console.log(result));
//gets the content of the article: https://www.hidabroot.org/article/1185334 and then log the content to the console
```

### search(query, options?)

#### query

Type: `string`

The query to search for in the website.

#### options

Type: [`searchOptions`](/src/types/search.ts)

The options for the search. Recommended to get better results.

#### Example

```ts
import { search } from "hidabroot";

const response = await search("האם היו עולמות קודמים?", {
  searchOptions: { searchType: "faq" }, // "faq" means "Ask The Rabbi" questions
});
console.log(response);
```

Which return to the console something like this:

```json
{
  "url for result": "result title"
}
```

Currently (`v0.8.0`), the search is capable to return ~10-15 results. This may be changed in the future.

### askTheRabbi(questionID)

#### questionID

Type: `number`

The "Ask The Rabbi" question ID. Can be found in `https://www.hidabroot.org/question/X` where X is the question ID.

#### Example

```ts
import { askTheRabbi, idExtracter } from "hidabroot";

const questionID = idExtracter("https://www.hidabroot.org/question/75137", {
  pageType: "askTheRabbi",
});
const response = await askTheRabbi(questionID);
console.log(response);
```

Which return to the console something like this:

```json
{
  "title": "the question title",
  "question": "the question",
  "answer": "the rabbi answer"
}
```

(or `null` if the page wasn't found or if an error occurred)

### idExtracter(input, options)

#### input

Type: `string`

The input URL of the Hidabroot page to extract the ID from.

#### options

Type: [`idExtracterOptions`](/src/types/idExtracter.ts)

The options for the extract process.

#### Example

```ts
import { idExtracter } from "hidabroot";

const questionID = idExtracter("https://www.hidabroot.org/question/75137", {
  pageType: "askTheRabbi",
});
console.log(questionID);
//=> 75137
```

## Contributing

All contributions are welcome! Feel free to open an issue (just search the [issue tracker](https://github.com/itsrn/hidabroot/issues) before opening an issue to make sure your issue hasn't already been reported or answered) or a pull request.
