// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-background text-textSecondary py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section: About */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">About Us</h3>
          <p className="mt-2 text-sm">
            We are an e-commerce platform providing quality products and exceptional services for all your needs.
          </p>
        </div>

        {/* Section: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">Useful Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-textHighlight">About Us</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-textHighlight">FAQ</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-textHighlight">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-textHighlight">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Section: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Email: support@example.com</li>
            <li>Phone: +123 456 789</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </div>

        {/* Section: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">Newsletter</h3>
          <p className="mt-2 text-sm">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-cardBackground text-textPrimary border border-border focus:outline-none focus:ring-2 focus:ring-buttonPrimary"
            />
            <button
              type="submit"
              className="mt-2 w-full p-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-border pt-5 text-center text-sm">
        <p className="text-textSecondary">© 2024 Your Company. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://facebook.com" className="hover:text-textHighlight">Facebook</a>
          <a href="https://twitter.com" className="hover:text-textHighlight">Twitter</a>
          <a href="https://instagram.com" className="hover:text-textHighlight">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
