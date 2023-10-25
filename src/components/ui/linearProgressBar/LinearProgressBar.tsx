import cn from 'classnames'

import s from './LinearProgressBar.module.scss'
type Props = {
  className?: string
}
export const LinearProgressBar = ({ className }: Props): JSX.Element => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.progressBar}></div>
    </div>
  )
}
