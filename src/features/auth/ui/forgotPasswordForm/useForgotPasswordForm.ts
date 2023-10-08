import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Incorrect email' }),
})

export type ForgotPasswordFormValue = z.infer<typeof forgotPasswordSchema>

export const useForgotPasswordForm = () =>
  useForm<ForgotPasswordFormValue>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })
