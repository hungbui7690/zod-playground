/*
  Unions


*/

import { z } from 'zod'

// To validate an optional form input, you can union the desired string validation with an empty string literal.
// This example validates an input that is optional but needs to contain a valid URL:
const optionalUrl = z.union([z.string().url().nullish(), z.literal('')])

console.log(optionalUrl.safeParse(undefined).success) // true
console.log(optionalUrl.safeParse(null).success) // true
console.log(optionalUrl.safeParse('').success) // true
console.log(optionalUrl.safeParse('https://zod.dev').success) // true
console.log(optionalUrl.safeParse('not a valid url').success) // false
