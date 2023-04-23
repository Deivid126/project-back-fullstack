import axios from 'axios';
import { cards} from '../models/cards';
import { response } from '../models/response-card';
import { product, products } from '../models/product';

export default class ApiService {
    
    constructor() { }

    cards:cards | any;
    card: product | any;
    response: response | any;
    async getcards(id: number) {
        const url = "https://fakestoreapi.com/carts";

        try {
            const res = await axios.get(url);
            this.card = res.data.filter((item: any) => item.userId === id);
            this.card = this.card.map((prod: any) => prod.products);
            this.card = this.card.reduce((acc: any, curr: any) => {
                acc.products.push(...curr);
                return acc;
            }, { products: [] });

            const productPromises = this.card.products.map((product: any) =>
                axios.get(`https://fakestoreapi.com/products/${product.productId}`)
            );

            const responses = await Promise.all(productPromises);
            const products = responses.map((response: any) => response.data);
            this.card.products = products;

            return this.card;
        } catch (error) {
            console.log(error);
        }
    }

    async getuser(id: number) {
        const urlid = "https://fakestoreapi.com/users/";

        try {
            const res = await axios.get(`${urlid}${id}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getresponse(id: number) {
        try {
            const cardsPromise = this.getcards(id);
            const userPromise = this.getuser(id);
            const [cards, userResponse] = await Promise.all([cardsPromise, userPromise]);


            this.response = {
                email: userResponse.email,
                name: `${userResponse.name.firstname} ${userResponse.name.lastname}`,
                last_compras: cards.products
            }

            return this.response;
        } catch (error) {
            console.log(error);
        }
    }    
}


