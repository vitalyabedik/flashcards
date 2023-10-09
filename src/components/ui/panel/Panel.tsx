import cn from 'classnames'

import s from './Panel.module.scss'

import { DeleteIcon, SearchIcon } from '@/assets'
import { ButtonVariant } from '@/common'
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
  className?: string
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
  className,
}: PanelProps): JSX.Element => {
  const classNames = {
    root: cn(s.root, className),
    input: s.input,
    tabs: s.tabs,
    button: s.button,
  }

  return (
    <div className={classNames.root}>
      <Input
        className={classNames.input}
        value={inputValue}
        onChangeValue={onChangeInputValue}
        placeholder="Input search"
        leftIcon={<SearchIcon />}
      />
      <Tabs
        className={classNames.tabs}
        label={tabLabel}
        value={tabValue}
        onValueChange={onChangeTabValue}
      >
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
      <Button
        className={classNames.button}
        variant={ButtonVariant.Secondary}
        onClick={onClearFilter}
      >
        <>
          <DeleteIcon size={1.6} />
          Clear Filter
        </>
      </Button>
    </div>
  )
}
