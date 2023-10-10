export type LoginResponseType = {
  accessToken: string
}

export type LoginParamsType = {
  password: string
  email: string
  rememberMe?: boolean
}
