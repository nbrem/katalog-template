---
hide:
    - toc
    - navigation
---

<div class="div-cleanbody">
    <br>
    <h1>Bienvenue sur votre <b>plateforme Katalog</b></h1>
    <hr>
    <p style="color:#AAA; font-size: 18px; font-weight: 350;">Accèdez au <u><a href="./etc/biblioteks/home">moteur de recherche</a></u> de vos ressource, ou directement à vos <u><a href="./etc/klouds/home">espaces de stockages</a></u>.</p>
    <div class="add-choice" style="justify-content: left;">
        <a href="./etc/biblioteks/home" class="add-card">
            <div class="add-img">
                <img style="filter: opacity(50%)" src="./img/katalog_global.png"> 
            </div>
        </a>
        <a href="./etc/klouds/home" class="add-card">
            <div class="add-img">
                <img style="filter: opacity(50%)" src="https://cdn-icons-png.flaticon.com/512/3176/3176377.png">
            </div>
        </a>  
    </div>
    <br><br>
    <details style="padding:0px;border-left-width: 0;" class="ksln-info"><summary style="border-radius:0px; box-shadow: 0px 8px 13px rgba(1,1,1,0.1);"> Mieux comprendre</summary>
        <div style="text-align: center;" class="div-cleanbody">
            <h2 style="color:#A5A5A5">Katalog, <b>Kesako ?</b></h2>
            <br><br>
            <div><img id="KatalogKesako" src="./img/katalogs_kesako.png"></div>
            <br><br>
            <hr>
            <br>
            <h2 style="color:#A5A5A5">Katalog, <b>Pourquoi ?</b></h2>
            <br><br>
            <div><img id="KatalogKesako" src="./img/katalogs_why.png"></div>
            <hr>
            <br>
            <h2 style="color:#A5A5A5">Katalog, <b>Comment ?</b></h2>
            <br><br>
            <div><img id="KatalogKesako" src="./img/katalogs_how.png"></div>
        </div>
        <br>
        <div class="div-cleanbody" style="background-color:#F5F5F5; margin: 50px 0px 0px 0px; padding:25px 10px;">
            <h2>Comment créer <b>votre propre plateforme Katalog</b> ?</h2><hr style="color:white !important; width:7%; border-bottom: 10px solid var(--md-primary-fg-color);">
            <i>Un tutoriel détaillé sera bientôt mis à disposition, affaire à suivre.</i>
            <br><br>
            <a class="md-button md-button--primary" href="https://konsilion.fr/wp/contacts/" target="_blank"><span></span>Une plateforme Katalog sur mesure ?</a>
            <br><br>
        </div>
    </details>
</div>








<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">  Cette balise est faite pour adapter Internet Explorer, mais elle semble désuette en 2022-->
    <!--<meta name="description" content="csv to datatables to csv">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>



<style>  
#KatalogKesako {
    width: 95%;
    max-width: 450px;
    margin:0px;
    padding:0px;
}
    
    
.bibliotek-card {
    margin-bottom: 25px;
}
    
.bibliotek-card > h2 {
    margin-bottom: 0px;    
}
    
.top-logo {
    float:right;
    margin: 15px 5px;
    border: 1px solid #EEE;
    border-radius:5px;
    padding:10px;
    cursor: pointer;
    filter: opacity(60%)!important;
    background-color:#FCFCFC;
}
  
.top-logo:hover {
    float:right;
    border: 1px solid #EEE;
    border-radius:5px;
    padding:10px;    
    filter: opacity(100%) !important;    
}   
    
.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: .25rem; 
}

input {
  font-size: 1rem;
}

    
.bibliotek-katalogs {
  margin: 25px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  gap: 30px;
  justify-content: left;    
}    
    
.add-choice {
  margin: 25px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  gap: 30px;
  justify-content: left;      
}
    
    
#CardGrid {
  margin: 15px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  gap: 30px;
  justify-content: left;    
}


.card {
  border: 1px solid #CCC;
  background-color: #EEE;
  height: 225px;
}


    
.card > .header {
    padding: 5px 15px;
    background-color: #DDD;
    font-size: 80px;
}


.header {
  font-size: 16px;
  color: black;
  padding: 15px;
  overflow: hidden;
}
    
.img {
    text-align: center;
    border-bottom: 1px solid #CCC;
    background-color: white;
    height: 70%;
    overflow: hidden;
}
  
.img > img {
    min-width: 200px;
    max-width: 425px;
    height:100%;
    border: 1px solid #FFF;
}
    
    
    
.add-card {
  border: 1px solid #EFEFEF;
  background-color: rgba(250,250,250,0.5);
  height: 225px;
  width: auto;
  margin-left: 0px;
}
    
.add-card:hover {
  border: 1px solid #EFEFEF;
  background-color: rgba(250,250,250,1);
} 
        
    
.add-img {
    text-align: center;
    height: 100%;
    max-width: 450px;
    overflow: hidden;
}
    
.add-img > img {
    height: 75%;
    padding-top:50px;
}
    
.add-img:hover > img {
filter: grayscale(10%) !important;
}   
    
.hide {
  display: none;
}

.md-footer, h1 {
    display:block;
}
</style>
