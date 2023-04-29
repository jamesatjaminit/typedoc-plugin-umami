# Typedoc Umami

## Usage

Install:

```bash
npm install typedoc-plugin-umami
```

### typedoc.json

```jsonc
{
  "plugin": ["typedoc-plugin-umami"],
  "umamiOptions": {
    "src": "https://example.com/script.js", // Required, Umami script src
    "websiteId": "00000000-0000-0000-0000-000000000000" // Required, Umami website id
    // Optional options, see https://umami.is/docs/tracker-configuration for details
    "hostUrl": "",
    "autoTrack": true,
    "doNotTrack": false,
    "dataCache": true,
    "domains": []
  }
}
```

### typedoc.config.cjs

```javascript
/** @type {import('typedoc-plugin-umami').TypeDocOptions} */
module.exports = {
  plugin: ["typedoc-plugin-umami"],
  umamiOptions: {
    src: "https://example.com/script.js", // Required, Umami script src
    websiteId: "00000000-0000-0000-0000-000000000000", // Required, Umami website id
    // Optional options, see https://umami.is/docs/tracker-configuration for details
    hostUrl: "",
    autoTrack: true,
    doNotTrack: false,
    dataCache: true,
    domains: [],
  },
};
```
