import { Avatar } from '@components/common'
import { categories } from '@components/dashboard/mocks/category'
import { offers } from '@components/dashboard/mocks/offers'
import OfferCard from '@components/dashboard/offerCard'
import Bell from '@components/icons/Bell'
import Bookmark from '@components/icons/Bookmark'
import Portal from '@components/toggle/portal'
import ToggleWidget from '@components/toggle/toggleWidget'
import { useEffect, useState } from 'react'
import { Hackatoons } from '@components/icons'

export default function Dashboard() {
  const [category, setCategory] = useState('all')
  const [creditScore, setCreditScore] = useState(0)

  useEffect(() => {
    fetch('http://3.128.153.4:3001/creditScore?userId=nangarg', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCreditScore(data.creditScore)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div className="xl:container mx-auto">
        <nav className="flex justify-between items-center py-[20px]">
          <div className="font-semibold text-[20px] leading-[30px]">
            <Hackatoons
              className="inline-block h-6 ml-3 text-primary"
              alt="Hackatoons.com Logo"
            />
          </div>
          <div className="flex items-center">
            <Bookmark fill="white" className="mr-[10px]" />
            <Bell fill="white" className="mr-[10px]" />
            <Avatar />
          </div>
        </nav>
      </div>
      <div className="border-[0.5px] border-solid border-[#DCDCDC]" />
      <div className="xl:container mx-auto">
        <h1 className="font-bold text-[36px] leading-[54px] mt-[48px]">
          Hi Katie, you have earned{' '}
          <span className="text-[#60DD4D]">{`${creditScore} sustainability`}</span>{' '}
          points!
        </h1>
        <p className="font-semibold text-[20px] leading-[30px] text-[#B1B1B1]">
          Redeem your points and get exclusive discounts with our coupons now.
        </p>
        <ul className="flex mt-[48px]">
          {categories.map(({ displayName, keyName }) => {
            return (
              <>
                <li
                  className={`px-[28px] border-r border-solid border-r-[#BBBBBB] cursor-pointer last:border-none ${
                    category === keyName
                      ? 'font-semibold text-[20px] leading-[24px] text-[#60C689]'
                      : 'font-medium text-[16px] leading-[24px]'
                  }`}
                  key={keyName}
                  onClick={() => setCategory(keyName)}
                >
                  {displayName}
                </li>
              </>
            )
          })}
        </ul>
        <ul className="mt-[48px] grid grid-cols-3 grid-flow-row gap-[12px]">
          {offers
            .filter(
              (offer) => offer.category === category || category === 'all'
            )
            ?.map((offer) => {
              return (
                <OfferCard
                  imagePath={offer.offerImagePath}
                  title={offer.offerTitle}
                  companyName={offer.partyOffering}
                  key={offer.offerTitle}
                />
              )
            })}
        </ul>
      </div>
    </>
  )
}
