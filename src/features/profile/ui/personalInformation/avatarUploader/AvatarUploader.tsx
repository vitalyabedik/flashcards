import cn from 'classnames'

import s from './AvatarUploader.module.scss'

import { EditIcon } from '@/assets'
import { Avatar, IconButton, Uploader } from '@/components'

type Props = {
  avatar?: string
  name: string
  editable?: boolean
  className?: string
  updateAvatar: (formData: FormData) => void
}

export const AvatarUploader = ({
  avatar,
  name,
  editable = true,
  className,
  updateAvatar,
}: Props): JSX.Element => {
  const avatarUploaderClasses = cn(s.root, className)

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)
    updateAvatar(formData)
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
