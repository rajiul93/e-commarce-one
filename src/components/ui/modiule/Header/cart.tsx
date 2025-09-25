import { HiOutlineShoppingCart } from "react-icons/hi"

const Cart =()=>{
return <div className="flex items-center gap-1 text-sm relative">
    <HiOutlineShoppingCart className="text-2xl" /> <span className="hidden lg:block">Cart</span>
    <span className="absolute left-3 -top-2 bg-primary h-4 w-4 flex justify-center items-center font-semibold text-secondary rounded-full text-[9px]">21</span>
</div>
}
export default Cart