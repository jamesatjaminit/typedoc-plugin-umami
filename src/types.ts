import type { TypeDocOptions as ImportedTypeDocOptions } from "typedoc";

export interface TypeDocOptions extends ImportedTypeDocOptions {
  umamiScriptSrc?: string;
  umamiWebsiteId?: string;
}
