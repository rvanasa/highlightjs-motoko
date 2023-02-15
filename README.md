# `highlightjs-motoko`

> #### [highlight.js](https://github.com/highlightjs/highlight.js) syntax definitions for [Motoko](https://internetcomputer.org/docs/current/motoko/main/about-this-guide) and related languages.

---

## Installation

```bash
npm i --save highlightjs-motoko
```

## Basic Usage

```js
const hljs = require('highlightjs');
const defineMotoko = require('highlightjs-motoko');

defineMotoko(hljs);
hljs.highlightAll();
```

## Advanced Usage

```js
const hljs = require('highlightjs');
const { motoko, candid } = require('highlightjs-motoko');

// Individually register each language
hljs.registerLanguage('motoko', motoko);
hljs.registerLanguage('candid', candid);

hljs.highlightAll();
```
