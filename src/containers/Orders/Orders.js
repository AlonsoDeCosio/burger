import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import Aux from '../../hoc/HocAux'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        laoding: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrder = []
                for (let key in res.data) {
                    fetchOrder.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ laoding: false, orders: fetchOrder })
            }).catch(err => {
                this.setState({ laoding: false })
            })
    }

    render() {
        return (
            <Aux>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </ Aux>
        )
    }
}

export default withErrorHandler(Orders, axios)