function generate(){

    let text = document.getElementById("qr-text").value;
    let qrImage = document.getElementById("img-qr");
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+text;

    if(text === "")
    {
        alert("enter text or URL")
    }else{
    qrImage.src = apiUrl;
    qrImage.style.border="1px solid rgb(176, 176, 176)";
    qrImage.style.borderRadius = "0.5em";
    qrImage.style.padding="0.5em";
    }

}