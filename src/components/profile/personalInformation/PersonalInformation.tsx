import { useState } from 'react'

import { EditProfileValues } from './editProfile/useEditProfile.ts'
import s from './PersonalInformation.module.scss'

import { TypographyVariant } from '@/common'
import { Card, Typography, AvatarUploader, EditProfile, ProfileInfo } from '@/components'

type Props = {
  avatar?: string
  email: string
  name: string
}

export const PersonalInformation = ({ avatar, email, name }: Props): JSX.Element => {
  const [editMode, setEditMode] = useState(false)

  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    console.log(data)
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
