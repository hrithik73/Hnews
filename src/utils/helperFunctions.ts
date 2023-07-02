import Url from 'url-parse';

export const getIndex = (idx: number) => {
  return `${idx}. `;
};

export const getHost = (url: string | undefined) => {
  // // return regexForDomainName.test();
  // const matches = regexForDomainName.exec(url);
  // const hostname = matches && matches.length > 1 ? matches[1] : null;
  // return hostname;
  if (url) {
    let urlAfterParsing = new Url(url);
    return urlAfterParsing?.host;
  }
};
