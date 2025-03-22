const bhutanRegions = require("../src/index");

describe("Bhutan Regions Package", () => {
  describe("Dzongkhag Functions", () => {
    test("getAllDzongkhags should return an array of dzongkhags", () => {
      const dzongkhags = bhutanRegions.getAllDzongkhags();
      expect(Array.isArray(dzongkhags)).toBe(true);
      expect(dzongkhags.length).toBeGreaterThan(0);
      expect(dzongkhags).toContain("Thimphu");
    });

    test("getAllDzongkhagsBilingual should return correct bilingual data", () => {
      const bilingualDzongkhags = bhutanRegions.getAllDzongkhagsBilingual();
      expect(Array.isArray(bilingualDzongkhags)).toBe(true);
      expect(bilingualDzongkhags.length).toBeGreaterThan(0);

      const thimphuEntry = bilingualDzongkhags.find(
        (d) => d.english === "Thimphu"
      );
      expect(thimphuEntry).toBeDefined();
      expect(thimphuEntry.dzongkha).toBe("ཐིམ་ཕུག་");
    });

    test("getDzongkhagDzongkha should return correct Dzongkha name", () => {
      expect(bhutanRegions.getDzongkhagDzongkha("Thimphu")).toBe("ཐིམ་ཕུག་");
      expect(bhutanRegions.getDzongkhagDzongkha("NonExistent")).toBeNull();
    });

    test("countDzongkhags should return the correct number", () => {
      expect(bhutanRegions.countDzongkhags()).toBe(20);
    });

    test("isDzongkhag should correctly validate dzongkhag names", () => {
      expect(bhutanRegions.isDzongkhag("Thimphu")).toBe(true);
      expect(bhutanRegions.isDzongkhag("thimphu")).toBe(true); // Case insensitive
      expect(bhutanRegions.isDzongkhag("NonExistent")).toBe(false);
    });
  });

  describe("Gewog Functions", () => {
    test("getAllGewogs should return an array of gewogs", () => {
      const gewogs = bhutanRegions.getAllGewogs();
      expect(Array.isArray(gewogs)).toBe(true);
      expect(gewogs.length).toBeGreaterThan(0);
      expect(gewogs).toContain("Kawang");
    });

    test("getAllGewogsBilingual should return correct bilingual data", () => {
      const bilingualGewogs = bhutanRegions.getAllGewogsBilingual();
      expect(Array.isArray(bilingualGewogs)).toBe(true);
      expect(bilingualGewogs.length).toBeGreaterThan(0);

      const kawangEntry = bilingualGewogs.find((g) => g.english === "Kawang");
      expect(kawangEntry).toBeDefined();
      expect(kawangEntry.dzongkha).toBe("ཀ་དབང་");
      expect(kawangEntry.dzongkhag).toBe("Thimphu");
    });

    test("getGewogDzongkha should return correct Dzongkha name", () => {
      expect(bhutanRegions.getGewogDzongkha("Kawang")).toBe("ཀ་དབང་");
      expect(bhutanRegions.getGewogDzongkha("NonExistent")).toBeNull();
    });

    test("countGewogs should return the correct number", () => {
      const totalGewogs = bhutanRegions.countGewogs();
      expect(typeof totalGewogs).toBe("number");
      expect(totalGewogs).toBeGreaterThan(200);
    });

    test("isGewog should correctly validate gewog names", () => {
      expect(bhutanRegions.isGewog("Kawang")).toBe(true);
      expect(bhutanRegions.isGewog("kawang")).toBe(true); // Case insensitive
      expect(bhutanRegions.isGewog("NonExistent")).toBe(false);
    });
  });

  describe("Relationship Functions", () => {
    test("getGewogsByDzongkhag should return correct gewogs", () => {
      const thimphuGewogs = bhutanRegions.getGewogsByDzongkhag("Thimphu");
      expect(Array.isArray(thimphuGewogs)).toBe(true);
      expect(thimphuGewogs).toContain("Kawang");
      expect(bhutanRegions.getGewogsByDzongkhag("NonExistent")).toBeNull();
    });

    test("getGewogsBilingualByDzongkhag should return correct bilingual gewogs", () => {
      const thimphuGewogs =
        bhutanRegions.getGewogsBilingualByDzongkhag("Thimphu");
      expect(Array.isArray(thimphuGewogs)).toBe(true);

      const kawangEntry = thimphuGewogs.find((g) => g.english === "Kawang");
      expect(kawangEntry).toBeDefined();
      expect(kawangEntry.dzongkha).toBe("ཀ་དབང་");

      expect(
        bhutanRegions.getGewogsBilingualByDzongkhag("NonExistent")
      ).toBeNull();
    });

    test("getDzongkhagByGewog should return correct dzongkhag", () => {
      expect(bhutanRegions.getDzongkhagByGewog("Kawang")).toBe("Thimphu");
      expect(bhutanRegions.getDzongkhagByGewog("NonExistent")).toBeNull();
    });

    test("getDzongkhagBilingualByGewog should return correct bilingual dzongkhag", () => {
      const dzongkhag = bhutanRegions.getDzongkhagBilingualByGewog("Kawang");
      expect(dzongkhag).toBeDefined();
      expect(dzongkhag.english).toBe("Thimphu");
      expect(dzongkhag.dzongkha).toBe("ཐིམ་ཕུག་");

      expect(
        bhutanRegions.getDzongkhagBilingualByGewog("NonExistent")
      ).toBeNull();
    });
  });

  describe("Full Data Access", () => {
    test("getAllRegions should return complete data structure", () => {
      const regions = bhutanRegions.getAllRegions();
      expect(Array.isArray(regions)).toBe(true);
      expect(regions.length).toBe(20);

      const thimphu = regions.find((r) => r.dzongkhag === "Thimphu");
      expect(thimphu).toBeDefined();
      expect(thimphu.dzongkhagDzongkha).toBe("ཐིམ་ཕུག་");
      expect(Array.isArray(thimphu.gewogs)).toBe(true);

      const kawang = thimphu.gewogs.find((g) => g.name === "Kawang");
      expect(kawang).toBeDefined();
      expect(kawang.dzongkha).toBe("ཀ་དབང་");
    });
  });
});
