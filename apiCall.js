//API Call
document.querySelector('.call_API')
.addEventListener('click', (e)=> {
    e.preventDefault()
    let dataArr;
     const displayData = document.querySelector('._dataModal')  
    const refNumber = document.querySelector('.refNumber').value
if(!refNumber){
        alert('Please enter a reference Number')
        return
    }
    fetch(`https://673adcd2339a4ce445196d93.mockapi.io/api/v1/users`)
    .then((resp)=>{
        return resp.json()

    })
    .then((parseData)=>{
      const selectedData = parseData.find(({referenceNo})=>{
        return referenceNo === refNumber
    })
    if(!selectedData){
        console.log('Data not found')
        displayData.textContent = 'Data not found'
        return
    }
    console.log(selectedData)
    displayData.innerHTML=`<p>Product-Name:${selectedData.productName}</p><br> <p>Product-Details:${selectedData.description}</p>` 
    })
    .catch(err =>{
        console.log(err)
    })

})