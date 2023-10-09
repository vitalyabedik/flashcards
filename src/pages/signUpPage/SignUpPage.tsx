import { Page } from '@/components'
import { SignUpForm } from '@/features'

export const SignUpPage = (): JSX.Element => {
  return (
    <Page>
      <SignUpForm onSubmit={() => console.log('Submit')} />
    </Page>
  )
}
