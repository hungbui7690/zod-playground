/*
  .passthrough


*/

import { z } from 'zod'

const person = z.object({
  name: z.string(),
})

person.parse({
  name: 'bob dylan',
  extraKey: 61,
})
// => { name: "bob dylan" } -> extraKey has been stripped

// Instead, if you want to pass through unknown keys, use .passthrough()
person.passthrough().parse({
  name: 'bob dylan',
  extraKey: 61,
}) // => { name: "bob dylan", extraKey: 61 }
