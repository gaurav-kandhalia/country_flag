import { useContext } from "react";

import { useState } from "react";
import { RegionContext } from './context/context'
import { VisibleContext } from "./context/context";
import { SfContext } from "./context/context";
import { useEffect } from "react";
const Filter = () => {

    const [visible_region, setvisible_region] = useState('hidden');


    const { region, setregion } = useContext(RegionContext);

    const { visibility_sf } = useContext(SfContext);

    const visibility_region = () => {
        console.log("--------------visibiliy--------------")
        if (visible_region === 'hidden') {
            setvisible_region('block');
        } else {
            setvisible_region(('hidden'))
        };
    }


    const continent = (event) => {
      
        setregion(event.target.innerText)
    }


    return (
        <>
            <section className={`w-[90%] sm:mt-0 sm:w-full  ${visibility_sf} `}>
          <div className="">
          <div className="mt-10 sm:mt-0   ">
                    <div className=" mt-5 sm:mt-0  shadow-custom w-[45%] bg-[#2b3945]   px-4 py-3 flex justify-between rounded-md box-shadow-custom cursor-pointer sm:w-full gap-3 " onClick={visibility_region}>
                        <p className="font-[400] text-[14px]">Filter by region</p>
                        <p><i className="fa-solid fa-caret-down" ></i></p>
                    </div>
                
 
                </div>

                <div className=" w-[90%] mx-auto mt-1 absolute  ">
                    <div className={`w-[45%] bg-[#2b3945] px-4 text-[14px] py-3 rounded-md shadow-custom  font-nunito-sans font-[300] border-2  ${visible_region}   cursor-pointer`}>
                        <p className="mt-1" onClick={continent}>Africa</p>
                        <p className="mt-1" onClick={continent}>Americas</p>
                        <p className="mt-1" onClick={continent}>Asia</p>
                        <p className="mt-1" onClick={continent}>Europe</p>
                        <p className="mt-1" onClick={continent}>Oceania</p>


                    </div>
                </div>
          </div>
            </section>
        </>
    )
}

export default Filter;