import { Page } from '@/components'
import { PersonalInformation } from '@/features'

export const ProfilePage = (): JSX.Element => {
  return (
    <Page>
      <PersonalInformation email="example@example.com" name="John Doe" />
    </Page>
  )
}
