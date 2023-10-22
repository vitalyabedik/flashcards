import { useState } from 'react'

import s from './PersonalInformation.module.scss'

import { TypographyVariant } from '@/common'
import { Card, Typography } from '@/components'
import { EditProfileValues, AvatarUploader, EditProfile, ProfileInfo } from '@/features'

export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  data: ProfileDataType
  update: (data: EditProfileValues) => void
}

export const PersonalInformation = ({ data, update }: Props): JSX.Element => {
  const { email, name, avatar } = data
  const [editMode, setEditMode] = useState(false)

  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    update(data)
    setEditMode(false)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={TypographyVariant.Large} as="h1">
        Personal Information
      </Typography>
      <AvatarUploader
        className={s.avatarUploader}
        avatar={avatar}
        name={name}
        editable={!editMode}
      />
      {editMode ? (
        <EditProfile onSubmit={onSubmit} initialValues={{ name }} />
      ) : (
        <ProfileInfo email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
