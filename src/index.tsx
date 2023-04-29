import { Application, JSX, ParameterType } from "typedoc";
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
  const src = app.options.getValue("umamiScriptSrc");
  const id = app.options.getValue("umamiWebsiteId");
  if (!src || !id) {
    return;
  }
  app.renderer.hooks.on("head.begin", (ctx) => {
    return (
      <JSX.Raw
        html={`<script async src="${src}" data-website-id="${id}"></script>`}
      ></JSX.Raw>
    );
  });
}

export * from "./types";
