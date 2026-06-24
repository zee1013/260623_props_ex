import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
// import "./App.css"

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <div className="list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            // 카드 클릭했을 때 product가 담김
            // selectedProduct = product
            onSelect={setSelectedProduct}
          />
        ))}
      </div>
      {/* 선택된 상품이 있을때만 모달창 보여주기 */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
export default ProductList;
