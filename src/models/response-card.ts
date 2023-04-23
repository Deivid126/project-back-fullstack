import { products } from "./product"

export type response = {
    name:string,
    email:string,
    last_compras: products[];
}