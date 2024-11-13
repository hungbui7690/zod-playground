/*
  .shape


*/

import { z } from 'zod'

const Dog = z.object({
  name: z.string(),
  age: z.number(),
})

// .shape -> access the schemas for a particular key.
Dog.shape.name // => string schema
Dog.shape.age // => number schema
