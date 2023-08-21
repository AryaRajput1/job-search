import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", ()=>{
it("locates elements in the list and returns next elements in the list", ()=>{
    expect(nextElementInList([1,2,3,4,5,6,7,8,9,10],2)).toBe(3);
})

describe("when element is at the end of list",()=>{
it("should return the first element",()=>{
    expect(nextElementInList([1,2,3,4,5,6,7,8,9,10],10)).toBe(1);
})
})
})