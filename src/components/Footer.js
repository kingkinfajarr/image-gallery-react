import React from "react";

export default function Footer() {
  return (
    <footer className="font-semibold text-center my-10">
      <p className="flex justify-center">
        Make with &nbsp;
        <span className="text-red-600 flex">
          <img src="assets/heart.png" alt="" className="w-6 h-6 flex" />
        </span>{" "}
        &nbsp; by &nbsp;
        <a
          href="http://github.com/kingkinfajarr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          Kingkin Fajar
        </a>
      </p>
      <p>
        with &nbsp;
        <a
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          React JS
        </a>
        {", "}
        <a
          href="http://merakiui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          Meraki UI
        </a>{" "}
        and{" "}
        <a
          href="http://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          Tailwind CSS
        </a>
      </p>
    </footer>
  );
}
