import s from './SignUpPage.module.scss'

import { SignUpForm } from '@/features'

export const SignUpPage = (): JSX.Element => {
  return (
    <div className={s.container}>
      <SignUpForm onSubmit={() => console.log('Submit')} />
    </div>
  )
}
