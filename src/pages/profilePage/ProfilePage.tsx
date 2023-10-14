import { Route } from '@/common'
import { GoBack, Page } from '@/components'
import {
  PersonalInformation,
  ProfileDataType,
  useMeQuery,
  useUpdateProfileMutation,
} from '@/features'
import { EditProfileValues } from '@features/profile/ui/personalInformation/editProfile/useEditProfile.ts'

export const ProfilePage = (): JSX.Element => {
  const { data } = useMeQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const onUpdate = (data: EditProfileValues) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileValues])
    })

    updateProfile(form)
  }

  return (
    <Page>
      <GoBack title="Back to Decks List" to={Route.Decks} />
      <PersonalInformation data={data as ProfileDataType} update={onUpdate} />
    </Page>
  )
}
