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

const wordLengthFrequency = [
  [ 1, 2998 ],
  [ 2, 17651 ],
  [ 3, 20551 ],
  [ 4, 14787 ],
  [ 5, 10700 ],
  [ 6, 8388 ],
  [ 7, 7939 ],
  [ 8, 5943 ],
  [ 9, 4437 ],
  [ 10, 3076 ],
  [ 11, 1761 ],
  [ 12, 958 ],
  [ 13, 518 ],
  [ 14, 222 ],
  [ 15, 76 ],
  [ 16, 20 ],
  [ 17, 10 ],
  [ 18, 4 ],
  [ 19, 1 ],
  [ 20, 1 ]
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
