import CounterIndex from '../src/Counter/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('NumberCounter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CounterIndex)
  })

  it('default value is zero', () => {
    expect(wrapper.vm.number).toBe(0)
  })

  it('increase number increments to 1', () => {
    wrapper.vm.increaseNumber()
    expect(wrapper.vm.number).toBe(1)
  })

  it('decrease number decreases to -1', () => {
    wrapper.vm.decreaseNumber()
    expect(wrapper.vm.number).toBe(-1)
  })
})
