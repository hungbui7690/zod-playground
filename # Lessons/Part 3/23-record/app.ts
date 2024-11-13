/*
  Records
  - Record schemas are used to validate types such as Record<string, number>. This is particularly useful for storing or caching items by ID.



*/

import { z } from 'zod'

const User = z.object({ name: z.string() })

// @
const UserStore = z.record(z.string(), User) // => Record<string, { name: string }>
type UserStore = z.infer<typeof UserStore> // => {[x: string]: { name: string; }}

// @
const userStore: UserStore = {}
userStore['77d2586b-9e8e-4ecf-8b21-ea7e0530eadd'] = {
  name: 'Carlotta',
} // ❎

userStore['77d2586b-9e8e-4ecf-8b21-ea7e0530eadd'] = {
  whatever: 'Ice cream sundae',
} // ❌
