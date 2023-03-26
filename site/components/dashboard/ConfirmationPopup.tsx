import { FC } from 'react'
import s from './ConfimationPopup.module.css'
import cn from 'clsx'
import { Button } from '@components/ui'
import Link from 'next/link'

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
  const updateCreditScore = (amount: number) => {
    fetch('http://3.128.153.4:3001/updateCreditScore', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        details: {
          userId: 'nangarg',
          activity: 'redeem',
          value: amount,
        },
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  return (
    <div className={rootClassName}>
      <div
        id="myModal"
        className={`${isModalOpen ? s.show : s.hide} ${s.modal}`}
      >
        <div className={s.modalContent}>
          <div>
            <button
              onClick={() => {
                updateCreditScore(20)
                closePopup()
              }}
              className={s.close}
            >
              <span>&times;</span>
            </button>
            <p className={s.modalBody}>Some text in the Modal..</p>
            <Button
              width="70%"
              variant="slim"
              className=""
              onClick={() => updateCreditScore(20)}
            >
              Back to Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfimationPopup
