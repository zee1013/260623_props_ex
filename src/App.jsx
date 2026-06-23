import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  // 검색 기능
  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="container">
        <h1 className="title">상품 목록</h1>
        <div className="top-area">
          {/* 입력창 */}
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* 버튼 */}
          <Button text="초기화 🔍"  onClick={()=>setSearch("")}/>
        </div>
        {/* 상품 리스트 */}
        <ProductList products={filterProducts} />
      </div>
    </>
  );
}
export default App;
