import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";
// TODO: Activate the social media links (Add ticktok and linkedin)
// TODO: Change the navigation items
// Plug into storyblok datasource for dynamic content
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">IGC FASHION</h2>
            <p className=" lg:text-lg text-sm text-gray-400 max-w-xs leading-relaxed">
              Rooted in culture. Centred on climate. Powered by community.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
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

          {/* Company Column */}
          <div className="space-y-4">
            <h6 className="text-md font-medium uppercase tracking-wider">
              Company
            </h6>
            <ul className="space-y-2">
              {data.company.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.href}
                    className="lg:text-lg text-sm text-gray-400 max-w-xs leading-relaxed"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <div className="bg-white text-black cursor-pointer hover:scale-105 transition-transform delay-100">
              <Button>Contact Us</Button>
            </div>
            <h6 className="text-md font-medium uppercase tracking-wide">
              Address
            </h6>
            <p className=" lg:text-lg text-sm text-gray-400 max-w-xs leading-relaxed">
              <strong>Studio:</strong> Nyabinghi street, Kazo, Kampala, Uganda{" "}
              <br />
              <br />
              <strong>Office & Shop:</strong> 36 Kyadondo road, Kampala, Uganda
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 IGC FASHION AFRICA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
