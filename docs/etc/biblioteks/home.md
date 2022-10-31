---
hide:
    - toc
    - navigation
---



<div id="Bibliotek" class="div-cleanbody">
    <div id="BiblioteksTitle" class="biblioteks-tilte" biblioteks-tilte></div>
    <input type="search" class="search-input" placeholder="Rechercher ..." title="Rechercher" bibliotek-search>
    <br><br><br>
    <div biblioteks-btn-zone></div>
    <div id="BiblioteksGrid" class="biblioteks-grid" biblioteks-grid-container></div>
</div>



<div id="Katalog" class="div-cleanbody hide">
    <div id="Content"> 
        <div id="KatalogMenu">
            <div id="KatalogTitle"></div>
            <div id="SubMenu">
                <div id="SubButtons" style="display: block;"></div>
                <input type="search" id="SearchInput" class="search-input" placeholder="Rechercher ..." title="Rechercher" data-search>
                <button class="btn neumorphic-btn hide" id="FilterBtn" onclick="HideShowFilters('FiltersZone','FilterBtn');"><i class="fa-solid fa-filter"></i></button>
                <div class="hide" id="FiltersZone">
                    <div id="Filter1Zone"></div>
                    <div id="Filter2Zone"></div>
                    <div id="SearchParam"></div>
                </div>
            </div>
        </div><hr>
        <div id="FiltersTag">
            <div style="text-align:left; justify-content: left;" id="FiltersList"></div>
        </div>
        <div id="CardGrid" data-ressource-cards-container></div>
        <div id="TabPreview" class="container p-3 mt-3 border hide"></div>     
        <hr><div id="CopyrightZone"></div>
    </div>
</div>

<div class="popup hide" id="PopupAdd">
    <div id="AddStep1"></div>
    <div id="AddStep2"></div>
</div>


<div id="LoaderContainer" class="hide">
    <div id="LoaderWheel"></div>
    <h4>Chargement</h4>
</div>




















<template data-ressource-template>
    <div style="margin:0px"> 
        <div class="card container">
            <a href="" target="_blank" data-link>
                <div class="img"><img src="" data-img></div>
                <div class="header" data-header></div>
                <div class="overlay">
                    <p data-descr></p>
                    <p style="border-top:solid 1px grey; padding-top:5px;" data-author></p>
                </div>
            </a>
        </div>
        <div data-btn></div>
    </div>
</template>


<template bibliotek-card-template>
    <div class="bibliotek-card">
        <div class="bibliotek-name" bibliotek-name></div>
        <p class="bibliotek-descr" bibliotek-descr></p>
        <div class="bibliotek-katalogs" bibliotek-katalogs></div>
        <p class="bibliotek-link" bibliotek-link></p>
    </div>
</template>













<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">  Cette balise est faite pour adapter Internet Explorer, mais elle semble désuette en 2022-->
    <!--<meta name="description" content="csv to datatables to csv">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Custom CSS -->
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css">  
    <!-- Custom JS -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.colVis.min.js"></script>    
    <script type="text/javascript" src="https://unpkg.com/papaparse@5.3.0/papaparse.min.js"></script>
    <script src="https://kit.fontawesome.com/f9666d4f53.js" crossorigin="anonymous"></script>
    <!-- Personnal Konsilion CSS -->
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/CleanBody.css">
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/GridCard.css">
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/Form.css">
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/NeumorphismElem.css">  
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/Katalog.css">
    <link rel="stylesheet" href="https://konsilion.github.io/katalog-setup/css/BootstrapTable.css">    
    <!-- Personnal Konsilion JS -->
    <script type="text/javascript" src="https://konsilion.github.io/katalog-setup/js/katalog.js"></script>
    <script type="text/javascript" src="../bibliotek.js"></script>
</head>




<style>

.add-slide:hover::after {
    content: ' ajouter une bibliothèque';
    float: left;
    padding: 0px 0px 0px 10px;
    font-size: 20px;
}    
    
.a-slide:hover::after {
    content: ' modifier les informations';
    float: right;
    padding: 0px 10px 0px 0px;
    font-size: 20px;
}
    
    
.bibliotek-card {
    margin-bottom: 25px;
}
    
.bibliotek-card > h2 {
    margin-bottom: 0px;    
}
    
.top-logo {
    float:right;
    cursor: pointer;
    filter: grayscale(100%) opacity(30%)!important;
}
  
.top-logo:hover {  
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
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 45px;
  justify-content: left;    
}    

    
    
.add-choice {
  margin: 25px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 30px;
  justify-content: left;      
}

    
    
    
#CardGrid {
  margin: 15px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  gap: 50px;
  justify-content: left;    
}


.card {
  border: 1px solid #CCC;
  background-color: #EEE;
  height: 225px;
  border-radius: 0px;
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
    width: 100%;
    height:100%;
    border: 1px solid #FFF;
}
    
    
    
.add-card {
  border: 1px solid #EFEFEF;
  background-color: rgba(250,250,250,0.5);
  height: 225px;
  width: auto;
  margin-left: 0px;  
  border-radius: 0px;
}
    
.add-card:hover {
  border: 1px solid #EFEFEF;
  background-color: rgba(250,250,250,1);
} 
        
    
.add-img {
    text-align: center;
    height: 100%;
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

.md-footer {
    display:block;
}
</style>
