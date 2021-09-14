import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectPrice } from '../features/counter/PriceSlice'

const Paypal = () => {
    const price = useSelector(selectPrice)
    const paypal = useRef()

    useEffect(() => {

        // paypal.Buttons()

        // window.paypal.Buttons({
        //     createOder: (data, actions, err) => {
        //         return actions.order.create({
        //             intent: 'CAPTURE',
        //             purchase_units: [
        //                 {
        //                     descriptions: 'Netflix subscriotion',
        //                     amount: {
        //                         currency_code: 'EUR',
        //                         value: price,
        //                     }
        //                 }
        //             ]
        //         })
        //     },
        //     onApprove: async (data, actions) => {
        //         const order = await actions.order.capture()
        //         console.log(order)
        //     },
        //     onError: err => console.log(err),
        // }).render(paypal.current)

    }, [price])
    return (
        <div ref={paypal}>
        </div>
    )
}
export default Paypal
