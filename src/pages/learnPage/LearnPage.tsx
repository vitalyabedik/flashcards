import { Route } from '@/common'
import { GoBack, Page } from '@/components'
import { LearnCard } from '@/features'

export const LearnPage = (): JSX.Element => {
  return (
    <Page>
      <GoBack title="Back to Decks List" to={Route.Decks} />
      <LearnCard />
    </Page>
  )
}
