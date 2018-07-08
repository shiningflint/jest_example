import NumberCounter from '../src/Counter/NumberCounter.vue'
import { shallowMount } from '@vue/test-utils'

describe('NumberCounter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NumberCounter)
  })

  it('emits increment', () => {
    wrapper.vm.increaseNumber()
    expect(wrapper.emitted().increaseNumber).toBeTruthy()
  })

  it('emits decrement', () => {
    wrapper.vm.decreaseNumber()
    expect(wrapper.emitted().decreaseNumber).toBeTruthy()
  })
})
