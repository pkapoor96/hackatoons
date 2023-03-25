import { Moon } from '@components/icons'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import s from '../hibernateToggle/hibernateToggle.module.css'

const DarkModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center w-full">
      <Moon stroke="#2568FB" className="mr-[10px]" />
      <label className="leading-[18px] text-[12px] font-medium text-[#2568FB] mr-[10px]">
        Dark Mode
      </label>
      <label className={s.toggle}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className={s.slider}></span>
      </label>
    </div>
  )
}

export default DarkModeToggle
