import { toast } from 'react-toastify'

export const mutationNotificationHandler = async (
  request: Promise<any>,
  successMessage?: string
) => {
  try {
    const result = await request
    const error = result.error?.data

    if ('data' in result && successMessage) {
      toast.success(successMessage)
    } else if ('error' in result) {
      let errorMessage =
        error?.errorMessages?.[0]?.message || error?.message || 'Some error occurred'

      toast.error(errorMessage)
    }
  } catch (error) {
    toast.error('Some error occurred')
  }
}
