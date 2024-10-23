const navigation = {
    company: [
      { name: 'Home', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Brand Principles', href: '#' },
      { name: 'Services', href: '#' },
      { name: 'Shop', href: '#' },
      { name: 'Fashion Cypher', href: '#' },
      { name: 'Kwetu Kwanza', href: '#' },
    ],
    ['follow us']: [
      { name: 'Newsletter', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
    contact: [
      { name: 'igccommunityfashion@gmail.com', href: '#' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white z-10" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
             <h2 className="font-bold leading-6 text-gray-600">IGC Studios</h2>
              <p className="text-sm leading-6 text-gray-600">
                PO BOX 164 304
              </p>
              <p className="text-sm leading-6 text-gray-600">
                KAMPALA GPO
              </p>
              <p className="text-sm leading-6 text-gray-600">
                Uganda
              </p>

            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation["follow us"].map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.contact.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">&copy; 2024 IGC FASHION AFRICA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  