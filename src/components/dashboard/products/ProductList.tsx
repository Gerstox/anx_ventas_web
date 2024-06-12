import { fakeProducts } from '@/lib/fake-data';
import ProductListItem from './ProductListItem';

export default function ProductList() {
  const products = fakeProducts;
  return (
    <>
      <div className="md:hidden mt-4 flex flex-col gap-1 pt-[40px]">
        {products.map((product) => (
          <ProductListItem key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}
