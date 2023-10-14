import s from './ProfileInfo.module.scss'

import { EditIcon, LogoutIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, IconButton, Typography } from '@/components'
import { useLogoutMutation } from '@/features'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const ProfileInfo = ({ email, name, onEditProfile }: Props): JSX.Element => {
  const [logout] = useLogoutMutation()

  const onLogout = () => {
    logout()
  }

  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography className={s.user} variant={TypographyVariant.H1} as="h3">
          {name}
        </Typography>
        <IconButton icon={<EditIcon />} size={1.6} onClick={onEditProfile} />
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
