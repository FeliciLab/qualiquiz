/**
 * Lint function helper to verify a property in a object.
 * @param obj
 * @param key
 * @returns {boolean}
 */
export function hasOwnProperty (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
