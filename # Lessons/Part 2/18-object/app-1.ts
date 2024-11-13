/*
  Objects


*/

import { z } from 'zod'

// all properties are required by default
const Dog = z.object({
  name: z.string(),
  age: z.number(),
})

// extract the inferred type like this
type Dog = z.infer<typeof Dog>

// equivalent to:
type DogType = {
  name: string
  age: number
}
