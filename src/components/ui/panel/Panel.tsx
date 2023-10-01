import s from './Panel.module.scss'

import { DeleteIcon } from '@/assets'
import { Button, Input, Slider, Tabs } from '@/components'
import { TabItem } from '@components/ui/tabs/tabItem'

export type PanelProps = {
  inputValue: string
  onChangeInputValue: (value: string) => void
  tabValue: string
  tabLabel: string
  onChangeTabValue: (value: string) => void
  sliderValue: number[]
  minSliderValue: number
  maxSliderValue: number
  sliderLabel: string
  onChangeSliderValue: (value: number[]) => void
  onClearFilter: () => void
}

export const Panel = ({
  inputValue,
  tabValue,
  tabLabel,
  sliderValue,
  sliderLabel,
  minSliderValue,
  maxSliderValue,
  onChangeInputValue,
  onChangeTabValue,
  onChangeSliderValue,
  onClearFilter,
}: PanelProps): JSX.Element => {
  return (
    <div className={s.root}>
      <Input className={s.input} value={inputValue} onChangeValue={onChangeInputValue} />
      <Tabs className={s.tabs} label={tabLabel} value={tabValue} onValueChange={onChangeTabValue}>
        <TabItem value="myCards">My Cards</TabItem>
        <TabItem value="allCards">All Cards</TabItem>
      </Tabs>
      <Slider
        value={sliderValue}
        onValueChange={onChangeSliderValue}
        min={minSliderValue}
        max={maxSliderValue}
        label={sliderLabel}
      />
      <Button className={s.button} variant="secondary" onClick={onClearFilter}>
        <>
          <DeleteIcon size={1.6} />
          Clear Filter
        </>
      </Button>
    </div>
  )
}
