export type BaseResponseType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type SignUpParamsType = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}

export type LoginResponseType = {
  accessToken: string
}

export type SignUpDataType = Pick<SignUpParamsType, 'email' | 'password'>

export type LoginParamsType = SignUpDataType & {
  rememberMe?: boolean
}

export type RecoverPasswordParamsType = Pick<SignUpParamsType, 'email'>

export type ResetPasswordParamsType = Pick<SignUpParamsType, 'password'> & { token: string }
