import type { TypeDocOptions as ImportedTypeDocOptions } from "typedoc";

export interface TypeDocOptions extends ImportedTypeDocOptions {
  umamiOptions: {
    src?: string;
    websiteId?: string;
    hostUrl?: string;
    autoTrack?: boolean;
    doNotTrack?: boolean;
    dataCache?: boolean;
    domains?: string[];
  };
}
