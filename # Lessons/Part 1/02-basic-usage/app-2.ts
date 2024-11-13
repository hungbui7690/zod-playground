/*
  Basic usage
  - Creating a simple <object> <schema>


*/

import { z } from 'zod'

// @ Creating an object schema
const User = z.object({
  username: z.string(),
})

User.parse({ username: 'Ludwig' })

// @ extract the inferred type
type User = z.infer<typeof User> // { username: string }
