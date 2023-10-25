import s from './LinearProgressBar.module.scss'

export const LinearProgressBar = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.progressBar}></div>
    </div>
  )
}
