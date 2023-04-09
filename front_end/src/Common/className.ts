const toTArr = <T extends string | number>(maybeArr: T | T[]): T[] =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr];
const toTArrMulti = <T extends string | number>(...styles: (T | T[])[]): T[] =>
  styles.reduce((acc: T[], curr) => [...acc, ...toTArr<T>(curr)], [] as T[]);

export const getClassNameCreator =
  <T extends string | number>(cssStyles: { [key: string]: string }) =>
  (...styles: (T | T[])[]): string =>
    Array.from(new Set(toTArrMulti<T>(...styles)))
      .map((v) => `${v}`)
      .map((v) => (typeof v === "string" ? cssStyles[v] || v : ""))
      .filter((v) => !!v)
      .join(" ");
