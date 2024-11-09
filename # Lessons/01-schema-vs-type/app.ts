/*
  - npm i typescript
  - tsc --init
  - npm i zod
  - npm install -D tsx


------------------------

  - tsx watch app.ts


*/

import { z } from 'zod'

// creating a schema
const UserSchema = z.object({
  username: z.string(),
})

// from schema to type
type User = z.infer<typeof UserSchema> // { username: string }

// creating a user with defined schema
const user: User = { username: 'Aladin' }
console.log(user)
