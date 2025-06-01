// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What are you waiting for?
        </h2>
        <p className="text-gray-400 mb-6">
          Transform your brand. Let us deliver strategies that accelerate your
          business forward.
        </p>
        <form className="flex justify-center gap-2 mb-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white w-64"
          />
          <button
            type="submit"
            className="bg-primary px-6 py-2 rounded-lg text-white"
          >
            Subscribe
          </button>
        </form>

        <div className="text-sm text-gray-500">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Creative Agency. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
