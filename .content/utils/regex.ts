export const RELEASE_VERSION = /###\s*`(\d+\.\d+(\.\d+)*)`/;
export const ALL_RELEASE_VERSIONS = new RegExp(RELEASE_VERSION.source, "g");
