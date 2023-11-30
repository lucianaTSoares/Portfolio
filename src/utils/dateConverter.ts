export function dateConvert(dateString: string) {
  const data = new Date(dateString);

  const day = data.getUTCDate();
  const month = data.getUTCMonth() + 1;
  const year = data.getUTCFullYear();

  const formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;

  return formattedDate
}