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
    if (result && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result;
}

function normalizePath(path) {
  // Remove any trailing slash, except if the path is just "/"
  // (to avoid turning "/" into an empty string)
  if (path !== "/" && path.endsWith("/")) {
    return path.replace(/\/+$/, "");
  }
  return path;
}

/**
 * Function to mutate the navigation links to the file structure need to display nav links
 */
export function modifyNavLinks(navigation) {
  const data = Object.keys(navigation ?? {})
    .map((key) => ({
      name: navigation[key]?.name || key,
      path: `/${navigation[key]?.slug || ""}`,
    }))
    .map((item) => {
      // Check if the item's name is 'Home' (case-insensitive) and update the path
      if (item.name.toLowerCase() === "home") {
        return { ...item, path: "/" };
      }
      return item;
    });
  const filteredData = data.filter((item) => {
    if (item.is_folder) return false; // example skip
    if (!item.path) return false; // skip if no path
    return true;
  });

  // 2) Remove duplicates by path (after normalizing)
  const seenPaths = new Set();
  const uniqueItems = [];

  for (const item of filteredData) {
    // Normalize the path
    const normPath = normalizePath(item.path);
    if (!seenPaths.has(normPath)) {
      seenPaths.add(normPath);
      // Store the normalized path in the item
      uniqueItems.push({
        ...item,
        path: normPath,
      });
    }
  }

  // 3) Create a map from path -> menu object
  const menuMap = {};
  for (const item of uniqueItems) {
    const cleanedTitle = item.name.replace(/_/g, "");
    menuMap[item.path] = {
      title: cleanedTitle,
      path: item.path,
      submenu: false,
      subMenuItems: [],
    };
  }

  // 4) Build parent–child relationships
  //    If child.path starts with parent.path + "/", it's a child.
  //    But skip if child.path === parent.path (avoid self-children).
  const childPaths = new Set();

  for (const child of uniqueItems) {
    for (const parent of uniqueItems) {
      if (child.path === parent.path) continue; // skip if same path (self)
      if (child.path.startsWith(parent.path + "/")) {
        menuMap[parent.path].submenu = true;
        menuMap[parent.path].subMenuItems.push(menuMap[child.path]);
        childPaths.add(child.path);
      }
    }
  }

  // 5) Build top-level array (exclude anything that is a child)
  const finalMenu = [];
  for (const item of uniqueItems) {
    if (!childPaths.has(item.path)) {
      finalMenu.push(menuMap[item.path]);
    }
  }

  return finalMenu;
}
