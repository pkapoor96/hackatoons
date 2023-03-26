import { FC } from 'react'
import s from './ConfimationPopup.module.css'
import cn from 'clsx'
import { Button } from '@components/ui'

interface ConfimationPopupTypes {
  className?: string
  closePopup: any
  isModalOpen: boolean
}

const ConfimationPopup: FC<ConfimationPopupTypes> = ({
  closePopup,
  className,
  isModalOpen,
}) => {
  const rootClassName = cn(s.root, className)

  return (
    <div className={rootClassName}>
      <div
        id="myModal"
        className={`${isModalOpen ? s.show : s.hide} ${s.modal}`}
      >
        <div className={s.modalContent}>
          <div>
            <button onClick={() => closePopup()} className={s.close}>
              <span>&times;</span>
            </button>
            <p className={s.modalBody}>Some text in the Modal..</p>
            <Button width="70%" variant="slim" className="">
              Back to Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfimationPopup
