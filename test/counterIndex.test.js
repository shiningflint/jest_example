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

  it('number defaults to min when props defined', () => {
    wrapper = shallowMount(CounterIndex, {
      propsData: {
        min: 5
      }
    })
    expect(wrapper.vm.number).toBe(5)
  })

  it('increase number increments to 1', () => {
    wrapper.vm.increaseNumber()
    expect(wrapper.vm.number).toBe(1)
  })

  it('decrease number decreases from 5 to 4', () => {
    wrapper.setData({ number: 5 })
    wrapper.vm.decreaseNumber()
    expect(wrapper.vm.number).toBe(4)
  })

  it('cannot decrease number below min', () => {
    wrapper = shallowMount(CounterIndex, {
      propsData: {
        min: 0
      }
    })
    wrapper.vm.decreaseNumber()
    expect(wrapper.vm.number).toBe(0)
  })
})
