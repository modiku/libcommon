//todo
interface User{
    number:string
    password:string
    name:string
    authority:number
    date:Date
    userAvaterUrl:string
    description:string
    orders:Order[]
}



interface Product{
    id: string
    name: string
    phone: string
    price:number
    date:Date
    imgUrl: string
    CarouselImg1: string
    CarouselImg2: string
    CarouselImg3: string
    description: string
}



interface Order{
    id:string

    carproducts:carProduct[]

    user:User

    address:string

    consigneeName:string

    consigneePhoneNumber:string

    totalprice:number


}



interface Query{
    keyWord:string
}

interface carProduct{
    id:string

    product:Product

    num:number

    price:number
    
}

