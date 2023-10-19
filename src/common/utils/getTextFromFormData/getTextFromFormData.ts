export const getTextFromFormData = (item: FormDataEntryValue | null) => {
  if (typeof item === 'string') {
    return item
  }

  return ''
}
