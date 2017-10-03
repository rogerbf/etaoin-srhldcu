const letterFrequency = [
  [ `t`, 15978 ],
  [ `a`, 11682 ],
  [ `o`, 7631 ],
  [ `i`, 7294 ],
  [ `s`, 6686 ],
  [ `w`, 5497 ],
  [ `c`, 5238 ],
  [ `b`, 4434 ],
  [ `p`, 4319 ],
  [ `h`, 4200 ],
  [ `f`, 4027 ],
  [ `m`, 3826 ],
  [ `d`, 3174 ],
  [ `r`, 2826 ],
  [ `e`, 2799 ],
  [ `l`, 2415 ],
  [ `n`, 2284 ],
  [ `g`, 1642 ],
  [ `u`, 1183 ],
  [ `v`, 824 ],
  [ `y`, 763 ],
  [ `j`, 511 ],
  [ `k`, 456 ],
  [ `q`, 222 ],
  [ `x`, 45 ],
  [ `z`, 45 ]
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
