import { z } from 'zod'

const UserSchema = z.object({
  username: z.string(),
})

type User = z.infer<typeof UserSchema>

const user: User = { username: 'Aladin' }

// @ parsing
const parsedUser = UserSchema.parse(user) // => {username: "Arafat"}
console.log(parsedUser)

// @ throws ZodError
// UserSchema.parse(12)

// $ "safe" parsing (doesn't throw error if validation fails)
UserSchema.safeParse(user) // => { success: true; data: {username: "Arafat"} }
UserSchema.safeParse(12) // => { success: false; error: ZodError }
