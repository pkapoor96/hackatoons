import cn from 'clsx'
import s from './ProductTag.module.css'
import LeafEmpty from '@components/icons/LeafEmpty'
import LeafFilled from '@components/icons/LeafFilled'

interface ProductTagProps {
  className?: string
  name: string
  price: string
  ecoRating?: number
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  ecoRating,
  className = '',
  fontSize = 32,
}) => {
  function renderProductSustainability(ecoRating: number) {
    var ratingArray = []
    for (var i = 1; i <= ecoRating; i++) {
      ratingArray.push(
        <div className={s.rating}>
          <LeafFilled />
        </div>
      )
    }
    for (var i = 1; i <= 5 - ecoRating; i++) {
      ratingArray.push(
        <div className={s.rating}>
          <LeafEmpty />
        </div>
      )
    }
    return ratingArray
  }

  return (
    <div className={cn(s.root, className)}>
      <h3 className={s.name}>
        <span
          className={cn({ [s.fontsizing]: fontSize < 32 })}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
      <div className={s.price}>{price}</div>
      {ecoRating && renderProductSustainability(ecoRating)}
    </div>
  )
}

export default ProductTag
