# Hidabroot API _(unofficial)_

![version](https://img.shields.io/github/package-json/v/itsrn/hidabroot)
![typescript](https://img.shields.io/badge/</>-TypeScript-blue)
![issues](https://img.shields.io/github/issues/itsrn/hidabroot)
![pull requests](https://img.shields.io/github/issues-pr/itsrn/hidabroot)
![Build Status](https://github.com/itsrn/hidabroot/actions/workflows/release.yml/badge.svg)

> _An (unofficial) API for Hidabroot_

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

## Contributing

All contributions are welcome! Feel free to open an issue (just search the [issue tracker](https://github.com/itsrn/hidabroot/issues) before opening an issue to make sure your issue hasn't already been reported or answered) or a pull request.
