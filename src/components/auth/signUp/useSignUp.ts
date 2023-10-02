import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(3, 'Use 3 characters or more for your password'),
    confirmPassword: z.string().min(3, 'Use 3 characters or more for your password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Those passwords didn’t match. Try again.',
    path: ['confirmPassword'],
  })

export type SignUpFormValues = z.infer<typeof signUpSchema>

export const useSignUp = () =>
  useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
