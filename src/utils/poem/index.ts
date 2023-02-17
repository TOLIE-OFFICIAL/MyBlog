function getIndex(str: string) {
  return Math.min(
    str.indexOf('。'),
    str.indexOf('?'),
    str.indexOf('!')
  )
}

export function poemSlice(content: string) {
  // content.indexOf(' ')
  let index = getIndex(content);
  index = index > 16 ? 16 : index;
  return content.slice(0, index)
}

