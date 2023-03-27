import { FC } from 'react'
import s from './ConfimationPopup.module.css'
import cn from 'clsx'
import { Button } from '@components/ui'
import Image from 'next/image'

interface ConfimationPopupTypes {
  className?: string
  closePopup: any
  isModalOpen: boolean
  deductionAmount: number
}

const ConfimationPopup: FC<ConfimationPopupTypes> = ({
  closePopup,
  className,
  isModalOpen,
  deductionAmount,
}) => {
  const rootClassName = cn(s.root, className)
  const updateCreditScore = (amount: number, stayOnSamePage?: boolean) => {
    fetch(
      'https://nestjs-app-lb-2079032137.us-east-2.elb.amazonaws.com/updateCreditScore',
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          details: {
            userId: 'nangarg',
            activity: 'redeem',
            value: amount,
          },
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err))
    !stayOnSamePage && window.history.back()
  }

  return (
    <div className={rootClassName}>
      <div
        id="myModal"
        className={`${isModalOpen ? s.show : s.hide} ${s.modal}`}
      >
        <div className={s.modalContent}>
          <button
            onClick={() => {
              updateCreditScore(deductionAmount, true)
              closePopup()
            }}
            className={s.close}
          >
            <span>&times;</span>
          </button>
          <div className={s.modalDiv}>
            <Image
              src={'/assets/coupon.png'}
              alt={'offer image'}
              width={150}
              height={150}
              quality="85"
            />
            <p className={`${s.modalBody} text-[20px] font-medium`}>
              Thank you for being a steward of the planet and making sustainable
              choices.
            </p>
            <p className={`${s.modalText} text-[20px] font-medium`}>
              Check our discount coupon in your inbox!
            </p>
            <Button
              width="70%"
              variant="slim"
              onClick={() => updateCreditScore(deductionAmount)}
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
