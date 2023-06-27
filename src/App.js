import React, { useState } from "react";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Page from "./components/Page/page";
import Footer from "./components/Footer/footer";


function App() {
  const [pages] = useState([
    {
      name: "Home",
    },
    { name: "portfolio" },
    { name: "artwork"},
    // { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
