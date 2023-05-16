import type { TypeDocOptions as ImportedTypeDocOptions } from "typedoc";

export interface UmamiTypeDocOptions {
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

export type TypeDocOptions = ImportedTypeDocOptions & UmamiTypeDocOptions;
