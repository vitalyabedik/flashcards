export const getFileFromFormData = (item: FormDataEntryValue | null) => {
  if (item !== null && item instanceof File) {
    return item
  }

  return null
}
