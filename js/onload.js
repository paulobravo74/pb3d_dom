// create a couple of elements in an empty HTML page
    
    
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("Academia de Código");
    heading.appendChild(heading_text);
    heading.className = "test colorRed size";
    document.body.prepend(heading);

    let img02 = document.createElement("img");
    img02.src = "./img/02_exterior.jpg";
    img02.width = "300";
    img02.className = "imgs"
    
    let img03 = document.createElement("img");
    img03.src = "./img/03_exterior.jpg";
    img03.width = "300";
    img03.className = "imgs"
    
    document.body.append(img02, img03);


    console.log("onLoad");


