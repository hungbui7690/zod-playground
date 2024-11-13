/*
  .extend


*/

import { z } from 'zod'

const Dog = z.object({
  name: z.string(),
  age: z.number(),
})

// @ extend -> add additional fields to an object schema
const DogWithBreed = Dog.extend({
  breed: z.string(),
})

// ❌ You can use <.extend> to <overwrite> fields! Be careful with this power!
