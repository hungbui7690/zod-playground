import { z } from 'zod'

const schema = z.coerce.string()

// @ parse
schema.parse('tuna') // => "tuna"
schema.parse(12) // => "12"
schema.parse(true) // => "true"
schema.parse(undefined) // => "undefined"
schema.parse(null) // => "null"
