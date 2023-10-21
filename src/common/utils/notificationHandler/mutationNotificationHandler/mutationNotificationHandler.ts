import { toast } from 'react-toastify'

export type FieldErrorMessage = {
  field: string
  message: string
}

export type ErrorData = {
  errorMessages: FieldErrorMessage[]
  message: string
}

type CommonErrorType = {
  error: string
}

export type ResponseErrorType = {
  status: number
  data: ErrorData | undefined
}

export const mutationNotificationHandler = async (
  request: Promise<any>,
  isForm: boolean = false,
  successMessage?: string
) => {
  try {
    const result = await request
    const error = result.error as ResponseErrorType

    debugger

    if ('data' in result || successMessage) {
      toast.success(successMessage)

      debugger

      return { status: 'success', data: result.data, error: null }
    } else if ('data' in error && 'error' in result && 'message' in result.error.data && !isForm) {
      debugger
      const errorMessage =
        error.data?.errorMessages?.[0]?.message || error.data?.message || 'Some error occurred'

      toast.error(errorMessage)

      return { status: 'error', data: null, error: result.error }
    } else if ('data' in error) {
      debugger

      toast.error(error?.data?.message)

      return { status: 'error', data: null, error: error.data?.errorMessages[0].message }
    } else if ('error' in result) {
      debugger

      const error = result.error as CommonErrorType

      toast.error(error.error)

      return { status: 'error', data: null, error: result.error }
    }
  } catch (error) {
    debugger
    toast.error('Some error occurred')
  }
}
