function OrderDetails({ itemsInBag }) {

    function calculateTotal() {
        let ordertotal = 0;
        itemsInBag.forEach(item => {
          if (item.quantity > 0) {
            ordertotal += item.price * item.quantity;
          }
        });
        return ordertotal.toFixed(2);
      }


    return (
        <>
            <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInBag.filter(item => item.quantity > 0).map(item =>

                            <tr>
                                <td>{item.quantity} x {item.name}</td>
                                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )}


                        <tr>
                            <th>Total</th>
                            <th>$ {calculateTotal()}</th>
                        </tr>
                    </tbody>
                </table>
            </section>

        </>
    )
}

export default OrderDetails