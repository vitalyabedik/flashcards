import { useForm } from 'react-hook-form'

export type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const UseSignIn = () => {
  const { register, control, handleSubmit } = useForm<FormValues>()

  return { register, control, handleSubmit }
}
