# Typedoc Umami

## Usage

In your typedoc.config.cjs

```javascript
/** @type {import('typedoc-plugin-umami').TypeDocOptions} */
module.exports = {
	plugin: ["@jamesatjaminit/typedoc-umami"],
	umamiScriptSrc: "https://example.com/script.js",
  umamiWebsiteId: "00000000-0000-0000-0000-000000000000",
}