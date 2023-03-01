const fetchData = require('./Async')
test("Async Testing",async()=>{
const data = await fetchData()
expect(data).toBe("Hello");
    });
    test("Async Testing",async()=>{
        const data = await fetchData()
        expect(data).toBe("Hi");
            });

            test("Async Testing",async()=>{
                const data = await fetchData()
                expect(data).not.toBe("Hello");
                    });