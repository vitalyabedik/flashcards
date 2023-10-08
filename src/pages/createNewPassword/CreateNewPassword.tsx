import { JSX } from 'react'

import s from './CreateNewPassword.module.scss'

import { CreateNewPasswordForm } from '@/features'

export const CreateNewPassword = (): JSX.Element => {
  return (
    <div className={s.container}>
      <CreateNewPasswordForm onSubmit={() => console.log('Submit')} />
    </div>
  )
}
