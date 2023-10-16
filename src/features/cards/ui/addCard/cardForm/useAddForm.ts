import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addCardSchema = z.object({
  questionFormat: z.string().trim(),
  answerFormat: z.string().trim(),
  question: z.string().min(3, 'Use 3 characters or more for your question').trim(),
  answer: z.string().min(3, 'Use 3 characters or more for your answer').trim(),
})

export type CardFormValues = z.infer<typeof addCardSchema>

export const useCardForm = () =>
  useForm<CardFormValues>({
    resolver: zodResolver(addCardSchema),
    defaultValues: {
      questionFormat: 'text',
      answerFormat: 'text',
      question: '',
      answer: '',
    },
  })
