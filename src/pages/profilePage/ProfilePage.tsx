import s from './ProfilePage.module.scss'

import { PersonalInformation } from '@/features'

export const ProfilePage = (): JSX.Element => {
  return (
    <div className={s.container}>
      <PersonalInformation email="example@example.com" name="John Doe" />
    </div>
  )
}
