import Header from "../header";
import Card from "../card"
import Info from '../api/api'
import { Datacontext, RegionContext, SearchContext, SfContext, WidthContext } from "../context/context";
import { CountryContext } from "../context/context";
import { VisibleContext } from "../context/context";
import { useState } from "react";
const Home = () => {
  // console.log("home vaar vaar")
  const [region, setregion] = useState(null);
  const [country, setcountry] = useState(null);
  const [visibility, setvisibility] = useState('hidden')
  const [visibility_sf, setvisibility_sf] = useState('block')
  const [width, setwidth] = useState('w-[90%]');
  const [selected_country,setselected_country] = useState(null)
const [data,setdata] = useState(Info)

  return (<>
    <section className="  text-white bg-[#1A2B3A] font-nunito-sans ">
      <Datacontext.Provider value={{data,setdata}}>
<SearchContext.Provider value={{selected_country,setselected_country}}>
      <SfContext.Provider value={{ visibility_sf, setvisibility_sf }} >
        <WidthContext.Provider value={{ width, setwidth }} >
          <VisibleContext.Provider value={{ visibility, setvisibility }}>
            <CountryContext.Provider value={{ country, setcountry }}>
              <RegionContext.Provider value={{ region, setregion }}>
             <div className="">
             <Header />
             </div>
                <div className="">
                  <Card />
                </div>
              </RegionContext.Provider>
            </CountryContext.Provider>.
          </VisibleContext.Provider>
        </WidthContext.Provider>
      </SfContext.Provider>
      </SearchContext.Provider>
      </Datacontext.Provider>
    </section>

  </>)
}

export default Home;