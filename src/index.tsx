import type { Application } from "typedoc";
import { ParameterType, JSX } from "typedoc";
export function load(app: Application) {
  app.options.addDeclaration({
    name: "umamiOptions",
    help: "Umami Plugin Options",
    type: ParameterType.Object,
    defaultValue: {},
  });

  app.renderer.hooks.on("head.begin", (ctx) => {
    const options = ctx.options.getValue("umamiOptions") as Record<
      string,
      string
    >;
    let { src, websiteId, hostUrl, autoTrack, doNotTrack, dataCache, domains } =
      options;
    let contents = "";
    contents += `src="${src}" data-website-id="${websiteId}" `;

    if (hostUrl) {
      contents += `data-host-url="${hostUrl}" `;
    }

    if (autoTrack) {
      contents += `data-auto-track="${autoTrack}" `;
    }

    if (doNotTrack) {
      contents += `data-do-not-track="${doNotTrack}" `;
    }

    if (dataCache) {
      contents += `data-cache="${dataCache}" `;
    }

    if (domains) {
      if (Array.isArray(domains)) domains = domains.join(",");
      contents += `data-domains="${domains}"`;
    }

    contents = contents.trimEnd();
    return <JSX.Raw html={`<script async ${contents}></script>`}></JSX.Raw>;
  });
}

export * from "./types";
