function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }
  
  function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
  }
  
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);