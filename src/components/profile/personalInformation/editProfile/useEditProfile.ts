import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editProfileSchema = z.object({
  name: z.string().min(3).trim(),
})

export type EditProfileValues = z.infer<typeof editProfileSchema>

export const useEditProfile = (initialValues: EditProfileValues = { name: '' }) =>
  useForm<EditProfileValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: initialValues,
  })
