const Card = (props) => {
  const {
    cardImage,
    redStarImage,
    rating,
    reviewCount,
    country,
    title,
    price,
  } = props
  return (
    <main className='main-content'>
      <div className='card'>
        <img src={cardImage} alt='katie zaferes' />
        {Math.random() > 0.5 && <p className='sold-out'>sold out</p>}

        <div className='card--info'>
          <img src={redStarImage} alt='red star' />
          <p className='card--info--rate'>
            {rating}({reviewCount}).
          </p>
          <p className='card--info--country'>{country}</p>
        </div>
        <h4>{title}</h4>
        <h3>
          <b className='bold'>From ${price}</b>
          <small>/ person</small>
        </h3>
      </div>
    </main>
  )
}

export default Card
