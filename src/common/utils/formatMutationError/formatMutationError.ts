import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { ErrorData } from '@/common'

export const formatMutationError = (error: FetchBaseQueryError | SerializedError | undefined) => {
  let errorMessage: string | null = null

  if (error && 'data' in error) {
    const data = error.data as ErrorData

    errorMessage = data?.errorMessages?.[0]?.message || null
  }

  return errorMessage
}
