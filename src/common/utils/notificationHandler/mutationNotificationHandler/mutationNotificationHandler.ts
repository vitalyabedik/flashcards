import { toast } from 'react-toastify'

export const mutationNotificationHandler = async (
  request: Promise<any>,
  successMessage: string
) => {
  const result = await request

  if ('data' in result) {
    toast.success(successMessage)
  }

  if ('error' in result) {
    const errorMessage = result.error.data.errorMessages[0].message

    toast.error(errorMessage)
  }
}
