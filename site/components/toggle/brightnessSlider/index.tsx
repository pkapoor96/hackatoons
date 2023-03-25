import Brightness from '@components/icons/Brightness'
import { useEffect, useState } from 'react'
import s from './brightnessSlider.module.css'

const BrightnessSlider = () => {
  const [brightnessVal, setBrightnessVal] = useState('100')
  useEffect(() => {
    document.body.style.filter = `brightness(${brightnessVal}%)`
  }, [brightnessVal])
  return (
    <div className="flex items-center w-max mt-[28px]">
      <Brightness className="mr-[10px]" />
      <label className="leading-[18px] text-[12px] font-medium text-[#2568FB] mr-[10px]">
        Brightness
      </label>
      <input
        className={s['range-input']}
        type="range"
        min="40"
        max="100"
        value={brightnessVal}
        onChange={(e) => setBrightnessVal(e.target.value)}
      />
    </div>
  )
}

export default BrightnessSlider
