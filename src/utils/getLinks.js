export function splitAndJoin(str, sign) {
  return str.split(' ').join(sign);
}

export function fetchInfo(artist, sign = '+', song) {
  const fetchedInfo = splitAndJoin(artist, sign) + 
  sign + splitAndJoin(song, sign);
  return fetchedInfo.toLowerCase();
}