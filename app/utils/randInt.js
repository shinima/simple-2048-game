export default function randInt(min, max) {
  const range = max - min + 1
  const number = Math.random() * range + min
  return Math.floor(number)
}
