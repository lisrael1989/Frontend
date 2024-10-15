import { utilService } from "./util.service"

const STORAGE_KEY = 'orders';

export const orderService = {

}


createOrder(orderDetails) {
    return {
        _id: utilService.makeId(),
        userId: '',
        dishes: [
            {
                name: "",
                price: 0,
                quantity: 0
            }
        ],
        totalPrice: 0,
        createdAt: new Date().toISOString(),
        status: 'pending',
    }
}

