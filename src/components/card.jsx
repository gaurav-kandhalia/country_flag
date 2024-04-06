import { useContext, useEffect } from 'react';
import { RegionContext } from './context/context';
import { CountryContext } from './context/context';
import { VisibleContext } from './context/context';
import { WidthContext } from './context/context';
import { useState } from 'react';
import Info from './api/api';
import { SearchContext } from './context/context';
import { SfContext } from './context/context';
import { Datacontext } from './context/context';

const Card = () => {

    let background = "bg-[#2b3945]";
    let shadow = "shadow-custom";
    let img_shadow = "";
    // const [data, setdata] = useState(Info);
    
    const {data,setdata} = useContext(Datacontext)
    const { visibility, setvisibility } = useContext(VisibleContext);

    const { width, setwidth } = useContext(WidthContext);
    const {selected_country} = useContext(SearchContext);
    const {region} = useContext(RegionContext);
    const {country,setcountry} = useContext(CountryContext);
      const {visibility_sf, setvisibility_sf} = useContext(SfContext)
    const [continent,setContinent] = useState()
    const searchHandler=()=>{
     if(selected_country){
        console.log("selected has value country ----",selected_country)
  
        const matched_data = Info && Info.filter((item)=>{
            if(item.name.common.toLowerCase() ===  selected_country.toLowerCase()){
                return item.name.common;
            }
        })
        if(matched_data.length>0){
            setdata(matched_data);
        }else{
    
            setvisibility('hidden')
            setvisibility_sf('block')
            setdata(Info)
        }
        
     }
    } 


    const inputHandler = (country,func)=>{
   
        
  if(country){
// setdata((prev)=>Info && Info.filter((item)=>{
//     const lowercase1 = item.name.common.toLowerCase();
//     const lowercase2 = country.toLowerCase();
//     if(lowercase1.includes(lowercase2)){
//             return item.name.common.toLowerCase().includes(country.toLowerCase())
//            }

// }))
const input_data = Info && Info.filter((item)=>{
    const lowercase1 = item.name.common.toLowerCase();
    const lowercase2 = country.toLowerCase();
    if(lowercase1.includes(lowercase2)){
            return item.name.common.toLowerCase().includes(country.toLowerCase())
           }

})

console.log(input_data);

    setdata(input_data)
    if(input_data.length==0){
        setdata(Info)
    }

  }
 


    }

    const regionHandler = ()=>{
        if (region) {
            setdata((prev)=> Info && Info.filter((item) => {
                if (item.region == region) {
                    return item.region;
                }
            }))
          
        } else {
            console.log("im null", region)
        }
    
    }

    useEffect(()=>{
     
        regionHandler()
    },[region])

useEffect(()=>{
    inputHandler(country);
},[country])

useEffect(()=>{
    searchHandler(selected_country)
},[selected_country]);
    return (
        <>
            <section className="overflow-auto ">
                <div className="w-[75%] mx-auto grid grid-cols-1   sm:w-[90%] sm:gap-10 sm:grid-cols-3 lg:grid-cols-4">
                    {data && data.map((item, index) => (
                        <div className={`${shadow} mt-10    rounded-md ${background} `} key={index}>
                            <div className="">
                                <img src={item.flags.png} alt="" className={`h-[200px] w-full border-b-0 ${img_shadow} sm:h-[140px] md:h-[150px]`} />
                            </div>

                            <div className={`mx-auto  border-red-700 ${width}`}>
                                <div className='mt-10 text-[16px] font-nunito-sans font-[800] text-white sm:mt-5 md:mt-10'>
                                    <p>{item.name.common}</p>
                                </div>

                                <div className='  mt-4 sm:mt-3 md:mt-4 font-nunito-sans font-[600]'>
                                    {(() => {
                                        const object_name = item.name.nativeName;
                                        if (object_name && typeof object_name === 'object') {
                                            const commonNames = Object.values(object_name).map(obj => obj.common);
                                            return <p className={`${visibility}`}>Native Name : {commonNames[0]}</p>;
                                        } else {
                                            return [];
                                        }
                                    })()}
                                    <p className="mt-2 ">Population : {item.population}</p>
                                    <p className="mt-2">Region : {item.region}</p>
                                    <p className={`${visibility} mt-2`}>Sub Region : {item.subregion}</p>
                                    <p className={`mt-2`}>Capital : {item.capital}</p>
                                </div>

                                <div className='mt-6 b'>
                                    {(() => {
                                        const object_name = item.currencies;
                                        if (object_name && typeof object_name === 'object') {
                                            const commonNames = Object.values(object_name).map(obj => obj.name);
                                            return <p className={`${visibility}`}>Currencies : {commonNames[0]}</p>;
                                        } else {
                                            return [];
                                        }
                                    })()}
                                    {(() => {
                                        if (item && item.languages) {
                                            const languages = Object.values(item.languages);
                                            let lang = languages.toString();
                                            lang.split(/(?=[A-Z][a-z])/);
                                            return <p className={`${visibility}`}>Languages : {lang}</p>;
                                        } else {
                                            return null;
                                        }
                                    })()}
                                    <div className={`py-6 ${visibility}`}>
                                        <div><p>Border countries:</p></div>
                                        <div className='flex flex-wrap gap-5 mt-3'>
                                            {item && item.borders && item.borders.map(country => (
                                                <div className='shadow-custom text-[14px] font-[600] bg-[#2b3945] px-4'>
                                                    <p>{country}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Card;
