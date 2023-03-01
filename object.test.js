const obj = require('./object');
test("Object Testing",()=>{
expect(obj()).toEqual({name:'usman'})
});

test("Object Testing2",()=>{
    expect(obj()).not.toEqual({name:'usman'})
    });

    test("Object Testing2",()=>{
        expect(obj()).toEqual({name:'tahir'})
        });