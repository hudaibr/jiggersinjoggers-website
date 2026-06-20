import { Metadata } from "next";
import ProductDetailsClient from "./ProductDetailsClient";

export const metadata: Metadata = {
  title: "Shop Details Page",
};

type Props = {
  params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {

  const { id } = await params;
  const productId = id[0];

  return (
    <>
      <ProductDetailsClient productId={productId} />
    </>
  )
}