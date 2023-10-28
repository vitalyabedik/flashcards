import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'
import { Link, useNavigate } from 'react-router-dom'

import s from './Header.module.scss'
import { HeaderProfileInfo } from './headerProfileInfo'

import { Logo, LogoutIcon, PersonIcon } from '@/assets'
import { ButtonVariant, Route, TypographyVariant } from '@/common'
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
  logout: () => void
  isDisabled: boolean
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, Props>(
  (
    {
      name = 'name',
      avatar = 'avatar',
      email = 'email',
      isLoggedIn,
      className,
      logout,
      isDisabled,
    },
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

    const navigate = useNavigate()

    const toProfile = () => {
      navigate(Route.Profile)
    }

    return (
      <header ref={ref} className={classNames.root}>
        <div className={classNames.headerContainer}>
          <Button variant={ButtonVariant.Link} as={Link} to={Route.Main}>
            <Logo className={classNames.logo} />
          </Button>
          {isLoggedIn && (
            <div className={classNames.profileInfoWrapper}>
              <Typography className={classNames.userName} variant={TypographyVariant.Subtitle1}>
                {name}
              </Typography>
              <Dropdown trigger={<Avatar image={avatar} userName={name} size="small" />}>
                <DropdownItem className={classNames.dropdownItemWrapper} onSelect={toProfile}>
                  <HeaderProfileInfo name={name} avatar={avatar} email={email} />
                </DropdownItem>
                <DropdownItemWithIcon
                  icon={<PersonIcon size={1.6} />}
                  text="My Profile"
                  onSelect={toProfile}
                />
                <DropdownItemWithIcon
                  icon={<LogoutIcon size={1.6} />}
                  text="Logout"
                  onSelect={logout}
                  disabled={isDisabled}
                />
              </Dropdown>
            </div>
          )}
          {!isLoggedIn && (
            <Button as={Link} to={Route.SignIn}>
              Sign In
            </Button>
          )}
        </div>
      </header>
    )
  }
)
