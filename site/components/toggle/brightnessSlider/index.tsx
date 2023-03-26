import Brightness from '@components/icons/Brightness'
import { FC, useEffect, useState } from 'react'
import { ToggleWidgetTypes } from '../toggleWidget/ToggleWidget.type'
import s from './brightnessSlider.module.css'

const BrightnessSlider: FC<ToggleWidgetTypes> = ({ toggleParamRef }) => {
  const [brightnessVal, setBrightnessVal] = useState(
    toggleParamRef.current.brightnessLevel
  )
  useEffect(() => {
    const container = document.getElementById('__next')?.style!
    container.filter = `brightness(${brightnessVal}%)`
    toggleParamRef.current = {
      ...toggleParamRef.current,
      brightnessLevel: brightnessVal,
    }
  }, [brightnessVal])
  return (
    <div className="flex items-center w-max mt-[28px]">
      <Brightness className="mr-[10px]" />
      <label className="leading-[18px] text-[12px] font-medium text-[black] mr-[10px]">
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
