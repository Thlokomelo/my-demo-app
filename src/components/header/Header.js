import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Cases", href: "#" },
  { name: "Contact", href: "#" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-hero-pattern">
        <header className="absolute inset-x-0 top-0 z-50 bg-primary-indigo w-full">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="32"
                  viewBox="0 0 100 32"
                  fill="none"
                >
                  <path
                    d="M4.72913 17.32L11.2342 31.2436C11.4294 31.6614 12.0241 31.6597 12.2168 31.2408L18.6728 17.2099C18.8638 16.7948 18.8638 16.317 18.6728 15.902L12.2168 1.87111C12.0241 1.45223 11.4294 1.45049 11.2342 1.86825L4.72913 15.7919C4.50289 16.2761 4.50289 16.8358 4.72913 17.32Z"
                    fill="white"
                  />
                  <path
                    d="M21.5182 4.59376L20.4816 6.81251C20.3314 7.13412 20.3303 7.50555 20.4787 7.82802L23.9728 15.4218C24.1201 15.7421 24.1201 16.1107 23.9728 16.431L20.4787 24.0248C20.3303 24.3473 20.3314 24.7187 20.4816 25.0403L21.5182 27.2591C21.6688 27.5814 22.1277 27.5801 22.2764 27.2568L27.2577 16.431C27.405 16.1107 27.405 15.7421 27.2577 15.4218L22.2764 4.59596C22.1277 4.27276 21.6688 4.27142 21.5182 4.59376Z"
                    fill="white"
                  />
                  <path
                    d="M28.8864 22.5L32.8864 15.5L28.8864 8.50001L37.9716 9.34617C38.9849 9.34617 39.8206 9.4944 40.4787 9.79088C41.1368 10.0833 41.6269 10.478 41.9489 10.9748C42.2708 11.4676 42.4318 12.0144 42.4318 12.6154C42.4318 13.1442 42.3206 13.5809 42.098 13.9255C41.8802 14.27 41.5914 14.5425 41.2315 14.7428C40.8764 14.9431 40.4905 15.0914 40.0739 15.1875V15.3077C40.5189 15.3317 40.9664 15.464 41.4162 15.7043C41.866 15.9447 42.2424 16.2893 42.5455 16.738C42.8485 17.1867 43 17.7356 43 18.3846C43 19.0016 42.8343 19.5565 42.5028 20.0493C42.1714 20.5421 41.6482 20.9327 40.9332 21.2212C40.2183 21.5096 39.2879 21.6539 38.142 21.6539L28.8864 22.5ZM33.6477 20.3317H38.142C39.2926 20.3317 40.1094 20.1434 40.5923 19.7668C41.08 19.3862 41.3239 18.9255 41.3239 18.3846C41.3239 17.968 41.1984 17.5833 40.9474 17.2308C40.6965 16.8742 40.339 16.5898 39.875 16.3774C39.411 16.1611 38.8617 16.0529 38.2273 16.0529H34.6477L33.6477 20.3317ZM34.6477 14.7548H37.9148C38.4451 14.7548 38.9233 14.6667 39.3494 14.4904C39.7803 14.3141 40.1212 14.0657 40.3722 13.7452C40.6278 13.4247 40.7557 13.0481 40.7557 12.6154C40.7557 12.0745 40.5331 11.6158 40.0881 11.2392C39.643 10.8586 38.9375 10.6683 37.9716 10.6683H33.6477L34.6477 14.7548Z"
                    fill="white"
                  />
                  <path
                    d="M44.8942 21.6539V9.34617H50.809C51.9453 9.34617 52.8781 9.51043 53.6072 9.83895C54.3364 10.1635 54.8762 10.6102 55.2266 11.1791C55.5769 11.748 55.7521 12.395 55.7521 13.1202C55.7521 13.8454 55.5769 14.4884 55.2266 15.0493C54.8762 15.6102 54.3388 16.0509 53.6144 16.3714C52.8899 16.6879 51.9643 16.8462 50.8374 16.8462H46.8601V15.5H50.7805C51.5571 15.5 52.1821 15.4039 52.6555 15.2115C53.1338 15.0192 53.4794 14.7468 53.6925 14.3942C53.9103 14.0377 54.0192 13.613 54.0192 13.1202C54.0192 12.6274 53.9103 12.1967 53.6925 11.8281C53.4747 11.4595 53.1267 11.1751 52.6484 10.9748C52.1702 10.7704 51.5381 10.6683 50.7521 10.6683H47.6555V21.6539H44.8942ZM52.7408 16.125L56.3203 21.6539H54.2749L50.7521 16.125H52.7408Z"
                    fill="white"
                  />
                  <path
                    d="M59.2837 21.6539H56.4371L61.7781 9.34617H64.5962L69.9371 21.6539H68.0906L63.744 11.2933H63.6303L59.2837 21.6539ZM59.9656 16.8462H67.4087V18.1683H59.9656V16.8462Z"
                    fill="white"
                  />
                  <path
                    d="M82.7369 9.34617V21.6539H81.0323L73.1062 11.9904H72.9641V21.6539H70.2028V9.34617H72.9073L80.8619 19.0337H81.0039V9.34617H82.7369Z"
                    fill="white"
                  />
                  <path
                    d="M89.75 21.6539H84.2614V9.34617H89.9489C91.3599 9.34617 92.5672 9.59256 93.571 10.0853C94.5748 10.5741 95.3442 11.2773 95.8793 12.1947C96.4143 13.1082 96.6818 14.2019 96.6818 15.476C96.6818 16.758 96.4119 17.8618 95.8722 18.7873C95.3324 19.7087 94.5464 20.4179 93.5142 20.9147C92.482 21.4075 91.2273 21.6539 89.75 21.6539ZM87.0227 20.3317H89.6364C90.839 20.3317 91.8357 20.1354 92.6264 19.7428C93.4171 19.3502 94.0066 18.7913 94.3949 18.0661C94.7831 17.341 94.9773 16.4776 94.9773 15.476C94.9773 14.4824 94.7855 13.627 94.402 12.9099C94.0185 12.1887 93.4456 11.6358 92.6832 11.2512C91.9209 10.8626 90.9716 10.6683 89.8352 10.6683H87.0227V20.3317Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-indigo shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's Talk
              </a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="32"
                    viewBox="0 0 100 32"
                    fill="none"
                  >
                    <path
                      d="M4.72913 17.32L11.2342 31.2436C11.4294 31.6614 12.0241 31.6597 12.2168 31.2408L18.6728 17.2099C18.8638 16.7948 18.8638 16.317 18.6728 15.902L12.2168 1.87111C12.0241 1.45223 11.4294 1.45049 11.2342 1.86825L4.72913 15.7919C4.50289 16.2761 4.50289 16.8358 4.72913 17.32Z"
                      fill="white"
                    />
                    <path
                      d="M21.5182 4.59376L20.4816 6.81251C20.3314 7.13412 20.3303 7.50555 20.4787 7.82802L23.9728 15.4218C24.1201 15.7421 24.1201 16.1107 23.9728 16.431L20.4787 24.0248C20.3303 24.3473 20.3314 24.7187 20.4816 25.0403L21.5182 27.2591C21.6688 27.5814 22.1277 27.5801 22.2764 27.2568L27.2577 16.431C27.405 16.1107 27.405 15.7421 27.2577 15.4218L22.2764 4.59596C22.1277 4.27276 21.6688 4.27142 21.5182 4.59376Z"
                      fill="white"
                    />
                    <path
                      d="M28.8864 22.5L32.8864 15.5L28.8864 8.50001L37.9716 9.34617C38.9849 9.34617 39.8206 9.4944 40.4787 9.79088C41.1368 10.0833 41.6269 10.478 41.9489 10.9748C42.2708 11.4676 42.4318 12.0144 42.4318 12.6154C42.4318 13.1442 42.3206 13.5809 42.098 13.9255C41.8802 14.27 41.5914 14.5425 41.2315 14.7428C40.8764 14.9431 40.4905 15.0914 40.0739 15.1875V15.3077C40.5189 15.3317 40.9664 15.464 41.4162 15.7043C41.866 15.9447 42.2424 16.2893 42.5455 16.738C42.8485 17.1867 43 17.7356 43 18.3846C43 19.0016 42.8343 19.5565 42.5028 20.0493C42.1714 20.5421 41.6482 20.9327 40.9332 21.2212C40.2183 21.5096 39.2879 21.6539 38.142 21.6539L28.8864 22.5ZM33.6477 20.3317H38.142C39.2926 20.3317 40.1094 20.1434 40.5923 19.7668C41.08 19.3862 41.3239 18.9255 41.3239 18.3846C41.3239 17.968 41.1984 17.5833 40.9474 17.2308C40.6965 16.8742 40.339 16.5898 39.875 16.3774C39.411 16.1611 38.8617 16.0529 38.2273 16.0529H34.6477L33.6477 20.3317ZM34.6477 14.7548H37.9148C38.4451 14.7548 38.9233 14.6667 39.3494 14.4904C39.7803 14.3141 40.1212 14.0657 40.3722 13.7452C40.6278 13.4247 40.7557 13.0481 40.7557 12.6154C40.7557 12.0745 40.5331 11.6158 40.0881 11.2392C39.643 10.8586 38.9375 10.6683 37.9716 10.6683H33.6477L34.6477 14.7548Z"
                      fill="white"
                    />
                    <path
                      d="M44.8942 21.6539V9.34617H50.809C51.9453 9.34617 52.8781 9.51043 53.6072 9.83895C54.3364 10.1635 54.8762 10.6102 55.2266 11.1791C55.5769 11.748 55.7521 12.395 55.7521 13.1202C55.7521 13.8454 55.5769 14.4884 55.2266 15.0493C54.8762 15.6102 54.3388 16.0509 53.6144 16.3714C52.8899 16.6879 51.9643 16.8462 50.8374 16.8462H46.8601V15.5H50.7805C51.5571 15.5 52.1821 15.4039 52.6555 15.2115C53.1338 15.0192 53.4794 14.7468 53.6925 14.3942C53.9103 14.0377 54.0192 13.613 54.0192 13.1202C54.0192 12.6274 53.9103 12.1967 53.6925 11.8281C53.4747 11.4595 53.1267 11.1751 52.6484 10.9748C52.1702 10.7704 51.5381 10.6683 50.7521 10.6683H47.6555V21.6539H44.8942ZM52.7408 16.125L56.3203 21.6539H54.2749L50.7521 16.125H52.7408Z"
                      fill="white"
                    />
                    <path
                      d="M59.2837 21.6539H56.4371L61.7781 9.34617H64.5962L69.9371 21.6539H68.0906L63.744 11.2933H63.6303L59.2837 21.6539ZM59.9656 16.8462H67.4087V18.1683H59.9656V16.8462Z"
                      fill="white"
                    />
                    <path
                      d="M82.7369 9.34617V21.6539H81.0323L73.1062 11.9904H72.9641V21.6539H70.2028V9.34617H72.9073L80.8619 19.0337H81.0039V9.34617H82.7369Z"
                      fill="white"
                    />
                    <path
                      d="M89.75 21.6539H84.2614V9.34617H89.9489C91.3599 9.34617 92.5672 9.59256 93.571 10.0853C94.5748 10.5741 95.3442 11.2773 95.8793 12.1947C96.4143 13.1082 96.6818 14.2019 96.6818 15.476C96.6818 16.758 96.4119 17.8618 95.8722 18.7873C95.3324 19.7087 94.5464 20.4179 93.5142 20.9147C92.482 21.4075 91.2273 21.6539 89.75 21.6539ZM87.0227 20.3317H89.6364C90.839 20.3317 91.8357 20.1354 92.6264 19.7428C93.4171 19.3502 94.0066 18.7913 94.3949 18.0661C94.7831 17.341 94.9773 16.4776 94.9773 15.476C94.9773 14.4824 94.7855 13.627 94.402 12.9099C94.0185 12.1887 93.4456 11.6358 92.6832 11.2512C91.9209 10.8626 90.9716 10.6683 89.8352 10.6683H87.0227V20.3317Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-indigo shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Let's Talk
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className=" max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Live with Confidence
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                José Mourinho brings confidence to pan-African Sanlam campaign.
              </p>
              <div className="mt-10 flex items-left justify-left gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-primary-indigo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
