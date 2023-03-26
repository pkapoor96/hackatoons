import { MutableRefObject } from 'react'

export interface ToggleWidgetTypes {
  toggleParamRef: MutableRefObject<{
    brightnessLevel: string
    hibernateChecked: boolean
    darkModeChecked: boolean
  }>
}
