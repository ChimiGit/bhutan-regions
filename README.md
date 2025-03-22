# Bhutan Regions

A comprehensive npm package providing data and utility functions for all of Bhutan's administrative divisions: dzongkhags (districts) and gewogs (sub-districts) in both English and Dzongkha script (རྫོང་ཁ).

## Installation

```bash
npm install bhutan-regions
```

## Usage

```javascript
const bhutanRegions = require("bhutan-regions");

import * as bhutanRegions from "bhutan-regions";

// Get all dzongkhags (districts) in English
const allDzongkhags = bhutanRegions.getAllDzongkhags();
console.log(allDzongkhags);
// ['Bumthang', 'Chhukha', 'Dagana', ...]

// Get all dzongkhags with Dzongkha script
const bilingualDzongkhags = bhutanRegions.getAllDzongkhagsBilingual();
console.log(bilingualDzongkhags);
// [{ english: 'Bumthang', dzongkha: 'བུམ་ཐང་' }, ...]

// Get all gewogs (sub-districts) in English
const allGewogs = bhutanRegions.getAllGewogs();
console.log(allGewogs);
// ['Chhume', 'Chhoekhor', 'Tang', ...]

// Get all gewogs with Dzongkha script
const bilingualGewogs = bhutanRegions.getAllGewogsBilingual();
console.log(bilingualGewogs);
// [{ english: 'Chhume', dzongkha: 'ཆུ་སྨད་', dzongkhag: 'Bumthang' }, ...]

// Get gewogs for a specific dzongkhag in English
const paroGewogs = bhutanRegions.getGewogsByDzongkhag("Paro");
console.log(paroGewogs);
// ['Doga', 'Doteng', 'Hungrel', ...]

// Get gewogs for a specific dzongkhag with Dzongkha script
const paroBilingualGewogs = bhutanRegions.getGewogsBilingualByDzongkhag("Paro");
console.log(paroBilingualGewogs);
// [{ english: 'Doga', dzongkha: 'དོ་དགའ་' }, ...]

// Find which dzongkhag a gewog belongs to in English
const dzongkhag = bhutanRegions.getDzongkhagByGewog("Lamgong");
console.log(dzongkhag);
// 'Paro'

// Find which dzongkhag a gewog belongs to with Dzongkha script
const bilingualDzongkhag =
  bhutanRegions.getDzongkhagBilingualByGewog("Lamgong");
console.log(bilingualDzongkhag);
// { english: 'Paro', dzongkha: 'སྤ་རོ་' }

// Get Dzongkha name for a dzongkhag
const thimphuDzongkha = bhutanRegions.getDzongkhagDzongkha("Thimphu");
console.log(thimphuDzongkha);
// 'ཐིམ་ཕུག་'

// Get Dzongkha name for a gewog
const lingzhiDzongkha = bhutanRegions.getGewogDzongkha("Lingzhi");
console.log(lingzhiDzongkha);
// 'གླིང་བཞི་'

// Get complete data
const allRegions = bhutanRegions.getAllRegions();
console.log(allRegions);
// [{ dzongkhag: 'Bumthang', dzongkhagDzongkha: 'བུམ་ཐང་', gewogs: [...] }, ...]

// Count dzongkhags and gewogs
console.log(`Bhutan has ${bhutanRegions.countDzongkhags()} dzongkhags`);
console.log(`Bhutan has ${bhutanRegions.countGewogs()} gewogs`);

// Check if a name is a valid dzongkhag or gewog
console.log(bhutanRegions.isDzongkhag("Thimphu")); // true
console.log(bhutanRegions.isGewog("Kawang")); // true
```

## API Reference

### Dzongkhag Functions

#### `getAllDzongkhags()`

Returns an array of all dzongkhag names in Bhutan in English.

#### `getAllDzongkhagsBilingual()`

Returns an array of objects with dzongkhag names in both English and Dzongkha script.

#### `getDzongkhagDzongkha(dzongkhag)`

Returns the Dzongkha script name for the specified dzongkhag. Returns `null` if the dzongkhag is not found.

#### `countDzongkhags()`

Returns the total number of dzongkhags in Bhutan.

#### `isDzongkhag(name)`

Returns `true` if the provided name is a valid dzongkhag, `false` otherwise.

### Gewog Functions

#### `getAllGewogs()`

Returns an array of all gewog names in Bhutan in English.

#### `getAllGewogsBilingual()`

Returns an array of objects with gewog names in both English and Dzongkha script, and their parent dzongkhag.

#### `getGewogDzongkha(gewog)`

Returns the Dzongkha script name for the specified gewog. Returns `null` if the gewog is not found.

#### `countGewogs()`

Returns the total number of gewogs in Bhutan.

#### `isGewog(name)`

Returns `true` if the provided name is a valid gewog, `false` otherwise.

### Relationship Functions

#### `getGewogsByDzongkhag(dzongkhag)`

Returns an array of gewogs for the specified dzongkhag in English. Returns `null` if the dzongkhag is not found.

#### `getGewogsBilingualByDzongkhag(dzongkhag)`

Returns an array of objects with gewog names in both English and Dzongkha script for the specified dzongkhag. Returns `null` if the dzongkhag is not found.

#### `getDzongkhagByGewog(gewog)`

Returns the name of the dzongkhag that contains the specified gewog in English. Returns `null` if the gewog is not found.

#### `getDzongkhagBilingualByGewog(gewog)`

Returns an object with the dzongkhag name in both English and Dzongkha script that contains the specified gewog. Returns `null` if the gewog is not found.

### Full Data Access

#### `getAllRegions()`

Returns the complete data structure with all dzongkhags and their respective gewogs in both English and Dzongkha.

## Data Structure

The data is organized as an array of objects, each representing a dzongkhag with its gewogs:

```javascript
[
  {
    dzongkhag: "Bumthang",
    dzongkhagDzongkha: "བུམ་ཐང་",
    gewogs: [
      { name: "Chhume", dzongkha: "ཆུ་སྨད་" },
      { name: "Chhoekhor", dzongkha: "ཆོས་འཁོར་" },
      // ...
    ],
  },
  // ...
];
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

This package aims to provide accurate information about Bhutan's administrative divisions in both English and Dzongkha. If you find any inaccuracies or missing data, please open an issue or submit a pull request.
