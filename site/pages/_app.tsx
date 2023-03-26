import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, ReactNode, useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import Portal from '@components/toggle/portal'
import ToggleWidget from '@components/toggle/toggleWidget'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  const toggleParamRef = useRef({
    brightnessLevel: '100',
    hibernateChecked: false,
    darkModeChecked: false,
  })

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
          <Portal>
            <ToggleWidget toggleParamRef={toggleParamRef} />
          </Portal>
        </Layout>
      </ManagedUIContext>
    </>
  )
}
