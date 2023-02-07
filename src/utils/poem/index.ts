function getIndex(str: string) {
  return Math.min(
    str.indexOf('。'),
    str.indexOf('?'),
    str.indexOf('!')
  )

}

export function poemSlice(content: string) {
  // content.indexOf(' ')
  const index = getIndex(content);
  return content.slice(0, index)
}

