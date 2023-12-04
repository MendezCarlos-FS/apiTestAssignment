const { apiService, apiServiceByTitle } = require("./apiService");

// jest.mock("./apiService");

describe("API Service Tests", () => {
    test("As a user, I should return 1427 apis", async () => {
        // Real Data
        const result = await apiService();
        const entries = result.data.entries;
        expect(entries).toHaveLength(1427);
        expect(entries[15].API).toEqual("Petfinder");
        expect(entries[15].Description).toEqual("Petfinder is dedicated to helping pets find homes, another resource to get pets adopted");
        expect(entries[15].Auth).toEqual("apiKey");
        expect(entries[15].HTTPS).toEqual(true);
        expect(entries[15].Cors).toEqual("yes");
        expect(entries[15].Link).toEqual("https://www.petfinder.com/developers/");
        expect(entries[15].Category).toEqual("Animals");
    });

    // test("As a user, I should return 17 apis", async () => {
    //     // Mock Data
    //     const result = await apiService();
    //     const entries = result.data.entries;
    //     expect(entries).toHaveLength(17);
    //     expect(entries[15].API).toEqual("Petfinder");
    //     expect(entries[15].Description).toEqual("Petfinder is dedicated to helping pets find homes, another resource to get pets adopted");
    //     expect(entries[15].Auth).toEqual("apiKey");
    //     expect(entries[15].HTTPS).toEqual(true);
    //     expect(entries[15].Cors).toEqual("yes");
    //     expect(entries[15].Link).toEqual("https://www.petfinder.com/developers/");
    //     expect(entries[15].Category).toEqual("Animals");
    // });

    test("As a user, I should return a collection of APIs by title", async () => {
        // Real and Mock Data
        const result = await apiServiceByTitle("adoptapet");
        const entries = result.data.entries;
        expect(entries).toHaveLength(1);
        expect(entries[0].API).toEqual("AdoptAPet");
        expect(entries[0].Description).toEqual("Resource to help get pets adopted");
        expect(entries[0].Auth).toEqual("apiKey");
        expect(entries[0].HTTPS).toEqual(true);
        expect(entries[0].Cors).toEqual("yes");
        expect(entries[0].Link).toEqual("https://www.adoptapet.com/public/apis/pet_list.html");
        expect(entries[0].Category).toEqual("Animals");
    });
});