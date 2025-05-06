import "./App.css";
import Header from "./components/Header/header";
import Content from "./components/Contents/content";
import Destination from "./components/Destination/destination";
import Gallery from "./components/Gallery/gallery";
import Footer from "./components/Footer/footer";
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Destination />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App