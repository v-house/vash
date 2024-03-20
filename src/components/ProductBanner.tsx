const ProductBanner = () => {
  return (
    <div className="border border-gray-300 shadow-lg m-2 p-2">
      <div className="mb-2">
        <img
          src="https://th.bing.com/th/id/OIP.HDeUZv5Q4k-L93KvAOAUQgHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Product"
        />
      </div>
      <div className="font-bold line-clamp-1 text-lg">Men's Shoes</div>
      <div className="line-clamp-2 text-xs text-gray-600">
        Comfortable Men Shoes built up of leather and highly fit for walking in
        rain and summer
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-lg">$899</div>
        <div className="line-through text-sm">$1999</div>
      </div>
    </div>
  );
};

export default ProductBanner;
