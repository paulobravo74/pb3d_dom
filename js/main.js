window.onload = function() {
    
    let portfolio = [
        {
            architect: "SM Architecture",
            local: "Fernão Ferro - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/SM_FF/01_exterior.jpg", "../img/SM_FF/02_exterior.jpg"]
           
        },
        {
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/RA_Az/RA_Az_01.jpg", "../img/RA_Az/RA_Az_02.jpg", "../img/RA_Az/RA_Az_03.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Cruz de Pau - Portugal",
            software: "3D Studio Max - Vray - Photshop",
            images: ["../img/SM_CruzPau/SM_CruzPau_01.jpg", "../img/SM_CruzPau/SM_CruzPau_02.jpg"]
        },
        {
            architect: "RA Architecture",
            local: "Amadora - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "../img/CrisAmadora/CrisAmad_01_Coz_02.jpg"]
        },
        {
            architect: "PA Architecture",
            local: "Charneca - Portugal",
            software: "3D Studio Max - Vray - Photshop",
            images: ["../img/PA_Mesquita/PA_Mesq_01.jpg", "../img/PA_Mesquita/PA_Mesq_02.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Aroeira - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/SM_Cantarelo/SM_Cant_01_Noite_01.jpg", "../img/SM_Cantarelo/SM_Cant_01_Noite_02.jpg"]
        }
    ];

   
   
    //-------- Apresentation --------

    let apresentation = document.getElementById("apresentation");

    let apresentation_image = document.createElement("img");
    apresentation_image.src = portfolio[1].images[2];
    apresentation_image.className = "apresent_Image"
    apresentation.append(apresentation_image);

    //let apresnet_Img = apresentation.createElement("img");
    //apresnet_Img.src = portfolio[0].images[1];

    //apresentation.append(apresnet_Img);



    //-------- Portfolio ---------
    
    
    
    
 for (i = 0; i < portfolio.length; i++) {
     
     let albunsID = document.getElementById("albunsID");
    albunsID.className = "albuns";

    let album = document.createElement("div");
    let albumID = i + 1;
    album.id = "albumID_0" + albumID;
    album.className = "album";
    
    albunsID.append(album);
    
    let album_image = document.createElement("img");
    album_image.className = "imgAlbum";
    
    let j = 0;
    i === 0 ? j = 1 : j = j;
    
    album_image.src = portfolio[i].images[j];
    album.append(album_image);
    
    let album_arch = document.createElement("p");
    album_arch.className = "text-center"
    album_arch.innerHTML = portfolio[i].architect;
    album.append(album_arch);
    
    let album_local = document.createElement("p");
    album_local.className = "text-center";
    album_local.innerHTML = portfolio[i].local;
    album.append(album_local);
    



    album.addEventListener("mouseover", func, false);
    function func() {
        album.setAttribute("class", "albumMouseOver");
        album.onmouseover
    }

    album.addEventListener("mouseout", func01, false);
    function func01() {
        album.setAttribute("class", "album");
    }

}

   

    

    
    
    
}
