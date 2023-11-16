import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProdutoFrame = ({ title, url }) => {
  return (
    <>
      <Image
        alt={title}
        src={url}
        width={600}
        height={600}
        className="w-full object-cover aspect-square rounded-md"
      />
      <div className="bg-white p-4 px-6 text-center">
        <h3>{title}</h3>
        <h4>
          <Link href={"/"}>Voltar</Link>
        </h4>
      </div>
    </>
  );
};

export default ProdutoFrame;
