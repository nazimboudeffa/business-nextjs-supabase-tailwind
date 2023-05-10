function Modal ({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === 'arround') onClose()
    }
    if (!visible) return null
    return (
        <>
        <div id="arround" onClick={(e)=>handleOnClose(e)} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-72">
            <h1 className="font-semibold text-center text-xl text-gray-700">
            Settings
            </h1>
            <p className="text-center text-gray-700 mb-5">Set your new settings</p>

            <div className="flex flex-col">
            <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="New Email"
                disabled
            />
            <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Phone number"
                disabled
            />
            </div>
            <div className="text-center">
            <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={()=>onClose()} >
                Save
            </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Modal