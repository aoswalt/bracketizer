const build = (length, val) =>
  Array.from({ length }).map((v, i) => (val === undefined) ? i : val)

const split = (list, count) => ({
  head: list.slice(0, count),
  tail: list.slice(count),
})

/** Group Array functions */
const ArrayX = { build, split }

export {
  ArrayX as default,
  build as buildArray,
  split as splitArray,
}
