const bhutanRegions = require("./data");

/**
 * Get all dzongkhags (districts) of Bhutan
 * @returns {Array} List of all dzongkhags
 */
function getAllDzongkhags() {
  return bhutanRegions.map((region) => region.dzongkhag);
}

/**
 * Get all dzongkhags with Dzongkha script
 * @returns {Array} List of objects with English and Dzongkha names
 */
function getAllDzongkhagsBilingual() {
  return bhutanRegions.map((region) => ({
    english: region.dzongkhag,
    dzongkha: region.dzongkhagDzongkha,
  }));
}

/**
 * Get all gewogs (sub-districts) of Bhutan
 * @returns {Array} List of all gewogs
 */
function getAllGewogs() {
  const allGewogs = [];
  bhutanRegions.forEach((region) => {
    region.gewogs.forEach((gewog) => {
      allGewogs.push(gewog.name);
    });
  });
  return allGewogs;
}

/**
 * Get all gewogs with Dzongkha script
 * @returns {Array} List of objects with English and Dzongkha names
 */
function getAllGewogsBilingual() {
  const allGewogs = [];
  bhutanRegions.forEach((region) => {
    region.gewogs.forEach((gewog) => {
      allGewogs.push({
        english: gewog.name,
        dzongkha: gewog.dzongkha,
        dzongkhag: region.dzongkhag,
      });
    });
  });
  return allGewogs;
}

/**
 * Get a dzongkhag's Dzongkha name by its English name
 * @param {string} dzongkhag - The dzongkhag English name
 * @returns {string|null} Dzongkha name or null if dzongkhag not found
 */
function getDzongkhagDzongkha(dzongkhag) {
  const region = bhutanRegions.find(
    (r) => r.dzongkhag.toLowerCase() === dzongkhag.toLowerCase()
  );
  return region ? region.dzongkhagDzongkha : null;
}

/**
 * Get a gewog's Dzongkha name by its English name
 * @param {string} gewog - The gewog English name
 * @returns {string|null} Dzongkha name or null if gewog not found
 */
function getGewogDzongkha(gewog) {
  for (const region of bhutanRegions) {
    const foundGewog = region.gewogs.find(
      (g) => g.name.toLowerCase() === gewog.toLowerCase()
    );
    if (foundGewog) {
      return foundGewog.dzongkha;
    }
  }
  return null;
}

/**
 * Get all gewogs for a specific dzongkhag
 * @param {string} dzongkhag - The dzongkhag name
 * @returns {Array|null} List of gewogs for the dzongkhag or null if dzongkhag not found
 */
function getGewogsByDzongkhag(dzongkhag) {
  const region = bhutanRegions.find(
    (r) => r.dzongkhag.toLowerCase() === dzongkhag.toLowerCase()
  );
  return region ? region.gewogs.map((gewog) => gewog.name) : null;
}

/**
 * Get all gewogs with Dzongkha names for a specific dzongkhag
 * @param {string} dzongkhag - The dzongkhag name
 * @returns {Array|null} List of gewogs with Dzongkha names or null if dzongkhag not found
 */
function getGewogsBilingualByDzongkhag(dzongkhag) {
  const region = bhutanRegions.find(
    (r) => r.dzongkhag.toLowerCase() === dzongkhag.toLowerCase()
  );
  return region
    ? region.gewogs.map((gewog) => ({
        english: gewog.name,
        dzongkha: gewog.dzongkha,
      }))
    : null;
}

/**
 * Get dzongkhag for a specific gewog
 * @param {string} gewog - The gewog name
 * @returns {string|null} Dzongkhag name or null if gewog not found
 */
function getDzongkhagByGewog(gewog) {
  for (const region of bhutanRegions) {
    if (
      region.gewogs.some((g) => g.name.toLowerCase() === gewog.toLowerCase())
    ) {
      return region.dzongkhag;
    }
  }
  return null;
}

/**
 * Get dzongkhag with Dzongkha name for a specific gewog
 * @param {string} gewog - The gewog name
 * @returns {Object|null} Object with dzongkhag names or null if gewog not found
 */
function getDzongkhagBilingualByGewog(gewog) {
  for (const region of bhutanRegions) {
    if (
      region.gewogs.some((g) => g.name.toLowerCase() === gewog.toLowerCase())
    ) {
      return {
        english: region.dzongkhag,
        dzongkha: region.dzongkhagDzongkha,
      };
    }
  }
  return null;
}

/**
 * Get full data of all dzongkhags and gewogs
 * @returns {Array} Complete bhutanRegions data
 */
function getAllRegions() {
  return [...bhutanRegions];
}

/**
 * Count total number of dzongkhags
 * @returns {number} Total count of dzongkhags
 */
function countDzongkhags() {
  return bhutanRegions.length;
}

/**
 * Count total number of gewogs
 * @returns {number} Total count of gewogs
 */
function countGewogs() {
  return getAllGewogs().length;
}

/**
 * Check if a dzongkhag exists
 * @param {string} dzongkhag - The dzongkhag name to check
 * @returns {boolean} True if dzongkhag exists, false otherwise
 */
function isDzongkhag(dzongkhag) {
  return bhutanRegions.some(
    (region) => region.dzongkhag.toLowerCase() === dzongkhag.toLowerCase()
  );
}

/**
 * Check if a gewog exists
 * @param {string} gewog - The gewog name to check
 * @returns {boolean} True if gewog exists, false otherwise
 */
function isGewog(gewog) {
  return getAllGewogs().some((g) => g.toLowerCase() === gewog.toLowerCase());
}

module.exports = {
  getAllDzongkhags,
  getAllDzongkhagsBilingual,
  getAllGewogs,
  getAllGewogsBilingual,
  getGewogsByDzongkhag,
  getGewogsBilingualByDzongkhag,
  getDzongkhagByGewog,
  getDzongkhagBilingualByGewog,
  getDzongkhagDzongkha,
  getGewogDzongkha,
  getAllRegions,
  countDzongkhags,
  countGewogs,
  isDzongkhag,
  isGewog,
};
