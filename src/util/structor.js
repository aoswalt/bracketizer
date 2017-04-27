/* eslint-disable no-invalid-this */

/**
 * Create a struct with the specified fields.
 * @param {string} fieldStringList - The struct's list of fields separate by spaces.
 * @return {function} The constructor for the struct.
 */
const makeStruct = (fieldListString) => {
  const fields = fieldListString.split(' ')
  const count = fields.length

  /**
   * @constructor
   * @struct
   * @param {...*} The values for the struct.
   */
  function constructor(...args) {
    for(let i = 0; i < count; i++) {
      this[fields[i]] = args[i]
    }
    this.isComplete = !args.includes(undefined)
    Object.freeze(this)
  }
  return constructor
}

export default makeStruct

/*
 * Example usage:
 * const Test = makeStruct('a bar foo')
 * const t = new Test(1, 2, 3)
 * console.log(t)
 */
