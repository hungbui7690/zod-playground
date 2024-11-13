/*
  .merge
  - equivalent to A.extend(B.shape)



*/

import { z } from 'zod'

// @ method 1
const BaseTeacher = z.object({ students: z.array(z.string()) })
const HasID = z.object({ id: z.string() })

const Teacher = BaseTeacher.merge(HasID)
type Teacher = z.infer<typeof Teacher> // => { students: string[], id: string }

// @ method 2
const Cat = z.object({
  name: z.string(),
})
const Dog = z.object({
  breed: z.string(),
})
const Pet = Cat.extend(Dog.shape)

// ❌ If the two schemas share keys, the properties of B overrides the property of A. The returned schema also inherits the "unknownKeys" policy (strip/strict/passthrough) and the catchall schema of B
