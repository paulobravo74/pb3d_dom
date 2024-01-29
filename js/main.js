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
            images: ["../img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "../img/CrisAmadora/CrisAmad_01_Coz_02.jpg", "../img/CrisAmadora/CrisAmad_02_Quarto_01.jpg"]
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
                
                //console.log(portf_random_array.map((x) => x !== portfolio_random));
    


               
               album_slider_image_random_array.push(Math.floor(Math.random() * portfolio[album_slider_random_array[i]].images.length))

               console.log("album- " + album_slider_random_array);
               console.log("imagem- " + album_slider_image_random_array);
    
            }


    //let slider_img_Select = Math.floor(Math.random() * album_slider_random_array.length);
    //console.log("array selected- " + slider_img_Select);
    //console.log("album- " + album_slider_random_array[slider_img_Select]);
    //console.log("image- " + album_slider_image_random_array[slider_img_Select]);
    
    let slider_img_Select = 0;
    
    let Slider_input_Img = function() {
        
        
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
    //window.onload(Slider_input_Img());
    
    
    // -------------- Slider Indicator ---------------------
        
        
        
    
    


        
        
        
        //---------------------------------------------------//
        //-------------------- Slides -----------------------//
        //---------------------------------------------------//

 /*   function randomSlides() {

        let portf_random_array = [];

        createRandomSlides();

        insertRandomSlides();
        
        console.log(portf_random_array);
    
        

        function createRandomSlides () {

            // --------- Selection albuns ---------------
            for (i = 0; i < 3; i++) {
    
                const portfolio_random = Math.floor(Math.random() * portfolio.length);
                
                portf_random_array.push(portfolio_random);
                
                //console.log(portf_random_array.map((x) => x !== portfolio_random));
    
               
                // ------------ Avoid repeat album ----------------                
                if (portf_random_array[0] === portf_random_array[1]) {
                    console.log(portf_random_array + " " + i);
                    portf_random_array.pop();
                    i--;
                    console.log("iguais 0 e 1");
                
                } else if (portf_random_array[1] === portf_random_array[2] && portf_random_array[2] !== undefined || portf_random_array[0] === portf_random_array[2]) {
                    console.log(portf_random_array + " " + i);
                    portf_random_array.pop();
                    i--;
                    console.log("iguais 1 e 2, ou 0 e 2");
                };
    
            }
        }
    
        function insertRandomSlides() {

                //------------ random slide01 ---------------
            let imgSlide_01 = document.getElementById("imgSlide_01");

            let imgSlide_import_01 = document.createElement("img");
            imgSlide_import_01.src = portfolio[portf_random_array[0]].images[get_portf_img_random(0)];
            imgSlide_01.append(imgSlide_import_01);
            console.log(imgSlide_import_01.src);

            let slideArch_01 = document.getElementById("slideArch_01");
            slideArch_01.className = "slide-text"
            slideArch_01.innerHTML = portfolio[portf_random_array[0]].architect;

            let slideLocal_01 = document.getElementById("slideLocal_01");
            slideLocal_01.className = "slide-text"
            slideLocal_01.innerHTML = portfolio[portf_random_array[0]].local;


                //------------ random slide02 ---------------
            let imgSlide_02 = document.getElementById("imgSlide_02");

            let imgSlide_import_02 = document.createElement("img");
            imgSlide_import_02.src = portfolio[portf_random_array[1]].images[get_portf_img_random(1)];
            imgSlide_02.append(imgSlide_import_02);
            console.log(imgSlide_import_02.src);

            let slideArch_02 = document.getElementById("slideArch_02");
            slideArch_02.className = "slide-text"
            slideArch_02.innerHTML = portfolio[portf_random_array[1]].architect;

            let slideLocal_02 = document.getElementById("slideLocal_02");
            slideLocal_02.className = "slide-text"
            slideLocal_02.innerHTML = portfolio[portf_random_array[1]].local;

        
                //------------ random slide03 ---------------
            let imgSlide_03 = document.getElementById("imgSlide_03");

            let imgSlide_import_03 = document.createElement("img");
            imgSlide_import_03.src = portfolio[portf_random_array[2]].images[get_portf_img_random(2)];
            imgSlide_03.append(imgSlide_import_03);
            console.log(imgSlide_import_03.src);

            let slideArch_03 = document.getElementById("slideArch_03");
            slideArch_03.className = "slide-text"
            slideArch_03.innerHTML = portfolio[portf_random_array[2]].architect;

            let slideLocal_03 = document.getElementById("slideLocal_03");
            slideLocal_03.className = "slide-text"
            slideLocal_03.innerHTML = portfolio[portf_random_array[2]].local;

        }
        
        
        function get_portf_img_random(album) {
    
            return Math.floor(Math.random() * portfolio[portf_random_array[album]].images.length)
            //console.log(portfolio_image_random + " " + portfolio[portfolio_random].images[portfolio_image_random]);
        }
   
    }
*/


    //----------------------------------------------------------//
    //-------------------- Apresentation -----------------------//
    //----------------------------------------------------------//
    let apresentation = document.getElementById("apresentation_ID");
        apresentation.className = "apresentation";

    let apresentation_image = document.createElement("img");
    apresentation_image.src = portfolio[1].images[2];
    apresentation_image.className = "apresent_Image"
    apresentation.append(apresentation_image);






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

        album.addEventListener("onclick", func02, false);
        function func02() {
            album.setAttribute("class", "albumMouseOnClick");

        }
    } 

   

    //-----------------------------------------------------//
    //-------------------- Showreel -----------------------//
    //-----------------------------------------------------//

    let showreel_list = [
        {
            tittle: "Showreel 2007",
            link: "http://www.youtube.com/embed/mXvZ_6Mg3wk"
        },
        {
            tittle: "Showreel 2022",
            link: "http://www.youtube.com/embed/of0XUB_xKwQ"
        }
    ]


    let Showreel = document.getElementById("showreel");
        showreel.className = "youtube";

    for (i = 0; i < showreel_list.length; i++) {

        let showreel_div = document.createElement("div");
        
        let showreel_tittle = document.createElement("p");
        showreel_tittle.innerText = showreel_list[i].tittle;
        showreel_tittle.className = "text-center"
        showreel_div.appendChild(showreel_tittle);
        
        
        let showreel_link = document.createElement("iframe");
        showreel_link.src = showreel_list[i].link;
        showreel_div.appendChild(showreel_link);
        
        
        
        Showreel.append(showreel_div);
    }

};
    
    

