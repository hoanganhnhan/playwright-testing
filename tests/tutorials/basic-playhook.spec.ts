import {test, expect} from '@playwright/test'


test.beforeEach("beforeEach", ()=>{
    console.log("trước mỗi test");
})

test.beforeAll("beforeAll", ()=>{
    console.log("trước all test");
})

test.afterEach("afterEach", ()=>{
    console.log("sau mỗi test");
})

test.afterAll("afterAll", ()=>{
    console.log("sau all test");
})

test("test 1", ()=>{
    console.log("test 1 nè");
})

test("test 2", ()=>{
    console.log("test 2 nè");
})
let x:number

test.describe("group 1", ()=>{
    test.beforeAll("trước mỗi test", ()=>{
        x = 1
    })
    test("test 1.1", ()=>{
        console.log(x);
    })
    test("test 1.2", ()=>{
        console.log(x);
    })
})

test.describe("group 2", ()=>{
    test.beforeAll("trước mỗi test", ()=>{
        x = 2
    })
    test("test 2.1", ()=>{
        console.log(x);
    })
    test("test 2.2", ()=>{
        console.log(x);
    })
})

//thay config fullyParallel: true, hoặc cmt lại để thấy sự khác nhau


