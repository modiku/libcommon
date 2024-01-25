//todo
interface User{
    number:string
    password:string
    name:string
    authority:number
    date?:Date
    userAvaterUrl?:string
    description?:string
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
    imgUrl?: string
    CarouselImg1?: string
    CarouselImg2?: string
    CarouselImg3?: string
    description?: string
}

interface Query{
    keyWord:string
}