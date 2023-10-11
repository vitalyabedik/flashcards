import cn from 'classnames'

import s from './AvatarUploader.module.scss'

import { EditIcon } from '@/assets'
import { Avatar, IconButton } from '@/components'

type Props = {
  avatar?: string
  name: string
  editable?: boolean
  className?: string
}

export const AvatarUploader = ({
  avatar,
  name,
  editable = true,
  className,
}: Props): JSX.Element => {
  const avatarUploaderClasses = cn(s.root, className)

  return (
    <div className={avatarUploaderClasses}>
      <Avatar image={avatar} userName={name} size="large" />
      {editable && <IconButton className={s.editAvatar} icon={<EditIcon />} />}
    </div>
  )
}
