const domain: string = "http://localhost";
const port: string = "8080";

export function getUrl(
  endpoint: string,
  pathVariables: object,
  queryParams: Record<string, string>
): string {
  let url = `${domain}:${port}/${endpoint}`;
  const queryString: string = new URLSearchParams(queryParams).toString();
  for (const [key, value] of Object.entries(pathVariables)) {
    url = url.replace(`:${key}`, value);
  }
  if (queryString) {
    url += `?${queryString}`;
  }
  return url;
}
