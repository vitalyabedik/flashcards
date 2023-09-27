import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(5, 'Use 5 characters or more for your password'),
  rememberMe: z.boolean().default(false),
})

export type SignInFormValues = z.infer<typeof signInSchema>

export const UseSignIn = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  return { control, handleSubmit }
}
