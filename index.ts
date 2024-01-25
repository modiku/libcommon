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

}

interface Product{
    id: string
    name: string
    phone: string
    date:Date
    imgUrl: string
    CarouselImg1: string
    CarouselImg2: string
    CarouselImg3: string
    description: string
}

interface Order{
    id:string

    products:Product[]

    user:User

    address:string
}

interface Query{
    keyWord:string
}