

const Nav = ()=>{
    return (<>
    <div className="af flex justify-between p-6 bg-[#2b3945] shadow-custom">
                <div><p>Where in the world?</p></div>
                <div className="flex  gap-4 justify-center items-center">
                    <div>
                        <i className="fa-solid fa-moon text-[14px]"></i>
                    </div>
                    <div>
                        <p className="text-[14px] font-[600] font-nunito-sans ">Dark Mode</p>
                    </div>
                </div>
            </div>
    </>)
}

export default Nav;