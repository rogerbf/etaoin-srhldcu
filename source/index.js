const randomNumber = require(`pick-a-number`)

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

const frequencyMapLookup = (frequencyMap, n) => {
  const lookup = (map, max, previous = [], [ target, frequency ] = previous) =>
    frequency >= max || map.length === 0
      ? target
      : lookup(map.slice(1), max, map[0])
  return lookup(frequencyMap, n)
}

const randomWordLength = (target = randomNumber({ min: 1, max: 15256838 })) =>
  frequencyMapLookup(wordLengthFrequency, target)

const randomLetter = (target = randomNumber({ min: 1, max: 1249 })) =>
  frequencyMapLookup(letterFrequency, target)

const randomSentenceLength = randomNumber.bind(null, { min: 50, max: 60 })

export const word = () =>
  Array(randomWordLength())
    .fill(undefined)
    .map(() => randomLetter())
    .join(``)

export const sentence = (characters = randomSentenceLength(), result = ``) =>
  result.length + 1 >= characters
    ? result.slice(1).concat(`.`)
    : sentence(characters, result.concat(` ${ word() }`))
