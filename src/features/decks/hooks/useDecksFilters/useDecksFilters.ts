import { useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  decksActions,
  selectAuthorId,
  selectSearchName,
  selectSliderValues,
  selectSortOptions,
  selectTabValue,
  useMeQuery,
} from '@/features'

export const useDecksFilters = () => {
  const searchName = useAppSelector(selectSearchName)
  const tabValue = useAppSelector(selectTabValue)
  const sliderValues = useAppSelector(selectSliderValues)
  const authorId = useAppSelector(selectAuthorId)
  const sortOptions = useAppSelector(selectSortOptions)

  const dispatch = useAppDispatch()

  const { data: user } = useMeQuery()

  const onSearchCallback = (name: string) => {
    dispatch(decksActions.setSearchByName({ searchName: name }))
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    dispatch(decksActions.setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(decksActions.setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(decksActions.setAuthorId({ authorId: undefined }))
    }
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(decksActions.setSliderValues({ sliderValues }))
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    dispatch(decksActions.setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilterCallback = () => {
    dispatch(decksActions.setSearchByName({ searchName: '' }))
    dispatch(decksActions.setTabValue({ tabValue: 'all' }))
    dispatch(decksActions.setSliderValues({ sliderValues: [0, 10] }))
    dispatch(decksActions.setAuthorId({ authorId: undefined }))
    dispatch(
      decksActions.setSortOptions({
        sortOptions: {
          key: 'updated',
          direction: 'asc',
        },
      })
    )
  }

  return {
    searchName,
    tabValue,
    sliderValues,
    authorId,
    sortOptions,
    onSearchCallback,
    onChangeTabValueCallback,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onClearFilterCallback,
  }
}
