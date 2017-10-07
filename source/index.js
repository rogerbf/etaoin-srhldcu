const letterFrequency = [
  [ `z`, 9 ],
  [ `q`, 12 ],
  [ `j`, 16 ],
  [ `x`, 23 ],
  [ `k`, 54 ],
  [ `v`, 105 ],
  [ `b`, 148 ],
  [ `y`, 166 ],
  [ `w`, 168 ],
  [ `g`, 187 ],
  [ `p`, 214 ],
  [ `f`, 240 ],
  [ `m`, 251 ],
  [ `u`, 273 ],
  [ `c`, 334 ],
  [ `d`, 382 ],
  [ `l`, 407 ],
  [ `h`, 505 ],
  [ `r`, 628 ],
  [ `s`, 651 ],
  [ `n`, 723 ],
  [ `i`, 757 ],
  [ `o`, 764 ],
  [ `a`, 804 ],
  [ `t`, 928 ],
  [ `e`, 1249 ]
]

const randomLetter = (
  frequencyMap = letterFrequency.slice(1),
  [ letter, frequency ] = frequencyMap.slice(0, 1).pop(),
  n = Math.floor(Math.random() * 1249) + 1
) => {
  const current = frequencyMap.slice(0, 1).pop()
  const next = frequencyMap.slice(1)
  if ((current[1] > n) || (next.length === 0)) {
    return letter
  } else {
    return randomLetter(next, current, n)
  }
}

const wordLengthFrequency = [
  [ 21, 13 ],
  [ 23, 32 ],
  [ 22, 81 ],
  [ 20, 635 ],
  [ 19, 851 ],
  [ 18, 2862 ],
  [ 17, 7281 ],
  [ 16, 15122 ],
  [ 15, 56524 ],
  [ 14, 165308 ],
  [ 13, 385058 ],
  [ 12, 712415 ],
  [ 11, 1309806 ],
  [ 1, 2230122 ],
  [ 10, 2288384 ],
  [ 9, 3300693 ],
  [ 8, 4420729 ],
  [ 7, 5905266 ],
  [ 6, 6239121 ],
  [ 5, 7958932 ],
  [ 4, 10998833 ],
  [ 2, 13129385 ],
  [ 3, 15256838 ]
]

const randomWordLength = (
  frequencyMap = wordLengthFrequency.slice(1),
  [ length, frequency ] = frequencyMap.slice(0, 1).pop(),
  n = Math.floor(Math.random() * 15256838) + 1
) => {
  const current = frequencyMap.slice(0, 1).pop()
  const next = frequencyMap.slice(1)
  if ((current[1] > n) || (next.length === 0)) {
    return length
  } else {
    return randomWordLength(next, current, n)
  }
}

const pools = {
  letters: letterFrequency.reduce(
    (accumulator, [ letter, frequency ]) =>
      accumulator.concat(Array(frequency).fill(letter)),
    []
  ),
  wordLengths: wordLengthFrequency.reduce(
    (accumulator, [ length, frequency ]) =>
      accumulator.concat(Array(frequency).fill(length)),
    []
  )
}

const getRandomLetter = () =>
  pools.letters[Math.floor(Math.random() * pools.letters.length)]
const getRandomWordLength = () =>
  pools.wordLengths[Math.floor(Math.random() * pools.wordLengths.length)]

const makeWord = () =>
  Array(getRandomWordLength())
    .fill(undefined)
    .map(getRandomLetter)
    .join(``)

const makeSentence = (characters = 60, result = ``) =>
  result.length + 1 >= characters
    ? result.slice(1).concat(`.`)
    : makeSentence(characters, result.concat(` ${ makeWord() }`))

export default { makeSentence, wordLengthFrequency }
