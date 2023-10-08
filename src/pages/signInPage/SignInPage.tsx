import s from './SignInPage.module.scss'

import { SignInForm } from '@/features'

export const SignInPage = (): JSX.Element => {
  return (
    <div className={s.container}>
      <SignInForm onSubmit={() => console.log('Submit')} />
    </div>
  )
}
