// const generateQR = () =>{document.querySelector(".qrImage").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + document.querySelector(".qrText");}





const generateQR = () => {
    
    const qrText = $(".qrText").val();

      if (qrText.length > 0) {

       $(".qrImage").attr("src", 
       `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`);

       $(".imageBox").addClass("show-img");

        setTimeout(() => {
            $(".qrImage").attr("src", "");$(".qrText").val("");$(".imageBox").removeClass("show-img"); 
             
            // $(".display").css("display", "flex");
            // setTimeout(() => {
            // $(".display").css("display", "none");
            // }, 2000); 

        }, 10000);
    }
    else
    {
        $(".qrText").addClass("error");

        setTimeout(()=>
        {
            $(".qrText").removClass("error")
        },2000);
    }

};



