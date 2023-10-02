import s from './ProfileInfo.module.scss'

import { EditIcon, LogoutIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const ProfileInfo = ({ email, name, onEditProfile }: Props): JSX.Element => {
  const onLogout = () => {}

  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography className={s.user} variant={TypographyVariant.H1} as="h3">
          {name}
        </Typography>
        <button className={s.editUserName} onClick={onEditProfile}>
          <EditIcon size={1.6} />
        </button>
      </div>
      <Typography className={s.email} variant={TypographyVariant.Body2}>
        {email}
      </Typography>
      <Button className={s.button} variant={ButtonVariant.Secondary} as="a" onClick={onLogout}>
        <LogoutIcon size={1.6} />
        Logout
      </Button>
    </div>
  )
}
