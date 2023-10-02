import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addDeckSchema = z.object({
  packImage: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
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
