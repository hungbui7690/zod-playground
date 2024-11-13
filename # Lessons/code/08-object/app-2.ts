/*
  .extends vs .merge



*/

import { z } from 'zod'

const DogSchema = z.object({
  name: z.string(),
  age: z.number(),
})

// @ .extend -> add new keys to schema
const DogWithBreed = DogSchema.extend({
  breed: z.string(),
})

// @ .merge -> combine two object schemas
const BaseTeacher = z.object({ students: z.array(z.string()) })
const HasID = z.object({ id: z.string() })

const Teacher = BaseTeacher.merge(HasID)
type Teacher = z.infer<typeof Teacher> // => { students: string[], id: string }
