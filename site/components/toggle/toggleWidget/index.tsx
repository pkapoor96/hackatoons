import { Cross, Plus } from '@components/icons'
import Insight from '@components/icons/Insight'
import Link from 'next/link'
import { FC, useState } from 'react'
import BrightnessSlider from '../brightnessSlider'
import DarkModeToggle from '../darkModeToggle'
import HibernateToggle from '../hibernateToggle'
import { ToggleWidgetTypes } from './ToggleWidget.type'

const ToggleWidget: FC<ToggleWidgetTypes> = ({ toggleParamRef }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  return (
    <div className="fixed right-[54px] bottom-[20px]">
      <div
        className={`border-[1.2px] border-solid border-[#60C689] rounded-[4.8px] absolute bottom-[85px] right-0 py-[28px] px-[16px] bg-white ${
          isToggleOpen ? 'block' : 'hidden'
        }`}
      >
        <DarkModeToggle toggleParamRef={toggleParamRef} />
        <HibernateToggle toggleParamRef={toggleParamRef} />
        <BrightnessSlider toggleParamRef={toggleParamRef} />
      </div>

      <div className="border-[1px] border-solid border-[#60C689] rounded-[4px] w-max flex flex-col items-center bg-white">
        <button
          className="p-[10px] rounded-[0 0 4.8px 4.8px] bg-[#60C689] text-white hover:bg-[#00925B]"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          {isToggleOpen ? <Cross /> : <Plus />}
        </button>
        <Link href="/dashboard" className="flex flex-col items-center">
          <Insight />
          <span className="leading-[15px] font-medium text-[#60C689] text-[10px] cursor-pointer">
            Insights
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ToggleWidget
