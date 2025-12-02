
interface Payload {
  name: string;
  image: string;
  price: number;
}

function ProductCard({ name, image, price }: Payload) {
  return (
    <div className="h-full w-full">
      <div className="border">
        <img
          src={image}
          alt={name}
          className="w-full min-h-[600px] max-h-[700px] min-w-[500px] object-contain"
        />
      </div>

      <div className="h-full">
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
