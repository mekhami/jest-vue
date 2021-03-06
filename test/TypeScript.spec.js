import Vue from 'vue'
import TypeScript from './resources/TypeScript.vue'
import jestVue from '../jest-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

test('processes .vue files', () => {
  const vm = new Vue(TypeScript).$mount()
  expect(typeof vm.$el).toBe('object')
})

test.skip('generates inline sourcemap', () => {
  const expectedMap = '//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2ljLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWpCQTs7OztBQVBBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImhlbGxvXCI+XG4gICAgICAgIDxoMSA6Y2xhc3M9XCJoZWFkaW5nQ2xhc3Nlc1wiPnt7IG1zZyB9fTwvaDE+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2Jhc2ljJyxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGhlYWRpbmdDbGFzc2VzOiBmdW5jdGlvbiBoZWFkaW5nQ2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZWQ6IHRoaXMuaXNDcmF6eSxcbiAgICAgICAgICAgICAgICAgICAgYmx1ZTogIXRoaXMuaXNDcmF6eSxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiB0aGlzLmlzQ3JhenksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1zZzogJ1dlbGNvbWUgdG8gWW91ciBWdWUuanMgQXBwJyxcbiAgICAgICAgICAgICAgICBpc0NyYXp5OiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiB0b2dnbGVDbGFzcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ3JhenkgPSAhdGhpcy5pc0NyYXp5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuPC9zY3JpcHQ+XG4iXX0='
  const filePath = resolve(__dirname, './resources/TypeScript.vue')
  const fileString = readFileSync(filePath, { encoding: 'utf8' })
  const output = jestVue.process(fileString, filePath)
  expect(output).toContain(expectedMap)
})
