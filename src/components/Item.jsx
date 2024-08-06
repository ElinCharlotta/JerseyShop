function Item({ items, item, selectedProduct, changeQuantity }) {


    return (
        <>

            <div onClick={() => selectedProduct(item.id)} className={`product ${item.isInBag ? "selected" : ""}`}>
                <div className="photo">
                    <img src={"./img/" + item.photo} />
                </div>
                <div className="description">
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>


                    {
                        item.isInBag &&
                        <div className="quantity-area">
                            <button
                                disabled={item.quantity <= 0}
                                onClick={(e) => item.quantity > 0 && changeQuantity(e, item.id, -1)}
                            >-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={(e) => changeQuantity(e, item.id, +1)}>+</button>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default Item