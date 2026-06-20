"use client";
import BreadcrumbAreaThree from "@/app/components/breadcrumb/breadcrumb-area-3";
import ShopDetailsArea from "@/app/components/shop-details/shop-details-area";
import useProducts from "@/hooks/useProducts";
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import Wrapper from "@/layout/wrapper";
import { notFound } from "next/navigation";

interface Props {
   productId: string;
}

export default function ProductDetailsClient({ productId }: Props) {
   const { products } = useProducts();
   const product = products.find((item) => String(item.id) === productId);

   if (!product) {
      notFound();
   }

   return (
      <Wrapper>
         {/* header start */}
         <Header />
         {/* header end */}

         {/* main area start */}
         <main className="main--area">
            {/* breadcrumb area start */}
            <BreadcrumbAreaThree title="PRODUCT SINGLE" subtitle="PRODUCT SINGLE" />
            {/* breadcrumb area end */}

            {/* shop details area start */}
            <ShopDetailsArea product={product} />
            {/* shop details area end */}
         </main>
         {/* main area end */}

         {/* footer start */}
         <Footer />
         {/* footer end */}
      </Wrapper>
   );
}