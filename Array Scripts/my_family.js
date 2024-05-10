function getFamily () {

const myFamily = ["Mom", "Dad", "Cesar", "Alan"];

return myFamily;

}

function displayFamily (myFamily) {
    
    const numFam = myFamily.length;

    for(let i = 0; i < numFam; i++) {
        
        console.log(myFamily[i]);
    }

}

const theFam = getFamily();

displayFamily(theFam);