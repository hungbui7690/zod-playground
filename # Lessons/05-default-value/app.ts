/*
  Default Values
  - Can take a value or function.
  - Only returns a default when input is undefined.


-----------------

    z.string().default("David")
    z.string().default(Math.random)



*/

import { z } from 'zod'

const KidSchema = z.object({
  username: z.string().min(5).max(20),
  age: z.number().min(0).max(12).optional().default(10),
})

type Kid = z.infer<typeof KidSchema>

const alex: Kid = {
  username: 'David Stone',
}

console.log(KidSchema.parse(alex)) // { username: 'David Stone', age: 10 }
