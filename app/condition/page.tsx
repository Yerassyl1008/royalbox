import Delivery from "../components/delivery/delivery"
import Header from "../components/header/Header"
import Customer from "../components/customer/customer"

export default function Condition() { 

  return (
    <div>
      <Header
        homeButtonClassName="bg-[#466481] hover:bg-[#38556d]"
        mobileHomeButtonClassName="bg-[#38556d] hover:bg-[#2f495e]"
      />
      <Delivery />
      <Customer />
    </div>
  )



  }