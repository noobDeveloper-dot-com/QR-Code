import { useState, useEffect, useRef } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"


function Api_Call(){
    const[referenceNum, setReferenceNum] = useState("")
    const[selectedData, setSelectedData] = useState()
    const[scanResult, setScanResult] = useState()
    const apiCallBtnRef = useRef()

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height:250
            },
            fps:5,
          })
        
          scanner.render(success, error)
        
          function success(result){
            scanner.clear()
            setScanResult(result)
            setReferenceNum(result)
            setTimeout(()=>{
                apiCallBtnRef.current.click()
            }, 200)
          }
          function error(err){
            console.log(err)
          }
    },[])

    function fetchData(){
        console.log(referenceNum)
        if(!referenceNum){
           alert('Please enter a reference number')
            return
        }
 fetch(`https://673adcd2339a4ce445196d93.mockapi.io/api/v1/users`)
    .then((resp)=>{
        return resp.json()

    })
    .then((parseData)=>{
      const selectedDataObj = parseData.find(({referenceNo})=>{
        return referenceNo === referenceNum
    }
    
   
)
        
        if(!selectedDataObj){
            setSelectedData(null)
            return
        }
       setSelectedData(selectedDataObj)
})}

  

    return (
        <>
         <div className="ref-wrapper flexB">
          <input className="referenceNo" value={referenceNum} type="text" onChange={(e)=>{setReferenceNum(e.target.value)}}/>
          <button className="api_call_btn" ref={apiCallBtnRef} onClick={fetchData}>Submit</button>
         </div>
         <div className="displayData">
            {selectedData? <div>
                <p>Product name: {selectedData.productName}</p>
                <br/>
                <p>Product info: {selectedData.description}</p>
            </div>: <p>Data Not Found</p>}
         </div>
         <div id="reader"></div>
</>
        
    )
}
export default Api_Call