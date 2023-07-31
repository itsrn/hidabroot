# Hidabroot API _(unofficial)_

![npm version](https://img.shields.io/badge/npm-v0.5.0_beta-blue)
![typescript](https://img.shields.io/badge/</>-TypeScript-blue)
![issues](https://img.shields.io/github/issues/itsrn/hidabroot)
![pull requests](https://img.shields.io/github/issues-pr/itsrn/hidabroot)

_An (unofficial) API for Hidabroot_

> [!IMPORTANT]  
> This API may be blocked at any time by Hidabroot's team. If any damage caused by this API, it is not my fault, use this API at your own risk.

## Install

```bash
npm install hidabroot
```

Or with yarn:

```bash
yarn add hidabroot
```

## Features

> [!NOTE]  
> The current version is still in beta, meaning more features are coming soon and still in development.

- [Getting the news title from the website](#todaynews)

## API

### todayNews

Returns a promise that resolves to an array of 4 strings (if there is an error it will return null instead) of the top "Hadshot Hayom" from Hidabroot's website.

#### Example:

```js
const Hidabroot = require("hidabroot");
Hidabroot.todayNews().then((result) => {
  console.log(result);
});
```

## Contributing

All contributions are welcome! Feel free to open an issue or a pull request.
