import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from '../public/logo.png'

type Props = {};

function Header({}: Props) {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">
              Hi, {address.slice(0, 4) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}
        <p className="headerLink text-white">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
        <p className="headerLink text-white">Pricing </p>
        <p className="headerLink text-white">MBD Gemz </p>
      
        <a href="https://mbdsend.netlify.app/" className="headerLink text-white flex items-center hover:link">
            Send Crypto
          <ChevronDownIcon className="h-4" />
          </a>
        <a href="https://hey-may-ai.netlify.app/" className="headerLink text-white flex items-center hover:link">
            AI Studio
          <ChevronDownIcon className="h-4" />
        </a>
        
          <Link href="/addItem" className="text-white flex items-center hover:link">
            Add to inventory
            <ChevronDownIcon className="h-4" />
          </Link>

          <BellIcon className="text-white h-6 w-6" />
          <ShoppingCartIcon className="text-white h-6 w-6" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="h-16 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0">
          <Link href="/">
          <Image
            className="h-full w-full object-contain"
            alt="MBD Boulevard"
            src={logo}
            width={20000}
            height={20000}
          />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20">
          <p className="text-gray-100 text-sm">Shop by Category</p>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-100" />
          <input
            className="flex-1 outline-none"
            placeholder="Search for Anything"
            type="text"
          />
        </div>

        <button className="hidden sm:inline bg-purple-500 text-white px-5 md:px-10 py-2 border-2 border-black">
          Search
        </button>

        <Link href="/create">
          <button className="bg-purple-500 border-2 border-black px-5 md:px-10 py-2 text-white hover:bg-yellow-400 hover:text-white cursor-pointer">
            My Inventory
          </button>
        </Link>
      </section>

      <hr />

      <section className="flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6">
        <p className="link">Home</p>
        <p className="link">Electronics</p>
        <p className="link">Computers</p>
        <p className="link hidden sm:inline">Video Games</p>
        <p className="link hidden sm:inline">Home & Garden</p>
        <p className="link hidden md:inline">Health & Beauty</p>
        <p className="link hidden lg:inline">Collectibles and Art</p>
        <p className="link hidden lg:inline">Books</p>
        <p className="link hidden lg:inline">Music</p>
        <p className="link hidden xl:inline">Deals</p>
        <p className="link hidden xl:inline">Other</p>
        <p className="link">More</p>
      </section>
    </div>
  );
}

export default Header;
