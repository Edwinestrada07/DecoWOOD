const Header = () => {
    return (
        <div className="flex justify-center h-full "> 
            <div className="flex justify-center p-8 "> 
                <div className="flex flex-col justify-center"> 
                    <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]"> 
                        <div className="flex flex-col items-center lg:text-left text-center justify-between space-y-6 px-8"> 
                            <div className="flex flex-col items-start space-y-3"> 
                                <div className="px-10">
                                    <img src="./img/logo_nombre.png" className="h-full w-full" alt="" />
                                </div> 
                                <div className="text-3xl text-accent md:text-4xl font-bold px-5">Transformando espacios en hogares encantadores</div> 
                                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div> 
                            </div> 
                        </div> 
                        <div className=" w-80 h-35 lg:h-95 overflow-hidden ">
                            <img src="./img/logo.png" className="h-full w-full" alt="" /> 
                        </div> 
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default Header
