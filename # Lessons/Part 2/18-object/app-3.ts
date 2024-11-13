/*
  .keyof


*/

import { z } from 'zod'

const Dog = z.object({
  name: z.string(),
  age: z.number(),
})

// .keyof -> create a <ZodEnum> schema from the keys of an object schema.
const keySchema = Dog.keyof() // ZodEnum<["name", "age"]>
