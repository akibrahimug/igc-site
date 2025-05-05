import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

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
    <footer className="bg-black text-brown-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter font-igc">
              IGC FASHION
            </h2>
            <p className=" lg:text-lg text-sm text-gray-400 max-w-xs leading-relaxed">
              Timeless elegance for the modern individual. Crafted with
              precision and passion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brown-100 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brown-100 transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brown-100 transition-colors"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brown-100 transition-colors"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brown-100 transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {data.company.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brown-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-800 text-brown-100 placeholder:text-gray-500 focus:ring-white"
              />
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} IGC FASHION AFRICA. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-brown-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-brown-100 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-brown-100 transition-colors"
              >
                Shipping Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-brown-100 transition-colors"
              >
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
