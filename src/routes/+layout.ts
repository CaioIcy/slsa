export const prerender = true;
export const trailingSlash = 'always';

export async function load({ fetch, params }) {
  const dataJSON = await fetch('/data.json');
  const data = await dataJSON.json();
  return {
    db: buildDB(data)
  };
}

function buildDB(data) {
  const fGetAccountByCode = (code: string): any => {
    return data.codeMap[code];
  };

  const fGetPlayerBySlug = (slug: string): any => {
    return data.slugMap[slug];
  };

  const fGetPlayerByCode = (code: string): any => {
    const slippi = fGetAccountByCode(code);
    if (slippi?.slug) {
      return fGetPlayerBySlug(slippi.slug);
    }
    for (const [k, v] of Object.entries(data.slugMap)) {
      if ((v as any).slippiConnectCodes?.includes(code)) {
        return v;
      }
    }
    return null;
  };

  return {
    fGetAccountByCode,
    fGetPlayerBySlug,
    fGetPlayerByCode,
    ...data
  };
}
