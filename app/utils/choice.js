import randInt from './randInt'

export default function choice(array) {
  return array[randInt(0, array.length - 1)]
}
