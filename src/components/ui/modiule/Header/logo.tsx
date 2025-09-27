// import Image from "next/image";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="w-fit rounded-md overflow-hidden">
        <h1 className="text-base text-ellipsis overflow-hidden "><span className="text-xl font-bold text-primary">F</span>commarce</h1>
      {/* <Image
        className="w-44 h-10 object-cover"
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
      /> */}
    </Link>
  );
};
export default Logo;
