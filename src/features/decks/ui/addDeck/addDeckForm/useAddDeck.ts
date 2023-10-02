import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addDeckSchema = z.object({
  newPackName: z.string(),
  packPrivateState: z.boolean().default(false),
})

export type AddDeckFormValues = z.infer<typeof addDeckSchema>
export const useAddDeck = () => {
  return useForm<AddDeckFormValues>({
    resolver: zodResolver(addDeckSchema),
    defaultValues: { newPackName: '', packPrivateState: false },
  })
}
