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
  [ 2, 22 ],
  [ 3, 26 ],
  [ 4, 18 ],
  [ 5, 13 ],
  [ 6, 11 ],
  [ 7, 10 ]
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

export default makeSentence
