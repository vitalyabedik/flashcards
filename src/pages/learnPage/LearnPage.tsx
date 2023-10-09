import { Page } from '@/components'
import { LearnCard } from '@/features'

// test
const testData = {
  deck: {
    id: '1',
    name: 'JavaScript',
  },
  card: {
    id: '1',
    question: 'How "This" works in JavaScript?',
    questionImg: 'https://placehold.co/350x120',
    answerImg: 'https://placehold.co/350x120',
    answer: 'This is how "This" works in JavaScript',
    shots: 10,
  },
}

export const LearnPage = (): JSX.Element => {
  return (
    <Page>
      <LearnCard deck={testData.deck} card={testData.card} />
    </Page>
  )
}
