import SearchProduct from "./SearchProduct";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 fixed top-0 left-0 right-0 bg-yellow-100 h-24 z-30">
      <h1 className="text-3xl">
        <span>⚛️</span>ASSIGNMENT REACT
      </h1>
      <div className="flex gap-5">
        <SearchProduct />
      </div>
    </header>
  );
}

export default Header;
