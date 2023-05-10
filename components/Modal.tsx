function Modal ({ visible, onClose } : { visible:boolean, onClose: () => void }) {
    const handleOnClose = (e:any) => {
        if (e.target.id === 'arround') onClose()
    }
    if (!visible) return null
    return (
        <>
        <div id="arround" onClick={(e)=>handleOnClose(e)} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">Choose a Service</h1>
            <p className="text-center text-gray-700 mb-5">Set your service</p>
            
            <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={()=>onClose()} >
                Save
            </button>
        </div>
        </div>
        </>
    )
}

export default Modal