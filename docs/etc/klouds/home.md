---
hide:
    - toc
    - navigation
---


<div id="Kloud" class="div-cleanbody">
    <div id="KloudsTitle" class="klouds-tilte" klouds-tilte></div>
    <br>
    <div id="KloudsGrid" class="klouds-grid" klouds-grid-container></div>
</div>


<template kloud-card-template>
    <div class="kloud-card">
        <h2 class="kloud-name" kloud-name></h2>
        <p class="kloud-descr" kloud-descr></p>
        <div class="kloud-katalogs" kloud-katalogs></div>
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
    <script type="text/javascript" src="../kloud.js"></script>
</head>



<style>
.a-slide:hover::after {
    content: ' modifier';
    float: right;
    padding: 0px 10px 0px 0px;
    font-size: 20px;
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


#KloudsGrid {
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, auto));
  gap: 45px;
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