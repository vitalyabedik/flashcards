import * as RaddixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './Tabs.module.scss'

type Tab = {
  value: string
  title: string
  disabled: boolean
}

type TabsProps = {
  value: string
  onChangeActiveTab: (value: string) => void
  tabs: Tab[]
  className?: string
}

export const Tabs = ({ value, onChangeActiveTab, tabs }: TabsProps): JSX.Element => {
  const onClickHandler = (value: string) => {
    onChangeActiveTab(value)
  }

  return (
    <RaddixTabs.Root
      className={s.root}
      value={value}
      onValueChange={onClickHandler}
      defaultValue={tabs[0].value}
    >
      <RaddixTabs.List className={s.list} loop={true}>
        {tabs.map(tab => (
          <RaddixTabs.Trigger
            className={cn(s.trigger, tab.value === value && s.active)}
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.title}
          </RaddixTabs.Trigger>
        ))}
      </RaddixTabs.List>
    </RaddixTabs.Root>
  )
}
