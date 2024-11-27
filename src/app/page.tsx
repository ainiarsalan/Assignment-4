export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">SHOP.CO</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-700">Shop</a>
          <a href="#" className="hover:text-gray-700">On Sale</a>
          <a href="#" className="hover:text-gray-700">New Arrivals</a>
          <a href="#" className="hover:text-gray-700">Brands</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="md:hidden">☰</div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-white">
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4">
            Find Clothes That Matches <br /> Your Style
          </h1>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Shop Now
          </button>
          <div className="mt-8 space-y-2">
            <p>200+ International Brands</p>
            <p>2,000+ High-Quality Products</p>
            <p>30,000+ Happy Customers</p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0">
          <img
            src="/images/hero-image.jpg"
            alt="Hero Image"
            className="w-full max-w-md rounded-md"
          />
        </div>
      </section>

      {/* Brand Logos */}
      <section className="flex items-center justify-around px-6 py-8 bg-gray-100">
        <img src="/images/versace.png" alt="Versace" className="h-8" />
        <img src="/images/zara.png" alt="Zara" className="h-8" />
        <img src="/images/gucci.png" alt="Gucci" className="h-8" />
        <img src="/images/prada.png" alt="Prada" className="h-8" />
        <img src="/images/calvin-klein.png" alt="Calvin Klein" className="h-8" />
      </section>
    </div>
  );
}