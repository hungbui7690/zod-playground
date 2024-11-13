/*
  .partial


*/

import { z } from 'zod'

// @ Typescript
type User = {
  firstName: string
  lastName: string
}

// make every key optional
let firstUser: Partial<User> = { firstName: 'John' }
let secondUser: User = { firstName: 'John', lastName: 'Doe' }

// @ Zod
const UserSchema = z.object({
  email: z.string(),
  username: z.string(),
})

// make every key optional
const partialUser = UserSchema.partial()
// { id?: string | undefined; name?: string | undefined; ingredients?: string[] | undefined }

// specific optional key
const optionalEmail = UserSchema.partial({
  email: true,
}) // { email?: string | undefined; username: string }
