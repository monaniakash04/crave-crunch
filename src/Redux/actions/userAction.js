export const DISPLAY_USER_INFO = "DISPLAY_USER_INFO";

export function displayUserInfo(info) {
  return { type: DISPLAY_USER_INFO, payload: info };
}
