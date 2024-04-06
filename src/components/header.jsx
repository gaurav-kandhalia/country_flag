import { useState } from "react";
import Filter from './filter'
import { VisibleContext } from "./context/context";

import Search from './search'
import Nav from './nav'
const Header = () => {

    return (
        <>


            <Nav />

          <div className=" sm:mt-6 sm:w-[90%] mx-auto sm:flex sm:justify-between">
         <div className="">
         <Search />
         </div>

<div className=" flex justify-center ">
    <Filter />
</div> 
          </div>


        </>
    )
}



export default Header;