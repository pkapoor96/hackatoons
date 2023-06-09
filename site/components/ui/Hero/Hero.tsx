import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
  isMid?: boolean
}

const Hero: FC<HeroProps> = ({ headline, description, isMid }) => {
  return (
    <div
      className={`bg-accent-9 border-b border-t border-accent-2 ${
        isMid ? s['pic-container-mid'] : s['pic-container']
      }`}
    >
      <Container>
        <div className={`${s.root} ${isMid && s['root-mid']}`}>
          <h2 className={s.title}>{headline}</h2>
          <div className={s.description}>
            <p>{description}</p>
            <Link
              href="/"
              className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content"
            >
              Read it here
              <ArrowRight width="20" heigh="20" className="ml-1" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
