const {isPalindrome} = require('../src/helper.js')

import { test, expect } from 'vitest'

test('add function', () => {
    const str = 'Room'
    expect(isPalindrome(str)).toBe(false)
})

test('add function 2', () => {
    const str = 'Rotator'
    expect(isPalindrome(str)).toBe(true)
})

test('add function 3', () => {
    const str = 'Repaper'
    expect(isPalindrome(str)).toBe(true)
})
