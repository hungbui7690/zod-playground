/*
  Native enums
  - Zod enums are the recommended approach to defining and validating enums. 
  - But if you need to validate against an enum from a third-party library (or you don't want to rewrite your existing enums) you can use z.nativeEnum().



*/

import { z } from 'zod'

// String enums
enum Fruits {
  Apple = 'apple',
  Banana = 'banana',
  // Cantaloupe, // ❌ you can mix numerical and string enums -> NOT WORK
}

const FruitEnum = z.nativeEnum(Fruits)
type FruitEnum = z.infer<typeof FruitEnum> // Fruits

FruitEnum.parse(Fruits.Apple) // passes
// FruitEnum.parse(Fruits.Cantaloupe) // passes
FruitEnum.parse('apple') // passes
FruitEnum.parse('banana') // passes
FruitEnum.parse(0) // passes
FruitEnum.parse('Cantaloupe') // fails
