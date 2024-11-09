/*
  Validations
  - All types in Zod have an optional options parameter you can pass as the last param which defines things like error messages.
  - Also many types has validations you can chain onto the end of the type like optional


----------------

  z.string().optional()
  z.number().lt(5)
  optional() - Makes field optional
  nullable - Makes field also able to be null
  nullish - Makes field able to be null or undefined


----------------

  z.string().max(5)
  z.string().min(5)
  z.string().length(5)
  z.string().email()
  z.string().url()
  z.string().uuid()
  z.string().cuid()
  z.string().regex(/test/g)
  z.string().startsWith('string')
  z.string().endsWith('string')
  z.string().trim() // trim whitespace
  z.string().datetime() // defaults to UTC, see below for options


----------------

  z.number().gt(5);
  z.number().gte(5); // alias .min(5)
  z.number().lt(5);
  z.number().lte(5); // alias .max(5)

  z.number().int(); // value must be an integer

  z.number().positive(); //     > 0
  z.number().nonnegative(); //  >= 0
  z.number().negative(); //     < 0
  z.number().nonpositive(); //  <= 0

  z.number().multipleOf(5); // Evenly divisible by 5. Alias .step(5)

  z.number().finite(); // value must be finite, not Infinity or -Infinity


*/

import { z } from 'zod'

const KidSchema = z.object({
  username: z.string().min(5).max(20),
  age: z.number().min(0).max(12).optional(),
})

type Kid = z.infer<typeof KidSchema>

const alex: Kid = {
  username: 'David Stone',
  age: 15,
}

console.log(KidSchema.parse(alex))
