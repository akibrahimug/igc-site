/**
 * Safely retrieve nested values from an object based on a path array.
 *
 * @param {Object} obj - The object (data structure) to traverse.
 * @param {Array<string|number>} path - An array of keys specifying the path to the nested property.
 * @param {*} [defaultValue=null] - The value to return if the path does not exist.
 * @returns {*} - The value at the specified path, or defaultValue if not found.
 */
export function getNestedVals(obj, path, defaultValue = null) {
  if (!obj || !Array.isArray(path)) {
    return defaultValue;
  }

  let result = obj;
  for (let key of path) {
    // "key in result" throws on primitives, so require an object/array first
    if (result !== null && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result;
}

/**
 * Parse a Storyblok datasource value that editors paste as JSON or loose
 * JavaScript (single quotes, unquoted keys, trailing commas, `const x =`).
 * Returns [] when nothing parseable is found.
 */
export function parseDatasourceValue(str) {
  if (typeof str !== "string") return str ?? [];
  const raw = str.trim();
  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    const cleaned = raw
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^(?:export\s+default\s+)?(?:const|let|var)\s+\w+\s*=\s*/i, "")
      .replace(/;+\s*$/, "")
      .replace(/,\s*([\]}])/g, "$1")
      .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":');

    try {
      return JSON.parse(cleaned);
    } catch {
      return [];
    }
  }
}

/**
 * Turn a Storyblok datasource response into a { name: parsedValue } map.
 * Accepts the raw API response ({ data: { datasource_entries } }).
 */
export function parseDatasourceEntries(datasource) {
  const entries = datasource?.data?.datasource_entries ?? [];
  return entries.reduce((acc, item) => {
    acc[item.name] = parseDatasourceValue(item.value);
    return acc;
  }, {});
}
