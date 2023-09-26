import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Incorrect email' }),
})

type FormValue = z.infer<typeof forgotPasswordSchema>

export const UseForgotPassword = () => {
  const { control, handleSubmit } = useForm<FormValue>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  return { control, handleSubmit }
}
