import { Page } from '@/components'
import { CreateNewPasswordForm } from '@/features'

export const CreateNewPasswordPage = (): JSX.Element => {
  return (
    <Page>
      <CreateNewPasswordForm onSubmit={() => console.log('Submit')} />
    </Page>
  )
}
