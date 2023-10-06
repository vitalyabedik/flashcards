import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editCardSchema = z.object({
  questionFormat: z.string().trim(),
  question: z.string().min(3, 'Use 3 characters or more for your password').trim(),
  answer: z.string().min(3, 'Use 3 characters or more for your password').trim(),
})

export type EditCardFormValues = z.infer<typeof editCardSchema>

export const useEditCard = () =>
  useForm<EditCardFormValues>({
    resolver: zodResolver(editCardSchema),
    defaultValues: {
      questionFormat: 'text',
      question: '',
      answer: '',
    },
  })
