import { Link } from 'react-router-dom'

import s from './NotFoundPage.module.scss'

import { NotFound } from '@/assets'
import { Route, TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

export const NotFoundPage = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <NotFound />
      </div>
      <Typography className={s.text}>Sorry! Page not found!</Typography>
      <Button as={Link} to={Route.Main}>
        <Typography variant={TypographyVariant.Subtitle2} as="span">
          Back to home page
        </Typography>
      </Button>
    </div>
  )
}
