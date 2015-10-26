import settings from "../config/settings";


export function makeTitle(title: string) {
  return `${title} | Apple Store Search v${settings.VERSION}`;
}
