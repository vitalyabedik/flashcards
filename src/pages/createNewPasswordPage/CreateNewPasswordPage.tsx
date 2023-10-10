import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { CreateNewPasswordForm } from '@/features'

export const CreateNewPasswordPage = (): JSX.Element => {
  const params = useParams()

  console.log(params)

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={() => console.log('Submit')} />
    </Page>
  )
}
