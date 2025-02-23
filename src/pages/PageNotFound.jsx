import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <section class="bg-green-400 min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-700">
              404
            </h1>
            <p class="mb-4 text-2xl tracking-tight font-bold text-white md:text-3xl">
              Page Not Found.
            </p>
            <p class="mb-4 text-lg font-semibold text-white">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <a
              href="/"
              class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
