// Transformations CSV vers HTML
window.onload = function() {

 
}



function UserInfoDisplay() {


    // -----> Données de votre liste de projet - Gridcard
    Papa.parse(window.location.pathname + "../user-info.csv", { 
        download: true,
        delimiter: ";",
        skipEmptyLines: true,
        complete: results => {
            ChangeSiteTitle(results.data);
        }
    });    


}

function ChangeSiteTitle(content) {

document.title = "This is the new page title.";


}