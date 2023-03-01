const fetchData = require('./promise');
test("Promise Testing",()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('hello');
    });
});
test("Promise Testing",()=>{
    return fetchData().then((data)=>{
        expect(data).not.toBe('Hello');
    });
});
test("Promise Testing",()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('Hi');
    });
});