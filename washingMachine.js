//This file is of washing machine



const loadingDress = ()=>{

    console.log("Loading dress");
    setTimeout(()=>{
        console.log("Loading finished")
    },5000)


}

const washingDress = ()=>{
    setTimeout(()=>{console.log("washing finished")},7000)
}

const dryingCloths = ()=>{
    setTimeout(()=>{console.log("Cloth dryed")},5000);
}

module.exports = {loadingDress: loadingDress, washingDress, dryingCloths}