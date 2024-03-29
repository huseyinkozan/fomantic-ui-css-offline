# Fomantic UI CSS Offline

This repository is a fork of fomantic-ui-css as an offline version.

Inspired from [arthurlacoste/semantic-ui-offline](https://github.com/arthurlacoste/semantic-ui-offline).

Instead using a local copy of `Lato` font, removes references to it.

Note: After version 2.9.0, import statement removed and using offline font. Thus, no need to use this library after 2.9.0.


## Install

```bash
npm i @huseyinkozan/fomantic-ui-css-offline
```


## Update Fomantic UI

Check list;

* Get versions from https://github.com/fomantic/Fomantic-UI-CSS/blob/master/package.json.
  * Package version
  * JQuery version string
* Set package.json version.
* Sync JQuery version string.
* Run below commands;
  ```bash
  npm install
  node make-dist.js
  ```
* Check CSS files in `dist/` dir which should not contains any import statement.


## TODO

* Download and replace or delete or find any other solution for emoji lines like;
  ```css
  em[data-emoji="interrobang"]:before {
    background-image: url("https://twemoji.maxcdn.com/v/latest/svg/2049.svg");
  }
  ```
