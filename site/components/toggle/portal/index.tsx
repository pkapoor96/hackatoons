import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { PortalProps } from './Portal.type'

const Portal: FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.getElementById('myportal') as HTMLElement)
    : null
}

export default Portal
