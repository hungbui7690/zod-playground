/*
  .partial
  - Inspired by the built-in TypeScript utility type Partial, the .partial method makes all properties optional.



*/

import { z } from 'zod'

const user = z.object({
  email: z.string(),
  username: z.string(),
})

// @ partial version -> all keys are optional -> { email?: string | undefined; username?: string | undefined }
const partialUser = user.partial()

// @ just email is optional -> { email?: string | undefined; username: string }
const optionalEmail = user.partial({
  email: true,
})
