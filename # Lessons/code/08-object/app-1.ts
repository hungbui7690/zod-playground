/*
  Objects



*/

import { z } from 'zod'

// all properties are required by default
const DogSchema = z.object({
  name: z.string(),
  age: z.number(),
})

// extract the inferred type like this
type Dog = z.infer<typeof DogSchema>

// equivalent to:
// type Dog = {
//   name: string
//   age: number
// }

// @ .shape.key -> gets schema of that key
DogSchema.shape.name // => string schema
DogSchema.shape.age // => number schema
