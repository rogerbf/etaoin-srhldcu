const letterFrequency = [
  [ `e`, 1249 ],
  [ `t`, 928 ],
  [ `a`, 804 ],
  [ `o`, 764 ],
  [ `i`, 757 ],
  [ `n`, 723 ],
  [ `s`, 651 ],
  [ `r`, 628 ],
  [ `h`, 505 ],
  [ `l`, 407 ],
  [ `d`, 382 ],
  [ `c`, 334 ],
  [ `u`, 273 ],
  [ `m`, 251 ],
  [ `f`, 240 ],
  [ `p`, 214 ],
  [ `g`, 187 ],
  [ `w`, 168 ],
  [ `y`, 166 ],
  [ `b`, 148 ],
  [ `v`, 105 ],
  [ `k`, 54 ],
  [ `x`, 23 ],
  [ `j`, 16 ],
  [ `q`, 12 ],
  [ `z`, 9 ]
]

const random = (max, min = 1) => Math.floor(Math.random() * max) + min

const wordLengthFrequency = [
  [ 1, 2230122 ],
  [ 2, 13129385 ],
  [ 3, 15256838 ],
  [ 4, 10998833 ],
  [ 5, 7958932 ],
  [ 6, 6239121 ],
  [ 7, 5905266 ],
  [ 8, 4420729 ],
  [ 9, 3300693 ],
  [ 10, 2288384 ],
  [ 11, 1309806 ],
  [ 12, 712415 ],
  [ 13, 385058 ],
  [ 14, 165308 ],
  [ 15, 56524 ],
  [ 16, 15122 ],
  [ 17, 7281 ],
  [ 18, 2862 ],
  [ 19, 851 ],
  [ 20, 635 ],
  [ 21, 13 ],
  [ 22, 81 ],
  [ 23, 32 ]
]

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
