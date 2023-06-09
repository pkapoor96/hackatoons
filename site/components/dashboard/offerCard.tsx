import Bookmark from '@components/icons/Bookmark'
import { Button } from '@components/ui'
import Image from 'next/image'
import { FC, useState } from 'react'
import s from './OfferCard.module.css'
import cn from 'clsx'
import Arrow from '@components/icons/Arrow'
import ConfimationPopup from './ConfirmationPopup'

interface OfferCardTypes {
  className?: string
  imagePath: string
  title: string
  companyName: string
  deductionAmount: number
  setScoreUpdated: any
}

const OfferCard: FC<OfferCardTypes> = ({
  imagePath,
  title,
  companyName,
  className,
  setScoreUpdated,
  deductionAmount,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const rootClassName = cn(s.root, className)

  const openPopup = () => {
    setIsModalOpen(true)
  }

  const closePopup = () => {
    setIsModalOpen(false)
    setScoreUpdated(true)
  }

  return (
    <div>
      <div
        className={`border border-solid border-[#BBBBBB] rounded-[12px] p-[24px] relative ${rootClassName}`}
      >
        <Image
          src={imagePath}
          alt={'offer image'}
          width={48}
          height={48}
          quality="85"
        />

        <h2 className="mt-[20px] font-semibold text-[18px] leading-[24px]">
          {title}
        </h2>

        <p className="mt-[4px] text-[14px]">{companyName}</p>
        <Bookmark fill="white" className="absolute top-[30px] right-[24px]" />
        <p className={`${s.deductionAmount} text-[20px] mt-[12px] font-bold`}>
          {deductionAmount} points
        </p>
        <Button
          width="153px"
          onClick={() => openPopup()}
          variant="naked"
          className={`${s.buyButton} text-[16px] absolute bottom-[20px] right-[24px]`}
        >
          Purchase
          <Arrow />
        </Button>

        <ConfimationPopup
          closePopup={closePopup}
          isModalOpen={isModalOpen}
          deductionAmount={deductionAmount}
        />
      </div>
    </div>
  )
}

export default OfferCard
