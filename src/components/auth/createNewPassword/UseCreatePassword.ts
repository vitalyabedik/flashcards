import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createPasswordSchema = z.object({
  password: z.string().min(3, 'Use 3 characters or more for your password'),
})

type FormValue = z.infer<typeof createPasswordSchema>

export const UseCreatePassword = () => {
  const { control, handleSubmit } = useForm<FormValue>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: { password: '' },
  })

  return { control, handleSubmit }
}
