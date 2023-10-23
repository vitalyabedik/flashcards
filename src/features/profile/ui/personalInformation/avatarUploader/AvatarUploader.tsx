import cn from 'classnames'

import s from './AvatarUploader.module.scss'

import { EditIcon } from '@/assets'
import { mutationNotificationHandler } from '@/common'
import { Avatar, IconButton, Uploader } from '@/components'
import { useUpdateProfileMutation } from '@/features'

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
  const [updateProfile] = useUpdateProfileMutation()

  const avatarUploaderClasses = cn(s.root, className)

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)

    mutationNotificationHandler(updateProfile(formData), false, `Photo is successfully updated.`)
  }

  return (
    <div className={avatarUploaderClasses}>
      <Avatar image={avatar} userName={name} size="large" />
      {editable && (
        <Uploader className={s.uploader} onLoadCover={onLoadCover} onLoadError={() => {}}>
          <IconButton className={s.editAvatar} icon={<EditIcon />} />
        </Uploader>
      )}
    </div>
  )
}
