/*
  Optionals


*/

import { z } from 'zod'

const user = z.object({
  username: z.string().optional(),
})
type C = z.infer<typeof user> // { username?: string | undefined };

// @ You can extract the wrapped schema from a ZodOptional instance with .unwrap()
const stringSchema = z.string()
const optionalString = stringSchema.optional()
optionalString.unwrap() === stringSchema // true
