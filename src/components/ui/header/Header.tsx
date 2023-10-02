import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Header.module.scss'
import { HeaderProfileInfo } from './headerProfileInfo'

import { Logo, LogoutIcon, PersonIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownItemWithIcon,
  Typography,
} from '@/components'

type Props = {
  isLoggedIn: boolean
  name?: string
  avatar?: string
  email?: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, Props>(
  (
    { name = 'name', avatar = 'avatar', email = 'email', isLoggedIn, className },
    ref
  ): JSX.Element => {
    const classNames = {
      root: cn(s.root, className),
      headerContainer: s.headerContainer,
      logo: s.logo,
      userName: s.userName,
      profileInfoWrapper: s.profileInfoWrapper,
      dropdownItemWrapper: s.dropdownItemWrapper,
    }

    return (
      <header ref={ref} className={classNames.root}>
        <div className={classNames.headerContainer}>
          <Logo className={classNames.logo} />
          {isLoggedIn ? (
            <div className={classNames.profileInfoWrapper}>
              <Typography className={classNames.userName} variant={TypographyVariant.Subtitle1}>
                {name}
              </Typography>
              <Dropdown trigger={<Avatar image={avatar} userName={name} size="small" />}>
                <DropdownItem className={classNames.dropdownItemWrapper}>
                  <HeaderProfileInfo name={name} avatar={avatar} email={email} />
                </DropdownItem>
                <DropdownItemWithIcon icon={<PersonIcon size={1.6} />} text="My Profile" />
                <DropdownItemWithIcon icon={<LogoutIcon size={1.6} />} text="Sign Out" />
              </Dropdown>
            </div>
          ) : (
            <Button as="a">Sign In</Button>
          )}
        </div>
      </header>
    )
  }
)
