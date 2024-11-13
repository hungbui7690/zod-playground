/*
  .pick/.omit



*/

import { z } from 'zod'

const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
})

// @ .pick -> create a new type based on existing type + pick keys
const JustTheName = Recipe.pick({ name: true }) // => { name: string }

// @ .omit -> remove certain keys from type
const NoIDRecipe = Recipe.omit({ id: true }) // => { name: string, ingredients: string[] }
