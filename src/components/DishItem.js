const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div>
      <button
        type='button'
        onClick={onDecreaseQuantity}
        disabled={getQuantity() === 0}
      >
        -
      </button>
      <p>{getQuantity()}</p>
      <button type='button' onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li>
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} me-3`}
      ></div>
      <div
        className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`}
      ></div>
      <div>
        <h1>{dishName}</h1>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability ? <p>Not available</p> : renderControllerButton()}
        {addonCat.length !== 0 && <p>Customizations available</p>}
      </div>
      <p>{dishCalories} calories</p>
      <img src={dishImage} alt={dishName} />
    </li>
  )
}

export default DishItem
