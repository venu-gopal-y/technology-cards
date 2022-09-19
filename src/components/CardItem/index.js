// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="role">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="avatar" alt={title} />
    </li>
  )
}

export default CardItem
