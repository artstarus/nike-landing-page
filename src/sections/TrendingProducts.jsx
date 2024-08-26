import TrendingProductCard from "../components/TrendingProductCard"
import { products } from "../constants"

const TrendingProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Trending</span> Products</h2>
        <p className="font-montserrat text-slate-gray">Step into the ultimate combination of performance and style with our elite sneaker collection. Discover unparalleled comfort, cutting-edge design, and unbeatable value.</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 sm:gap-4 gap-14">
        {products.map((product) => (
          <TrendingProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default TrendingProducts