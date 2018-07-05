import { joinString } from '../src/utils'

test('Hello, Kentang', () => {
  expect(joinString('Hello', 'kentang')).toBe('Hello, kentang')
})
