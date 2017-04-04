const build = (length, val) =>
  Array.from({ length }).map((v, i) => (val === undefined) ? i : val)

const take = (list, count) => ({
  head: list.slice(0, count),
  tail: list.slice(count),
})

/** Group Array functions */
const ArrayX = { build, take }

export {
  ArrayX as default,
  build as buildArray,
  take as takeArray,
}
