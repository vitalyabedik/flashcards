import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/app'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
