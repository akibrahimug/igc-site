import { modifyNavLinks } from "@/utils";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

export default async function Footer({ datasource, navigation }) {
  // 1) Helper to parse each value string into JSON:
  function parseValue(str) {
    // Remove trailing commas before a closing bracket (like ", ]")
    str = str.replace(/,\s*\]/, "]");

    // Convert name: -> "name": and href: -> "href":
    // (This is a simplified approach and works for these key names.)
    str = str.replace(/(\bname|\bhref)\s*:/g, '"$1":');

    // Now parse the cleaned string as JSON
    return JSON.parse(str);
  }

  const data = datasource.data.datasource_entries.reduce((acc, item) => {
    let parsedArray;
    try {
      parsedArray = parseValue(item.value);
    } catch (error) {
      console.error(`Error parsing value for "${item.name}":`, error);
      // Fallback to an empty array if parsing fails
      parsedArray = [];
    }

    acc[item.name] = parsedArray;
    return acc;
  }, {});

  return (
    <footer className="bg-black-900 text-brown-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500">IGC FASHION</h3>
            <p className="text-sm">
              We create amazing products that make your life easier and more
              enjoyable.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-brown-100 transition-colors">
                <FaFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-brown-100 transition-colors">
                <FaTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-brown-100 transition-colors">
                <FaInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-brown-100 transition-colors">
                <FaYoutube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              {data.company.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.href}
                    className="hover:text-brown-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500">Stay Updated</h3>
            <p className="text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-brown-100 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-amber-500 text-brown-100 px-4 py-2 rounded-r-md hover:bg-amber-500 transition-colors"
              >
                <FaMailBulk size={20} />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} IGC FASHION AFRICA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
