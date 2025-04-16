import React from "react";
import notFoundPage from "../../public/assets/images/not-found.png"
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <p className="text-center mt-10">
      <Link href="/" >Back to Home</Link>
      </p>
      <div className="flex items-center justify-center" >
      <Image src={notFoundPage} alt="not-found-page" />
      </div>
      
    </div>
  );
};

export default NotFound;
