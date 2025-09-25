import { HiHome } from "react-icons/hi2";
import Cart from "./cart";
import Location from "./location";
import SignInSignUp from "./sign_in_sign_up";

export const MobileNav = () => {
  return (
    <div className="md:hidden z-50 flex bg-white items-center justify-around fixed bottom-0 w-full h-14">

      <Location />
      <HiHome className="text-2xl"/>
      <Cart />
      <SignInSignUp />
    </div>
  );
};
