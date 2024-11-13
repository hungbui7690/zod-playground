/*
  .deepPartial
  - The .partial method is shallow — it only applies one level deep. 
    -> use .deepPartial() to apply it recursively



*/

import { z } from 'zod'

const user = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
})

const deepPartialUser = user.deepPartial() // make all nested keys optional

// 🌲 Important limitation: deep partials only work as expected in hierarchies of objects, arrays, and tuples
