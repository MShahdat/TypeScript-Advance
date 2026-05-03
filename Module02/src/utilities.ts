//& utilities type

type Product = {
  id: number
  name: string
  price: number
  rating: number
  discount?: number
}

//* Pick<>
type ProductSum = Pick<Product, 'id' | 'name' | 'price'>


//* Omit<>
type ProductSumm = Omit<Product, 'rating' | 'discount'>


//* Required<>  >> all property will be required if any exist optional
type ProductRequired = Required<Product>


//* Partial<>   => all property will be optional 
type OptionalProduct = Partial<Product>



//* Readonly<>   =>> all property will be readonly
type ReadonlyPro = Readonly<Product>


//* Record<key type, value type>  initialize empty object
const emptyObj : Record<string, unknown> = {}



