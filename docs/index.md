# Bhutan Regions

A comprehensive npm package providing data and utility functions for all of Bhutan's administrative divisions: dzongkhags (districts) and gewogs (sub-districts) in both English and Dzongkha script (རྫོང་ཁ).

## Installation

```bash
npm install bhutan-regions
```

## Features

- Complete list of all 20 dzongkhags (districts) of Bhutan
- Complete list of all gewogs (sub-districts) for each dzongkhag
- Names in both English and Dzongkha script (རྫོང་ཁ)
- Utility functions to search and validate dzongkhags and gewogs
- Bilingual support for applications needing both English and Dzongkha

## Example Usage

```javascript
const bhutanRegions = require("bhutan-regions");

// Get all dzongkhags with Dzongkha script
const bilingualDzongkhags = bhutanRegions.getAllDzongkhagsBilingual();
bilingualDzongkhags.forEach((dzongkhag) => {
  console.log(`${dzongkhag.english} (${dzongkhag.dzongkha})`);
});

// Get gewogs for Thimphu in both languages
const thimphuBilingualGewogs =
  bhutanRegions.getGewogsBilingualByDzongkhag("Thimphu");
thimphuBilingualGewogs.forEach((gewog) => {
  console.log(`${gewog.english} (${gewog.dzongkha})`);
});
```

## API Documentation

See the [complete API documentation](https://github.com/ChimiGit/bhutan-regions#api-reference) in the README.

## Source Code

[GitHub Repository](https://github.com/ChimiGit/bhutan-regions)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
