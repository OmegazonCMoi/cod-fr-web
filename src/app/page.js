"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "./logo.png";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Black Ops", href: "#cheatTitle" },
  { name: "Modern Warfare", href: "#modernWarfareTitle" },
  { name: "Discord", href: "https://discord.gg/cod-fr" },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-950" id="home">
      <header
        className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900 border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Global"
          className="flex mx-auto justify-center p-6 lg:px-8"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  alt="Logo"
                  src={Logo}
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl py-24 sm:py-32 lg:py-52">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl my-2"
              style={{
                backgroundImage: "linear-gradient(to bottom, white, #333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1.2",
              }}
            >
              Best Cheats for Call of Duty
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Get the best cheats for Call of Duty: Black Ops 1, 2, 3, 4, Cold
              War and Others. The cheats are undetected and safe to use. We have
              the best unlock all, aimbot, and more for Call of Duty.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-400"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="cheats relative max-w-3xl justify-center mx-auto mt-52">
        <h2 className="text-4xl font-bold text-gray-200" id="cheatTitle">
          The Cheats
        </h2>
        <hr className="my-4" />
        <h3 className="text-3xl font-bold text-gray-100 mt-16">
          Black Ops Series
        </h3>

        {/* Black Ops 1 Cheats */}
        <h4 className="text-2xl font-bold text-gray-200 mt-10">
          Call of Duty: Black Ops 1
        </h4>
        <CheatLink
          title="Encore V8 Multiplayer"
          href="https://www.mediafire.com/file/ufaqzg46s3b6zji/EncoreV8+Multiplayer.rar/file"
        />
        <CheatLink
          title="Encore V8 Zombies"
          href="https://www.mediafire.com/file/z2l7dtufsyg2ejv/EncoreV8+Zombies.rar/file"
        />
        <CheatLink
          title="RDD"
          href="https://www.mediafire.com/file/xwtby06zuw7r8wl/RDD.zip/file"
        />
        <CheatLink
          title="Reflex V5"
          href="https://www.mediafire.com/file/kjmwm4o9jz70saa/ReflexV5.zip/file"
        />
        <CheatLink
          title="Onyx V4"
          href="https://www.mediafire.com/file/lyxfj0z0ijqfscs/OnyxV4.zip/file"
        />

        {/* Black Ops 2 Cheats */}
        <h4 className="text-2xl font-bold text-gray-200 mt-10">
          Call of Duty: Black Ops 2
        </h4>
        <CheatLink
          title="Strand V1"
          href="https://www.mediafire.com/file/ufaqzg46s3b6zji/EncoreV8+Multiplayer.rar/file"
        />
        <CheatLink
          title="Lucid V2"
          href="https://www.mediafire.com/file/z2l7dtufsyg2ejv/EncoreV8+Zombies.rar/file"
        />
        <CheatLink
          title="Eject V1"
          href="https://www.mediafire.com/file/xwtby06zuw7r8wl/RDD.zip/file"
        />
        <CheatLink
          title="Sprx V1"
          href="https://www.mediafire.com/file/kjmwm4o9jz70saa/ReflexV5.zip/file"
        />

        {/* Black Ops 3 Cheats */}
        <h4 className="text-2xl font-bold text-gray-200 mt-10">
          Call of Duty: Black Ops 3
        </h4>
        <CheatLink
          title="Shivers Mod"
          href="https://www.mediafire.com/file/ufaqzg46s3b6zji/EncoreV8+Multiplayer.rar/file"
        />
        <CheatLink
          title="BO3 Cheat"
          href="https://www.mediafire.com/file/z2l7dtufsyg2ejv/EncoreV8+Zombies.rar/file"
        />
        <CheatLink
          title="Matrix Menu"
          href="https://www.mediafire.com/file/xwtby06zuw7r8wl/RDD.zip/file"
        />

        {/* Black Ops 4 Cheats */}
        <h4 className="text-2xl font-bold text-gray-200 mt-10">
          Call of Duty: Black Ops 4
        </h4>
        <CheatLink
          title="Black Ops 4 Cheats"
          href="https://www.mediafire.com/file/ufaqzg46s3b6zji/EncoreV8+Multiplayer.rar/file"
        />
        <CheatLink
          title="Wallhack + Aimbot"
          href="https://www.mediafire.com/file/z2l7dtufsyg2ejv/EncoreV8+Zombies.rar/file"
        />

        {/* Cold War Cheats */}
        <h3 className="text-3xl font-bold text-gray-100 mt-16">
          Cold War Series
        </h3>
        <h4 className="text-2xl font-bold text-gray-200 mt-10">
          Call of Duty: Cold War
        </h4>
        <CheatLink
          title="Cold War Cheats"
          href="https://www.mediafire.com/file/ufaqzg46s3b6zji/EncoreV8+Multiplayer.rar/file"
        />
        <CheatLink
          title="Zombie Cheat"
          href="https://www.mediafire.com/file/z2l7dtufsyg2ejv/EncoreV8+Zombies.rar/file"
        />
      </div>
    </div>
  );
}

function CheatLink({ title, href }) {
  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold text-gray-400">{title}</h4>
      <a
        href={href}
        className="block text-sm text-blue-400 hover:text-blue-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {href}
      </a>
    </div>
  );
}
