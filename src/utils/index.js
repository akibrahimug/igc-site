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
  if (!path) return "";
  if (path !== "/" && path.endsWith("/")) {
    return path.replace(/\/+$/, "");
  }
  return path;
}

export function modifyNavLinks(navigation) {
  // 1) Build initial array
  const initialData = Object.keys(navigation ?? {}).map((key) => {
    const name = navigation[key]?.name || key;
    let path = `/${navigation[key]?.slug || ""}`;
    if (name.toLowerCase() === "home") {
      path = "/";
    }
    return {
      ...navigation[key],
      name,
      path,
    };
  });

  // 2) Filter out invalid entries (adjust as needed).
  const filteredData = initialData.filter((item) => {
    // Example: keep brand_principles, skip items with no path
    if (item.name === "brand_principles") return true;
    if (!item.path) return false;
    // if (item.is_folder) return false; // remove if you want to keep folders
    return true;
  });

  // 2b) Force brand_principles path if missing
  filteredData.forEach((item) => {
    if (item.name === "brand_principles" && !item.path) {
      item.path = "/brand_principles";
    }
  });

  // 3) Normalize and deduplicate
  const seen = new Set();
  const uniqueItems = [];
  for (const item of filteredData) {
    const normPath = normalizePath(item.path);
    if (!seen.has(normPath)) {
      seen.add(normPath);
      uniqueItems.push({ ...item, path: normPath });
    }
  }

  // 4) Create path -> menu object
  const menuMap = {};
  uniqueItems.forEach((item) => {
    const cleanedTitle = item.name.replace(/_/g, " ");
    menuMap[item.path] = {
      title: cleanedTitle,
      path: item.path,
      submenu: false,
      subMenuItems: [],
    };
  });

  // 5) Parent–child logic
  const childPaths = new Set();
  for (const child of uniqueItems) {
    for (const parent of uniqueItems) {
      if (child.path === parent.path) continue;
      if (child.path.startsWith(parent.path + "/")) {
        menuMap[parent.path].submenu = true;
        menuMap[parent.path].subMenuItems.push(menuMap[child.path]);
        childPaths.add(child.path);
      }
    }
  }

  // 6) Build top-level array
  const finalMenu = [];
  for (const item of uniqueItems) {
    if (!childPaths.has(item.path)) {
      finalMenu.push(menuMap[item.path]);
    }
  }

  // 7) Sort everything in ascending alphabetical order
  return sortMenu(finalMenu);
}

/**
 * Recursively sorts a navigation array by `title`, ascending (A → Z).
 * Also sorts each submenu in the same way.
 */
function sortMenu(menuArray) {
  // Sort the current level
  menuArray.sort((a, b) => a.title.localeCompare(b.title));

  // Recursively sort subMenuItems
  menuArray.forEach((item) => {
    if (item.subMenuItems && item.subMenuItems.length > 0) {
      sortMenu(item.subMenuItems);
    }
  });

  return menuArray;
}
