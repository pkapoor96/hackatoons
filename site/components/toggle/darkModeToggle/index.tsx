import { Moon } from '@components/icons'
import { useToggleTheme } from '@lib/hooks/useToggleTheme'
import { FC, useEffect, useState } from 'react'
import s from '../hibernateToggle/hibernateToggle.module.css'
import { ToggleWidgetTypes } from '../toggleWidget/ToggleWidget.type'

const DarkModeToggle: FC<ToggleWidgetTypes> = ({ toggleParamRef }) => {
  const [isChecked, setIsChecked] = useState(
    toggleParamRef.current.darkModeChecked
  )
  const { theme, setTheme } = useToggleTheme()

  useEffect(() => {
    if (isChecked) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme('dark')
    }
    toggleParamRef.current = {
      ...toggleParamRef.current,
      darkModeChecked: isChecked,
    }
  }, [isChecked])

  return (
    <div className="flex items-center w-full">
      <Moon stroke="black" className="mr-[10px]" />
      <label className="leading-[18px] text-[12px] font-medium text-[black] mr-[10px]">
        Light Mode
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
