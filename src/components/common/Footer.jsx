import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container padding-16 light-grey center">
      <p>Powered by <Link to="/"><span className="text-teal"> QuickCredit | Copyright &copy; Andela 2019
      </span></Link></p>
    </footer>
  );
}
