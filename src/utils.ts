export function getFormatedTime(date: string) {
  const tempate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return tempate.format(new Date(date.toString()));
}
