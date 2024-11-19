import { useState, useEffect } from "react"
import { QrReader } from "react-qr-reader"



function Api_Call(){
    const[referenceNum, setReferenceNum] = useState("")
    const[selectedData, setSelectedData] = useState()
    const[data,setData] = useState('No Result') 

    useEffect(()=>{
     console.log(selectedData)
    },[selectedData])

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
          <button className="api_call_btn" onClick={fetchData}>Submit</button>
         </div>
         <div className="displayData">
            {selectedData? <div>
                <p>Product name: {selectedData.productName}</p>
                <br/>
                <p>Product info: {selectedData.description}</p>
            </div>: <p>Data Not Found</p>}
         </div>
         <QrReader
           onResult={(result, error) =>{
            if(!!result){
                setData(result?.text)
            }

            if(!!error){
                console.info(error)
            }
           }}
           style={{width: '100%'}}
         />
         <p>{data}</p>
        </>
        
    )
}
export default Api_Call