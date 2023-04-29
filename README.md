# Typedoc Umami

## Usage

Install:

```bash
npm install typedoc-plugin-umami
```

## typedoc.json

```json
{
  "plugin": ["typedoc-plugin-umami"],
  "umamiScriptSrc": "https://example.com/script.js",
  "umamiWebsiteId": "00000000-0000-0000-0000-000000000000"
}
```

### typedoc.config.cjs

```javascript
/** @type {import('typedoc-plugin-umami').TypeDocOptions} */
module.exports = {
  plugin: ["typedoc-plugin-umami"],
  umamiScriptSrc: "https://example.com/script.js",
  umamiWebsiteId: "00000000-0000-0000-0000-000000000000",
};
```
