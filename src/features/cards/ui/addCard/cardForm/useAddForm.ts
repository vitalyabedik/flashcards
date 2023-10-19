import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addCardSchema = z.object({
  questionFormat: z.string().trim(),
  answerFormat: z.string().trim(),
  question: z.string().min(3, 'Use 3 characters or more for your question').trim(),
  answer: z.string().min(2, 'Use 3 characters or more for your answer').trim(),
})

export type CardFormValuesType = z.infer<typeof addCardSchema>
type DefaultCardValueType = Omit<CardFormValuesType, 'answerFormat' | 'questionFormat'>
export const useCardForm = (defaultValues: DefaultCardValueType) =>
  useForm<CardFormValuesType>({
    resolver: zodResolver(addCardSchema),
    defaultValues: {
      questionFormat: 'text',
      answerFormat: 'text',
      question: defaultValues.question,
      answer: defaultValues.answer,
    },
  })
