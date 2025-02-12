export const appendReferrerTextToUrl = (url = '/', referrerText: string) => {
  if (!referrerText) return url;

  const uri = new URL(url);
  uri.searchParams.append('ref', referrerText);
  return uri.toString();
};
