import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export const Custom404 = () => {
  return (
    <>
    <Head>
      <title>Edmer - 404</title>
    </Head>
      <div className="flex flex-col h-screen px-40">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-1/2">
            <Image
              width={500}
              height={500}
              objectFit="contain"
              src={"/assets/images/404.svg"}
              alt="404"
            />
          </div>
          <div className="w-1/2 py-5">
            <h1 className="py-20 text-5xl font-extrabold">ERROR 404</h1>
            <p>
              The page you are looking for is not found please check if the
              address you entered is correct. If you think there is something
              wrong please contact the admin.
            </p>
            <small>
              <b>Admin: </b>{" "}
              <Link href="mailto:edmerpizarra@gmail.com">
                <a>edmerpizarra@gmail.com</a>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
