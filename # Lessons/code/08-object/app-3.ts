/*
  .pick


*/

import { z } from 'zod'

// @ Typescript
interface User {
  id: number
  username: string
  email: string
  isAdmin: boolean
  createdAt: Date
}
// create a new type based on existing type + pick keys
type UserProfile = Pick<User, 'username' | 'email'> // => { id: number; name: string; }

const user: UserProfile = {
  username: 'joe.doe',
  email: 'joe.doe@gmail.com',
}

// @ Zod
const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
})

// To only keep certain keys, use .pick
const JustTheName = Recipe.pick({ name: true })
type JustTheName = z.infer<typeof JustTheName> // => { name: string }
