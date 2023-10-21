import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify'

export const queryNotificationHandler = (
  response: FetchBaseQueryError | SerializedError | undefined
) => {
  if (response && 'status' in response) {
    if (typeof response.data === 'object' && response.data && 'message' in response.data) {
      const errorMessage = response.data.message as string

      toast.error(errorMessage)
    } else if ('error' in response) {
      toast.error(response.error)
    }
  } else {
    toast.error('Some error occurred')
  }
}
