import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import Textbook1 from './Textbook1';
import Textbook2 from './Textbook2';
import Textbook3 from './Textbook3';
import Textbook4 from './Textbook4';
import Textbook5 from './Textbook5';
import Commitment from './commitment';

export default function Home() {
 

  return (
    <div>
      <Navbar />
      <Textbook1 />
      <Commitment/>
      <Services />
      <Textbook2 />
      <Textbook3 />
      <Textbook4 />
      <Textbook5 />
      <Footer />
    </div>
  );
}
