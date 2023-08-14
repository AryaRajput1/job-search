import evenOrOdd  from '@/playground.js';

describe('playground.js',()=>{
it('checks for event number',()=>{
    expect(evenOrOdd(2)).toBe('Even');
  })

  it('checks for odd number',()=>{
    expect(evenOrOdd(3)).toBe('Odd');
  })
})