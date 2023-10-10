export const formatDate = (dateString: string): string => {
  const inputDate = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }

  const formatter = new Intl.DateTimeFormat('ru', options)
  const formattedDate = formatter.format(inputDate)

  return formattedDate
}
