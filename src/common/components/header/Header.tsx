import { ComponentPropsWithoutRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Header.module.scss'

import { Logo, LogoutIcon, Person } from '@/assets'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownItemWithIcon,
  Typography,
} from '@common/components'
import { TypographyVariant } from '@common/enums'

export type ProfileInfoType = {
  name: string
  avatar: string
  email: string
}

type Props = {
  data: ProfileInfoType | null
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<HTMLDivElement, Props>(
  ({ data, className, ...rest }, ref): JSX.Element => {
    const classNames = {
      root: cn(s.root, className),
      headerContainer: s.headerContainer,
      logo: s.logo,
      userName: s.userName,
      dropdownItemsWrapper: s.profileBlockWrapper,
      profileBlockWrapper: s.profileBlockWrapper,
      profileBlockInfoWrapper: s.profileBlockInfoWrapper,
      profileBlockInfoTextWrapper: s.profileBlockInfoTextWrapper,
      profileBlockInfoText: s.profileBlockInfoText,
    }

    return (
      <header ref={ref} className={classNames.root}>
        <div className={classNames.headerContainer} {...rest}>
          <Logo className={classNames.logo} />
          {data ? (
            <div className={classNames.profileBlockWrapper}>
              <Typography className={classNames.userName} variant={TypographyVariant.Subtitle1}>
                {data.name}
              </Typography>
              <Dropdown trigger={<Avatar image={data.avatar} userName={data.name} size="small" />}>
                <div className={s.dropdownItemsWrapper}>
                  <DropdownItem>
                    <div className={classNames.profileBlockInfoWrapper}>
                      <Avatar image={data.avatar} userName={data.name} size="small" />
                      <div className={classNames.profileBlockInfoTextWrapper}>
                        <Typography variant={TypographyVariant.Subtitle1}>{data.name}</Typography>{' '}
                        <Typography
                          className={classNames.profileBlockInfoText}
                          variant={TypographyVariant.Caption}
                        >
                          {data.email}
                        </Typography>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItemWithIcon icon={<Person size={1.6} />} text="My Profile" />
                  <DropdownItemWithIcon icon={<LogoutIcon size={1.6} />} text="Sign Out" />
                </div>
              </Dropdown>
            </div>
          ) : (
            <Button variant="primary" as="a">
              Sign In
            </Button>
          )}
        </div>
      </header>
    )
  }
)
