import s from './SignIn.module.scss'

import { SignInForm } from '@/features'

export const SignIn = (): JSX.Element => {
  return (
    <div className={s.container}>
      <SignInForm onSubmit={() => console.log('Submit')} />
    </div>
  )
}
