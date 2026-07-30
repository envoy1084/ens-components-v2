const assetUrl = (fileName: string) => new URL(`./assets/${fileName}`, import.meta.url).href;

export const DEFAULT_PROFILE_AVATAR_URL = assetUrl("default-profile-avatar.webp");
export const DEFAULT_PROFILE_HEADER_URL = assetUrl("default-profile-header.webp");
export const REGISTER_ENS_HEADER_URL = assetUrl("register-ens-header.svg");
export const REGISTER_ENS_SUCCESS_URL = assetUrl("register-ens-success.svg");
