import Header from "../components/header/Header"
import About from "../components/about/about"
import Content from "../components/content/content"
// import History from "../components/history/history"
import Catalog from "../components/catalog/catalog"

export default function MainPage() { 
return (<>
  <Header />
  <About />
  <Content />
  {/* <History /> */}
  <Catalog />
</>)


}