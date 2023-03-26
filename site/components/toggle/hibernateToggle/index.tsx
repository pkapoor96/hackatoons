import Power from '@components/icons/Power'
import { FC, useEffect, useState } from 'react'
import { ToggleWidgetTypes } from '../toggleWidget/ToggleWidget.type'
import s from './hibernateToggle.module.css'

const HibernateToggle: FC<ToggleWidgetTypes> = ({ toggleParamRef }) => {
  const [isChecked, setIsChecked] = useState(
    toggleParamRef.current.hibernateChecked
  )

  useEffect(() => {
    let inactivityTimeout: string | number | NodeJS.Timeout | undefined

    function resetInactivityTimeout() {
      clearTimeout(inactivityTimeout)
      inactivityTimeout = setTimeout(logOutUser, 5000) // 5 minutes
      document.body?.classList?.remove('inactive')
    }

    function logOutUser() {
      // Do something to log out the user
      console.log('User has been inactive for 5 minutes.')
      document.body?.classList?.add('inactive')
    }

    if (isChecked) {
      document.addEventListener('mousemove', resetInactivityTimeout)
      document.addEventListener('keydown', resetInactivityTimeout)
      inactivityTimeout = setTimeout(logOutUser, 5000)
    } else {
      document.removeEventListener('mousemove', resetInactivityTimeout)
      document.removeEventListener('keydown', resetInactivityTimeout)
      document.body?.classList?.remove('inactive')
      clearTimeout(inactivityTimeout)
    }

    //set ref value
    toggleParamRef.current = {
      ...toggleParamRef.current,
      hibernateChecked: isChecked,
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', resetInactivityTimeout)
      document.removeEventListener('keydown', resetInactivityTimeout)
      document.body?.classList.remove('inactive')
      clearTimeout(inactivityTimeout)
    }
  }, [isChecked])
  return (
    <div className="flex items-center w-full mt-[28px]">
      <Power className="mr-[10px]" />
      <label className="leading-[18px] text-[12px] font-medium text-[black] mr-[10px]">
        Hibernate
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

export default HibernateToggle
