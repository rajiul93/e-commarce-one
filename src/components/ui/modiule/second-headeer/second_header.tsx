import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiGift } from "react-icons/fi"; 
import { TbLayoutDashboard } from "react-icons/tb";
const SecondHeader = () => {
  return (
    <div className="mt-2  flex items-center justify-between px-4 lg:px-0">
      <div className="flex items-center justify-start">
        <div>
          <Select>
            <SelectTrigger className="w-[140px] justify-start font-semibold  border-0 bg-transparent shadow-none ">
              <TbLayoutDashboard />{" "}
              <SelectValue className="m-0 p-0 w-fit" placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="electronics"
                  className="cursor-pointer hover:text-primary"
                >
                  Electronics
                </SelectItem>

                <SelectItem
                  value="fashion"
                  className="cursor-pointer hover:text-primary"
                >
                  Fashion
                </SelectItem>

                <SelectItem
                  value="health-beauty"
                  className="cursor-pointer hover:text-primary"
                >
                  Health &amp; Beauty
                </SelectItem>

                <SelectItem
                  value="womens"
                  className="cursor-pointer hover:text-primary"
                >
                  Women&apos;s
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden  md:flex gap-4 text-gray-700 text-sm border-l border-gray-300 pl-4">
          <span className="cursor-pointer hover:text-primary">Electronics</span>
          <span className="cursor-pointer hover:text-primary">Fashion</span>
          <span className="cursor-pointer hover:text-primary">
            Health & Beauty
          </span>
          <span className="cursor-pointer hover:text-primary">
            Women&apos;s
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FiGift  className="text-primary"/> <span className="text-sm">Best Deals</span>
      </div>
    </div>
  );
};
export default SecondHeader;
