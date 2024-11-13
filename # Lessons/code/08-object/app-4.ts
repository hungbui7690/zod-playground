/*
  Omit


*/

import { z } from 'zod'

// @ Typescript
interface UserSettings {
  darkMode: boolean
  notifications: boolean
  showEmail: string
  language: string
}

type PublicUserSettings = Omit<UserSettings, 'showEmail'> // exclude showEmail

const userSettings: PublicUserSettings = {
  darkMode: true,
  notifications: true,
  language: 'en',
}

// @ Zod
const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
})

// To remove certain keys, use .omit
const NoIDRecipe = Recipe.omit({ id: true })
type NoIDRecipe = z.infer<typeof NoIDRecipe> // => { name: string, ingredients: string[] }
