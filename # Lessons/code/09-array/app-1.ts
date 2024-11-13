/*
  Arrays


*/

import { z } from 'zod'

const stringArray = z.array(z.string()) // array of strings
const altStringArray = z.string().array() // alternative way of creating an array

// .element -> get schema of array element
stringArray.element
