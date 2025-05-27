import "./App.css";
// import Content from "./components/Contents/content";
// import Destination from "./components/Destination/destination";
// import Gallery from "./components/Gallery/gallery";
// import Footer from "./components/Footer/footer";

import Home from "./page/Home/Home";
import Trip from "./page/Trip/trip";
import Services from "./page/Services/services";
import PicsGallery from "./page/PicsGallery/PicsGallery";
import Blog from "./page/Blog/blog";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/header";

const App = () => {
  const user = {
    name: "John Doe",
    email: ""
  }
  return (
    <div>
      <BrowserRouter>
       <Header userData={user}/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/services" element={<Services />} />
          <Route path="/PicGallery" element={<PicsGallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

      {/*
      <Content />
      <Destination />
      <Gallery />
      <Footer /> */}
    </div>
  )
}

export default App