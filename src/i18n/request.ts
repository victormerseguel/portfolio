import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  //prettier-ignore
  if (!locale || !routing.locales.includes(locale as any)) { // eslint-disable-line @typescript-eslint/no-explicit-any
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../texts/${locale}.json`)).default,
  };
});
