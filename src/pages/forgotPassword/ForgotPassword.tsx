import { JSX } from 'react'

import s from './ForgotPassword.module.scss'

import { ForgotPasswordForm } from '@/features'
export const ForgotPassword = (): JSX.Element => {
  return (
    <div className={s.container}>
      <ForgotPasswordForm onSubmit={() => console.log('Submit')} />
    </div>
  )
}
