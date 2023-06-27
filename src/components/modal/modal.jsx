import "./modal.css"


function Modal({isClose  , setIsColse}) {
    return ( 
        <>
            <div 
            onClick={()=>setIsColse(true)}
            className={isClose ? "modal_wrapper_none" :"modal_wrapper"}>
                <div className="modalInfo" onClick={(e)=>e.stopPropagation()}>
                   <button onClick={()=>setIsColse(true)}>X</button> 
                   <div className="form_Wrapper" >
                        <form action="">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <button>Send</button> 
                        </form>
                   </div>
                </div>
            </div>
        
        </>
    );
}

export default Modal;