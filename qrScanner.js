// import { Html5QrcodeScanner } from "html5-qrcode";

const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
      width: 300,
      height: 300
    },
    fps: 20,
})
scanner.render(success, error)
function success(result){
    console.log(result)
}
function error(err){
    // console.error(err)
}