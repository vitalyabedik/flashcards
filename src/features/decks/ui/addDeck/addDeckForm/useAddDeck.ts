import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addDeckSchema = z.object({
  cover: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
  name: z.string(),
  isPrivate: z.boolean().default(false),
})

export type AddDeckFormValues = z.infer<typeof addDeckSchema>
export const useAddDeck = (defaultValues: AddDeckFormValues) => {
  return useForm<AddDeckFormValues>({
    resolver: zodResolver(addDeckSchema),
    defaultValues /*: { name: '', isPrivate: false },*/,
  })
}
