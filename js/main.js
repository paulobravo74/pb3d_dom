window.onload = function() {
    


    let portfolio = [
        {
            architect: "SM Architecture",
            local: "Fernão Ferro - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/SM_FF/01_exterior.jpg", "../img/SM_FF/02_exterior.jpg", "../img/SM_FF/03_exterior.jpg", "../img/SM_FF/04_exterior.jpg", "../img/SM_FF/05_exterior.jpg", "../img/SM_FF/06_exterior.jpg"]
           
        },
        {
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/RA_Az/RA_Az_01.jpg", "../img/RA_Az/RA_Az_02.jpg", "../img/RA_Az/RA_Az_03.jpg", "../img/RA_Az/RA_Az_04.jpg", "../img/RA_Az/RA_Az_05.jpg", "../img/RA_Az/RA_Az_06.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Cruz de Pau - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["../img/SM_CruzPau/SM_CruzPau_01.jpg", "../img/SM_CruzPau/SM_CruzPau_02.jpg", "../img/SM_CruzPau/SM_CruzPau_03.jpg", "../img/SM_CruzPau/SM_CruzPau_04.jpg", "../img/SM_CruzPau/SM_CruzPau_05.jpg", "../img/SM_CruzPau/SM_CruzPau_06.jpg"]
        },
        {
            architect: "RA Architecture",
            local: "Amadora - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "../img/CrisAmadora/CrisAmad_01_Coz_02.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_01.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_02.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_03.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_01.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_02.jpg", "../img/CrisAmadora/CrisAmad_03_Sala_03.jpg", "../img/CrisAmadora/CrisAmad_04_WC_01.jpg", "../img/CrisAmadora/CrisAmad_04_WC_02.jpg"]
        },
        {
            architect: "PA Architecture",
            local: "Charneca - Portugal",
            software: "3D Studio Max - Vray - Photoshop",
            images: ["../img/PA_Mesquita/PA_Mesq_01.jpg", "../img/PA_Mesquita/PA_Mesq_02.jpg", "../img/PA_Mesquita/PA_Mesq_03.jpg", "../img/PA_Mesquita/PA_Mesq_04.jpg", "../img/PA_Mesquita/PA_Mesq_05.jpg", "../img/PA_Mesquita/PA_Mesq_06.jpg", "../img/PA_Mesquita/PA_Mesq_07.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Aroeira - Portugal",
            software: "3D Studio Max - Corona - Photoshop",
            images: ["../img/SM_Cantarelo/SM_Cant_01_Noite_01.jpg", "../img/SM_Cantarelo/SM_Cant_01_Noite_02.jpg", "../img/SM_Cantarelo/SM_Cant_02_Dia_01.jpg", "../img/SM_Cantarelo/SM_Cant_02_Dia_02.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_01.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_02.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_03.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_04.jpg", "../img/SM_Cantarelo/SM_Cant_03_Sala_05.jpg"]
        }
    ];

    
    //randomSlides();
        
    
    for (i = 0; i < portfolio.length; i++) {
        createAlbuns();
    }




    //---------------------------------------------------//
    //-------------------- Slides -----------------------//
    //---------------------------------------------------//

    
    let album_slider_random_array = [];
    let album_slider_image_random_array = [];
    let number_Of_Slides = 5;


            // --------- Selection albuns ---------------
            for (i = 0; i < number_Of_Slides; i++) {
    
                const album_slider_random = Math.floor(Math.random() * portfolio.length);
                
                album_slider_random_array.push(album_slider_random);
               
                album_slider_image_random_array.push(Math.floor(Math.random() * portfolio[album_slider_random_array[i]].images.length))

                console.log("album- " + album_slider_random_array);
                console.log("imagem- " + album_slider_image_random_array);
    
            }


    
    let slider_img_Select = 0;
    
    let Slider_input_Img = function() {

        // ----------------- Foto perfil ------------------
        
        
        // ----------------- Images -----------------------
        let slider_Images = document.getElementById("slider_Images");
        let slider_Img = document.createElement("img");
        slider_Img.src = portfolio[album_slider_random_array[slider_img_Select]].images[album_slider_image_random_array[slider_img_Select]];
        slider_Img.className = ("slider_img");
        slider_Images.append(slider_Img);
        
        // ------------------ Text -----------------------
        let slider_Text = document.getElementById("slider_text_ID");
        slider_Text.innerHTML = "";
        
        let slider_Arch = document.createElement("h3");
        slider_Arch.innerText = portfolio[album_slider_random_array[slider_img_Select]].architect;
        slider_Text.append(slider_Arch);
        
        let slider_Local = document.createElement("h3");
        slider_Local.innerText = portfolio[album_slider_random_array[slider_img_Select]].local;
        slider_Text.append(slider_Local);
        
        
                console.log(portfolio[album_slider_random_array[slider_img_Select]].images[album_slider_image_random_array[slider_img_Select]]);
        
        if (slider_img_Select < album_slider_random_array.length - 1) {
            slider_img_Select++
        } else {
            slider_img_Select = 0
        }

        console.log(slider_img_Select);
        
        
        
        // -------------- Slider Indicator ---------------------
        
        let slider_Indicator = document.getElementById("slider_indicator_ID");
        slider_Indicator.innerHTML = "";
        slider_Indicator.className = "slider_indicator";
        
        
        for (i = 0; i < album_slider_random_array.length; i++) {
            
            let slider_Indicator_in = document.createElement("div");

            if (slider_img_Select === i) {
                slider_Indicator_in.className = "slider_indicator_in_active";    
            } else {
                slider_Indicator_in.className = "slider_indicator_in";
            }
            
            slider_Indicator.append(slider_Indicator_in);
            
        }
             
        
        
        slider_Images.append(slider_Indicator);
        
        
        setTimeout(Slider_input_Img, 3000);
   
    }
    
    Slider_input_Img();
    
  





    //---------------------------------------------------------------//
    //-------------------- Portfolio Function -----------------------//
    //---------------------------------------------------------------// 
    // Create albuns
    function createAlbuns() {

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
        


        // Mouse over event
        album.addEventListener("mouseover", func, false);
        function func() {
            album.setAttribute("class", "albumMouseOver");
        }

        album.addEventListener("mouseout", func01, false);
        function func01() {
            album.setAttribute("class", "album");

        }

       
        
        function showImages() {
            
            // Cria um elemento modal
            let modal = document.createElement("div");
            modal.className = "modal";
          
            // Percorre as fotos do álbum e cria elementos de imagem para cada uma
            for (let j = 0; j < portfolio[1].images.length; j++) {
              let img = document.createElement("img");
              img.src = portfolio[0].images[j];
              modal.append(img);
            }
          
            // Adiciona o elemento modal ao corpo do documento
            document.body.append(modal);

            console.log("testando");
            console.log(portfolio[3].images.length);
        }
        
        
        album.addEventListener("click", showImages, false);

    } 

    // Obter referências aos elementos do DOM
    var modal = document.getElementById("myModal");
    var btnOpenModal = document.getElementById("openModal");
    var spanCloseModal = document.getElementsByClassName("close")[0];
    let modal_content = document.getElementById("modal_content_ID");

    // Adicionar eventos aos elementos
    btnOpenModal.onclick = function() {
        modal.style.display = "flex";

        let modal_album = 4;

        let modal_arch = document.createElement("h1");
        modal_arch.innerHTML = portfolio[modal_album].architect;
        modal_arch.className = "text-center";
        modal_content.append(modal_arch);

        let modal_local = document.createElement("p");
        modal_local.innerHTML = portfolio[modal_album].local;
        modal_local.className = "text-center";
        modal_content.append(modal_local);
        
        for (i = 0; i < portfolio[modal_album].images.length; i++) {
            
            let modal_Images = document.createElement("img"); 
            modal_Images.src = portfolio[modal_album].images[i];
            modal_Images.className = "modal_images";
            modal_content.append(modal_Images);
        }

        let modal_close = document.createElement("span");
        modal_close.className = "close";
        modal_close.innerHTML = "&times;";
        modal_content.append(modal_close);
    
    }

    spanCloseModal.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


}

   

    //-----------------------------------------------------//
    //-------------------- Showreel -----------------------//
    //-----------------------------------------------------//

    let showreel_list = [
        {
            tittle: "Showreel 2008",
            link: "http://www.youtube.com/embed/mXvZ_6Mg3wk"
        },
        {
            tittle: "Showreel 2020",
            link: "http://www.youtube.com/embed/of0XUB_xKwQ"
        },
        {
            tittle: "Showreel 2021",
            link: "http://www.youtube.com/embed/SyrTpqoReJQ"
        }
    ]


    let Showreel = document.getElementById("showreel");
        //Showreel.className = "youtube";

    for (i = 0; i < showreel_list.length; i++) {

        let showreel_div = document.createElement("div");
        
        let showreel_tittle = document.createElement("p");
        showreel_tittle.innerText = showreel_list[i].tittle;
        showreel_tittle.className = "text-center"
        showreel_div.appendChild(showreel_tittle);
        
        
        let showreel_link = document.createElement("iframe");
        showreel_link.className = "youtube";
        showreel_link.src = showreel_list[i].link;
        showreel_div.appendChild(showreel_link);
        
        
        
        Showreel.append(showreel_div);
    }

};
    
    

