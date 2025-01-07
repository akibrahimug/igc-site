/**
 * Safely retrieve nested values from an object based on a path array.
 *
 * @param {Object} obj - The object (data structure) to traverse.
 * @param {Array<string|number>} path - An array of keys specifying the path to the nested property.
 * @param {*} [defaultValue=null] - The value to return if the path does not exist.
 * @returns {*} - The value at the specified path, or defaultValue if not found.
 */
function getNestedVals(obj, path, defaultValue = null) {
  if (!obj || !Array.isArray(path)) {
    return defaultValue;
  }

  let result = obj;
  for (let key of path) {
    // Check if key is valid in 'result'
    if (result && key in result) {
      result = result[key];
    } else {
      // Return the default value if the path doesn't exist
      return defaultValue;
    }
  }

  return result;
}
