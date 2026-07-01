import plants from "../../data/plants";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <div className="mt-20 grid grid-cols-4 gap-9">
      {plants.map((plant) => (
        <ProductCard
          key={plant.id}
          image={plant.image}
          name={plant.name}
          price={plant.price}
        />
      ))}
    </div>
  );
}

export default ProductGrid;