import { useState } from "react";

function Modal ({ visible, onClose } : { visible:boolean, onClose: () => void }) {
    const [showInput, setShowInput] = useState(false);
    const [selectedItem, setSelectedItem] = useState('default');
    const handleChange = (e:any) => {
        setSelectedItem(e.target.value)
        console.log(e.target.value)
        if (selectedItem == 'binance'){
        //showing input
        setShowInput(true)
        }
        else{
        //need set to false if not "others", because user can change select a lot of times
        setShowInput(false)
        }
    }
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

            <select className="w-full border border-gray-300 rounded px-2 py-1 mb-5"  name="service" value={selectedItem} onChange={(e)=>handleChange(e)}>
                <option value="default">Choose a service</option>
                <option value="binance">Binance</option>
                <option value="github">GitHub</option>
            </select>
            <div className="flex justify-between items-center">
            <span className={showInput ? "block": "hidden"}>Key</span>
            <input type="text" name="key" className={showInput ? "block border border-gray-300 rounded px-2 py-1": "hidden"} />
            </div>
            <div className="flex justify-between items-center">
            <span className={showInput ? "block": "hidden"}>Secret</span>
            <input type="text" name="secret" className={showInput ? "block border border-gray-300 rounded px-2 py-1": "hidden"} />
            </div>
            <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={()=>onClose()} >
                Save
            </button>
        </div>
        </div>
        </>
    )
}

export default Modal