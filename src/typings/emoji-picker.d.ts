declare module 'vue3-emoji-picker'

declare namespace MyEmojiPicker {
  interface Emoji {
    i: string,
    n: Reactive<string[]>,
    r: string, // with skin tone
    t: string, // skin tone
    u: string // without tone
  }
}

