import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addDeckSchema = z.object({
  name: z.string().nonempty('Field is required!'),
  isPrivate: z.boolean().default(false),
})

export type DeckFormValues = z.infer<typeof addDeckSchema>
export const useDeckForm = (defaultValues: DeckFormValues) => {
  return useForm<DeckFormValues>({
    resolver: zodResolver(addDeckSchema),
    defaultValues,
  })
}
