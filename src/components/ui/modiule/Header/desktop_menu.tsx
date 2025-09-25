import Cart from "./cart";
import Location from "./location";
import Logo from "./logo";
import Search from "./Search";
import SignInSignUp from "./sign_in_sign_up";

const DeskTopMenu = () => {
  return (
    <div className=" px-4 lg:px-0 h-16 flex items-center justify-between border-b">
      <Logo />
      <Search />
      <div className="hidden md:flex items-center gap-4">

        <Location />
        <Cart />
        <SignInSignUp />
      </div>
    </div>
  );
};
export default DeskTopMenu;
