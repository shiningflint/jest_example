import Vue from 'vue'
import NumberCounter from '../src/Counter/NumberCounter.vue'

describe('NumberCounter', () => {
  // Inspect the methods
  it('Has increaseNumber & decreaseNumber methods', () => {
    expect(typeof NumberCounter.methods.increaseNumber).toBe('function')
    expect(typeof NumberCounter.methods.decreaseNumber).toBe('function')
  })
})
