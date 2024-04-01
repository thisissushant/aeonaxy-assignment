import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Individual", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Enterprise", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Calendaly Logo"
                  />
                </div>
                <div className="hidden sm:ml-4 sm:block  items-center  ">
                  <div className="flex space-x-4 items-center  ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Button variant="outline" className="ml-1 bg-white border-none">
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="ml-1 bg-blue-500 text-white"
                >
                  Get Started
                </Button>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
