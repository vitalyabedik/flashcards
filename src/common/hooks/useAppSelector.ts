import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/services'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
