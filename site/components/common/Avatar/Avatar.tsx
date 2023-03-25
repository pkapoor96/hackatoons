import { FC, useRef, useEffect } from 'react'
import Image from 'next/image'
import cn from 'clsx'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import s from './Avatar.module.css'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({ className }) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()
  const rootClassName = cn(s.root, className)

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
    >
      <Image
        src={'/assets/avatar.png'}
        alt={'Avatar Image'}
        width={600}
        height={600}
        quality="85"
        className={s.avatar}
      />
    </div>
  )
}

export default Avatar
