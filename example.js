const bhutanRegions = require("./src/index");

console.log("=== BHUTAN REGIONS BILINGUAL EXAMPLE ===\n");

// Example 1: Get all dzongkhags in both languages
console.log("All Dzongkhags with Dzongkha script:");
const bilingualDzongkhags = bhutanRegions.getAllDzongkhagsBilingual();
bilingualDzongkhags.forEach((dzongkhag) => {
  console.log(`${dzongkhag.english} (${dzongkhag.dzongkha})`);
});
console.log(`Total: ${bhutanRegions.countDzongkhags()} dzongkhags\n`);

// Example 2: Get gewogs for Thimphu in both languages
const thimphuBilingualGewogs =
  bhutanRegions.getGewogsBilingualByDzongkhag("Thimphu");
console.log("Gewogs in Thimphu dzongkhag with Dzongkha script:");
thimphuBilingualGewogs.forEach((gewog) => {
  console.log(`${gewog.english} (${gewog.dzongkha})`);
});
console.log(`Total: ${thimphuBilingualGewogs.length} gewogs\n`);

// Example 3: Find which dzongkhag a gewog belongs to with Dzongkha script
const gewog = "Lingzhi";
const bilingualDzongkhag = bhutanRegions.getDzongkhagBilingualByGewog(gewog);
console.log(
  `${gewog} gewog belongs to ${bilingualDzongkhag.english} (${bilingualDzongkhag.dzongkha}) dzongkhag\n`
);

// Example 4: Get Dzongkha script for specific dzongkhag and gewog
const dzongkhagName = "Paro";
const gewogName = "Lamgong";
console.log(
  `${dzongkhagName} in Dzongkha: ${bhutanRegions.getDzongkhagDzongkha(
    dzongkhagName
  )}`
);
console.log(
  `${gewogName} in Dzongkha: ${bhutanRegions.getGewogDzongkha(gewogName)}\n`
);

// Example 5: Total gewogs in Bhutan
console.log(
  `Bhutan has a total of ${bhutanRegions.countGewogs()} gewogs across all dzongkhags\n`
);

// Example 6: Get all gewogs with their Dzongkha names and parent dzongkhag
console.log("Sample of gewogs with Dzongkha script and parent dzongkhag:");
const allBilingualGewogs = bhutanRegions.getAllGewogsBilingual();
// Display just the first 5 gewogs to keep the output concise
allBilingualGewogs.slice(0, 5).forEach((gewog) => {
  console.log(`${gewog.english} (${gewog.dzongkha}) - ${gewog.dzongkhag}`);
});
console.log(`... and ${allBilingualGewogs.length - 5} more gewogs\n`);

// Example 7: Validation
console.log("Validation examples:");
console.log(
  `Is "Thimphu" a dzongkhag? ${bhutanRegions.isDzongkhag("Thimphu")}`
);
console.log(`Is "Kawang" a gewog? ${bhutanRegions.isGewog("Kawang")}`);
console.log(
  `Is "NonExistent" a dzongkhag? ${bhutanRegions.isDzongkhag("NonExistent")}`
);
