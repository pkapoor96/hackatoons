import Bookmark from '@components/icons/Bookmark'
import Image from 'next/image'
import { FC } from 'react'

interface OfferCardTypes {
  imagePath: string
  title: string
  companyName: string
}

const OfferCard: FC<OfferCardTypes> = ({ imagePath, title, companyName }) => {
  return (
    <div className="border border-solid border-[#BBBBBB] rounded-[12px] p-[24px] relative">
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

      <p className="mt-[12px]">{companyName}</p>
      <Bookmark fill="white" className="absolute top-[30px] right-[24px]" />
    </div>
  )
}

export default OfferCard
