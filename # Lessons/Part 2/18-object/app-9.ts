/*
  .required
  - Contrary to the .partial method, the .required method makes all properties required.



*/

import { z } from 'zod'

// @ partial version
const user = z
  .object({
    email: z.string(),
    username: z.string(),
  })
  .partial() // { email?: string | undefined; username?: string | undefined }

// @ required version
const requiredUser = user.required() // { email: string; username: string }

// @ just email is required
const requiredEmail = user.required({
  email: true,
})
