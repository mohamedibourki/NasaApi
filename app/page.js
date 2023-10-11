/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const api = `https://images-api.nasa.gov/search?q=${search}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const items = data.collection.items;

        if (items.length > 0) {
          const imageArray = items.map((item) => {
            const imgSrc = item.links && item.links[0] && item.links[0].href;
            const title = item.data && item.data[0] && item.data[0].title;
            return {
              imgSrc: imgSrc || "",
              title: title || "",
            };
          });
          setImages(imageArray);
        } else {
          setImages([]);
        }
      })
      .catch((err) => {
        console.error("the error is ", err);
      });
  };

  return (
    <main>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp"
          alt="Nasa's Logo"
          title="Nasa"
        />
        <h1>
          NASA Images
        </h1>
      </header>
      <section>
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </section>
      <section>
        <h1 id="demo2"></h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={12} key={index} sm={6} md={4}>
                <Item>
                  <img src={image.imgSrc} alt={`Image ${index}`} />
                  <p>{image.title}</p>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
    </main>
  );
}
