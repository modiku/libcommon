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

interface myUser{
    number:string
    password:string
    name:string
    authority:number
    date?:Date
    myAuthority?:string
    userAvaterUrl?:string
    description?:string
    orders?:Order[]
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

interface myProduct{
    id: string
    name: string
    phone: string
    price:number
    date?:Date
    imgUrl?: string
    CarouselImg1?: string
    CarouselImg2?: string
    CarouselImg3?: string
    description?: string
    num?:number
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

interface myOrder{
    id?:string
    
    carproducts?:carProduct[]
    
    user:myUser

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

interface myCarProduct{
    id?:string

    product:onlyProduct

    num:number

    price:number

    order:onlyOrder
}