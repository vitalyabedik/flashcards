import { Page } from '@/components'
import { ForgotPasswordForm } from '@/features'

export const ForgotPasswordPage = (): JSX.Element => {
  return (
    <Page>
      <ForgotPasswordForm onSubmit={() => console.log('Submit')} />
    </Page>
  )
}
