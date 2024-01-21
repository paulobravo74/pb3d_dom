window.onload = function() {

    /*
    let element = document.getElementById("portfolio");
    let element_text = "Paulo";
    //element.innerHTML = testText;
    
    let testText = function(word) {
        element.innerHTML = word;
    }
    
    testText("hello");
    */




   let album01 = document.getElementById("album01");
   
   
   const scale = () => {
       album01.style = "albumScale";
    };
    
    album01.addEventListener("mouseover", scale);
    console.log("MainJS")

   

/*

   //-------- Portfolio ---------
      
   let portfolio = [
       {
           architect: "SM Architecture",
           local: "Fernão Ferro - Portugal",
           software: "3D Studio Max - Corona - Photshop",
           images: ["../img/SA_FF/01_exterior.jpg", "../img/SA_FF/02_exterior.jpg"]
           
        },
        {
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/RA_Az/RA_Az_01.jpg", "../img/RA_Az/RA_Az_02.jpg", "../img/RA_Az/RA_Az_03.jpg"]
        }
    ];
    
    
    
    
    
    
    document.body.append("Architect: " + portfolio[0].architect); 
    
    let albumID = 1;
    
    let albumImages = function() {

        for (i = 0; i < portfolio[albumID].images.length; i++) {
            
            let element_img = document.createElement("img");
            element_img.src = portfolio[albumID].images[i];
            element_img.width = "300";
            document.body.append(element_img);
        }
        
        
    };

    albumImages();
    
    console.log("Length of array is " + portfolio[1].images.length);
    console.log(portfolio);
    
  */  
    

    
    
    
}
