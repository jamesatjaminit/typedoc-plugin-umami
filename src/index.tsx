import type { Application } from "typedoc";
import { ParameterType, JSX } from "typedoc";
export function load(app: Application) {
  app.options.addDeclaration({
    name: "umamiScriptSrc",
    help: "The script URL for the Umami analytics script",
    type: ParameterType.String,
  });
  app.options.addDeclaration({
    name: "umamiWebsiteId",
    help: "The website ID for the Umami analytics script",
    type: ParameterType.String,
  });
  app.renderer.hooks.on("head.begin", (ctx) => {
    const src = ctx.options.getValue("umamiScriptSrc");
    const id = ctx.options.getValue("umamiWebsiteId");
    return (
      <JSX.Raw
        html={`<script async src="${src}" data-website-id="${id}"></script>`}
      ></JSX.Raw>
    );
  });
}

export * from "./types";
