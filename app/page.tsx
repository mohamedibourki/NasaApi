/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect } from "react"


export default function Home() {
  let api = "https://images-api.nasa.gov/search?q=moon"
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("the error is ", err)
      })
  }, [api])

  return (
    <main>
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp"
          alt="Nasa's Logo"
          title="Nasa"
        />
        <h1>
          NASA Image and
          <br />
          Video Library
        </h1>
      </header>
      <section>
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </section>
    </main>
  )
}
