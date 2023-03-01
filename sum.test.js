const sum = require('./sum')
const common = require('./BeforeEach')
beforeEach(()=>{
console.warn(common())
})
test("BeforeEach Testing",()=>{
    expect(sum()).toBe(30)
})
