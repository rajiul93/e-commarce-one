import { IoLocationOutline } from "react-icons/io5"

const Location =()=>{
return <div className="flex items-center gap-1 ">
    <IoLocationOutline className="text-3xl md:text-2xl " />
    <div className="text-xs hidden lg:block">
        <p className="text-gray-500">Delivary Bangladesh</p>
        <p className="font-medium">Update Location</p>
    </div>
</div>
}
export default Location