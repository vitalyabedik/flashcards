import { Page } from '@/components'
import { SignInForm } from '@/features'

export const SignInPage = (): JSX.Element => {
  return (
    <Page>
      <SignInForm onSubmit={() => console.log('Submit')} />
    </Page>
  )
}
