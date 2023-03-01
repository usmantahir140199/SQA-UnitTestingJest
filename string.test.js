// String as a Function Output
// Match Complete String
const sum = require('./String as Function Output');
const s = require('./String as a Variable')
test("String Testing",()=>{
    expect(sum()).toMatch("Hello");
});

test("String Testing1",()=>{
    expect(sum()).not.toMatch("Hi");
});


/*
test("String Testing",()=>{
    expect(sum1("hello")).toMatch("hello");
});
*/

// String as a Variable
test("Variable String",()=>{
    expect(s).toMatch("Hello");
});
// To check that ll is appearing in the current variable
// Match Part of String
test("Variable String",()=>{
    expect(s).toMatch(/ll/);
});

// No Match Case
test("Variable String",()=>{
    expect(s).toMatch(/laa/);
});
test("Variable String",()=>{
    expect(s).not.toMatch(/laa/);
});