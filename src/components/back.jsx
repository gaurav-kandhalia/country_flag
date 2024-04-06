import {  Datacontext, SfContext} from "./context/context";
import { useContext } from "react";
import { VisibleContext } from "./context/context";
import { WidthContext } from "./context/context";

import Info from './api/api'
const Back = ()=>{

    const { visibility_sf,setvisibility_sf} = useContext(SfContext)
    const {visibility,setvisibility} = useContext(VisibleContext);
const {data,setdata} = useContext(Datacontext)
    const {width,setwidth} = useContext(WidthContext);
    const back= ()=>{
setdata(Info)
       setwidth('w-[90%]')
    console.log("width")
setvisibility_sf(()=>{
    return 'block'
})
setvisibility(()=>{
    return 'hidden'
})
console.log("visiblity sf",visibility_sf)




    }
    return (
        <>
<div className="flex w-[100px] p-1  bg-[#2b3945] justify-center gap-3 shadow-custom cursor-pointer" onClick={back}>
    <div><i className="fa-solid fa-arrow-left"></i></div>
<div><p>Back</p></div>
</div>
        </>
    )
}

export default Back;