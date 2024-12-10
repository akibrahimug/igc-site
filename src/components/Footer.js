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
    address: [
      { name: 'P. O. Box 123', href: '#' },
      { name: 'KAMPALA', href: '#' },
      { name: 'UGANDA', href: '#' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-black-950 text-white z-10" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-2 lg:px-8 lg:pt-16">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0 text-center">
            <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">IGC Studios</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.address.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation["follow us"].map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          <div className="mt-10 flex justify-center">
            <p className="text-xs leading-5 text-gray-500">&copy; 2024 IGC FASHION AFRICA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }