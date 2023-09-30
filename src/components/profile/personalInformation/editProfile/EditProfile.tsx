import s from './EditProfile.module.scss'
import { EditProfileValues, useEditProfile } from './useEditProfile'

import { Button, ControlledInput } from '@/components'

type Props = {
  onSubmit: (data: EditProfileValues) => void
  initialValues?: EditProfileValues
}

export const EditProfile = ({ onSubmit, initialValues }: Props): JSX.Element => {
  const { control, handleSubmit } = useEditProfile(initialValues)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput className={s.input} name="name" control={control} label="Nickmame" />
      <Button type="submit" variant="primary" fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
