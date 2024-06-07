import Header from "./pages/header";
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Footer from './pages/footer'
import './landingPage.css'

const LandingPage= () => {
  return (
    <div className='bg-[#0F011A] w-screen h-screen font-nunito text-white overflow-x-hidden'>
      <Header></Header>
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3>
      <Page4></Page4>
      <Page5></Page5>
      <Footer></Footer>
    </div>
  )
};
export default LandingPage;