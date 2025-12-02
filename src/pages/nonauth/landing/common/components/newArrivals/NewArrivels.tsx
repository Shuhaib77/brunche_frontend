import ProductCard from "../../../../../../common/components/cards/ProductCard";

function NewArrivels() {
  const products = [
    {
      id: 1,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "Classic Sneaker",
      price: 1299,
    },
    {
      id: 2,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "White Runner",
      price: 1499,
    },
    {
      id: 2,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "White Runner",
      price: 1499,
    },
    {
      id: 2,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "White Runner",
      price: 1499,
    },
    {
      id: 2,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "White Runner",
      price: 1499,
    },
    {
      id: 2,
      image:
        "https://southwave.store/cdn/shop/files/725FC0FE-9AD8-49B2-B0A5-AAA7A16EAE3F.png?v=1760217229",
      name: "White Runner",
      price: 1499,
    },
  ];
  return (
    <div>
      <h1>new Arrraivels</h1>
      <div className="w-full grid gap-5 p-5 grid-cols-3  ">
        {products.map((item, i) => (
          <ProductCard name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <div className=" px-10 py-5 border ">view all</div>
      </div>
    </div>
  );
}

export default NewArrivels;
