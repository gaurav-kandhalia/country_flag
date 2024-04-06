
import { useState } from "react";
import { useContext } from "react";
import { CountryContext } from "./context/context";
import { VisibleContext } from "./context/context";
import { SfContext } from "./context/context";
import Back from "./back";
import { SearchContext } from "./context/context";
const Search = () => {

    const { country,setcountry } = useContext(CountryContext);
      const { visibility, setvisibility } = useContext(VisibleContext);
    const { visibility_sf, setvisibility_sf } = useContext(SfContext);
   const {setselected_country} = useContext(SearchContext)
    const handleKey = (event) => {
        if (event.key == "Enter") {
           setselected_country(event.target.value)
            setvisibility_sf('hidden')

            setvisibility('block');
}
    }

    return (
        <>

<div className="">
<div className={`flex w-[90%] bg-[#2b3945] mt-8 mx-auto sm:mx-0 px-10 py-3 gap-6 rounded-md shadow-custom ${visibility_sf} sm:mt-0`}>

<div className=""><i className="fa-solid fa-magnifying-glass"></i></div>
<div className=""><input onChange={(e) => setcountry(e.target.value)} onKeyPress={handleKey} type="text" name="country" placeholder="Search for a country" className="bg-[#2b3945] focus:outline-none text-[14px] font-nunito-sans placeholder:text-white placeholder:text-[14px] placeholder:font-[400] " /></div>
</div>
</div>

            <div className={` w-[75%] mx-auto ${visibility} mt-8 font-[300] `}>
                <VisibleContext.Provider value={{ visibility, setvisibility }}>
                    <SfContext.Provider value={{ visibility_sf, setvisibility_sf }}>
                        <Back></Back>
                    </SfContext.Provider>
                </VisibleContext.Provider>



            </div>
        </>
    )
}

export default Search;