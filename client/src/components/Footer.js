// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex items-center justify-start font-bold bg-laravel text-white h-24 mt-24 opacity-90 md:justify-center">
      <p className="ml-2">Copyright &copy; 2022, All Rights reserved</p>

      <a href="/create" className="absolute top-1/3 right-10 bg-black text-white py-2 px-5">
        Post Job
      </a>
    </footer>
  );
};

export default Footer;
