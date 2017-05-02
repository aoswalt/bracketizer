const build = (length, val) =>
  Array.from({ length }, (v, i) => (val === undefined) ? i : val)

const take = (list, count) => ({
  head: list.slice(0, count),
  tail: list.slice(count),
})

const step = ({ list = [], segmentSize }, { head, tail }) =>
  tail && tail.length < segmentSize
  ? ({ segments: [...list, head], remain: tail })
  : step({ list: [...list, head], segmentSize }, take(list, segmentSize))

const divide = (list, segmentSize) => step({ segmentSize }, take(list, segmentSize))


console.warn(divide([1,2,3,4,5,6,7,8,9], 2 ))

export {
  build,
  take,
}
