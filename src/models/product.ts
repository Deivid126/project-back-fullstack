

export type product = 
{
    productId:number,
    qunatity:number 
}

export type products =
{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:rating

}

type rating = 
{
    rate:number,
    count:number
}
