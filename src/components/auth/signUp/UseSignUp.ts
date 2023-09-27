import { useForm } from 'react-hook-form'

export type FormValues = {
  email: string
  password: string
  confirmPassword: string
}

export const UseSignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  return { register, handleSubmit }
}
