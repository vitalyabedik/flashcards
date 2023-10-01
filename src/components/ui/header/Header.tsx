import { ComponentPropsWithoutRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Header.module.scss'

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

export const Header = forwardRef<HTMLDivElement, Props>(
  (
    { name = 'name', avatar = 'avatar', email = 'email', isLoggedIn, className },
    ref
  ): JSX.Element => {
    const classNames = {
      root: cn(s.root, className),
      headerContainer: s.headerContainer,
      logo: s.logo,
      userName: s.userName,
      blockWrapper: s.blockWrapper,
      dropdownItemsWrapper: s.profileBlockWrapper,
      profileBlockInfoWrapper: s.profileBlockInfoWrapper,
      profileBlockInfoTextWrapper: s.profileBlockInfoTextWrapper,
      profileBlockInfoText: s.profileBlockInfoText,
    }

    return (
      <header ref={ref} className={classNames.root}>
        <div className={classNames.headerContainer}>
          <Logo className={classNames.logo} />
          {isLoggedIn ? (
            <div className={classNames.blockWrapper}>
              <Typography className={classNames.userName} variant={TypographyVariant.Subtitle1}>
                {name}
              </Typography>
              <Dropdown trigger={<Avatar image={avatar} userName={name} size="small" />}>
                <div className={s.dropdownItemsWrapper}>
                  <DropdownItem>
                    <div className={classNames.profileBlockInfoWrapper}>
                      <Avatar image={avatar} userName={name} size="small" />
                      <div className={classNames.profileBlockInfoTextWrapper}>
                        <Typography variant={TypographyVariant.Subtitle1}>{name}</Typography>
                        <Typography
                          className={classNames.profileBlockInfoText}
                          variant={TypographyVariant.Caption}
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItemWithIcon icon={<PersonIcon size={1.6} />} text="My Profile" />
                  <DropdownItemWithIcon icon={<LogoutIcon size={1.6} />} text="Sign Out" />
                </div>
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
