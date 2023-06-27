import "./modelWind.css"


function ModalWind({isClose  , setIsColse}) {
    return ( <>
        {/* <div className="modalWrapper_none"> */}
        <div 
            className={isClose ? " modalWrapper_none" : "modalWrapper"}
            onClick={()=>setIsColse(!isClose)}
        >

            <div className="modalWind" 
                onClick={(e)=> e.stopPropagation()}
            >
                <button onClick={()=>setIsColse(!isClose)}>Close</button>
                <div>
                    <form action="">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button>Log in</button>

                    </form>
                </div>
            </div>
        </div>
    
    </> );
}

export default ModalWind;