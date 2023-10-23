import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { ErrorData, FieldErrorMessage } from '@/common'

export const formatMutationError = (error: FetchBaseQueryError | SerializedError | undefined) => {
  let errorMessage: FieldErrorMessage[] | null = null

  if (error && 'data' in error) {
    const data = error.data as ErrorData

    errorMessage = data?.errorMessages || null
  }

  return errorMessage
}
