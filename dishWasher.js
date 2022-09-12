const loadingPlates = () => {
  console.log("*****");
  setTimeout(() => {
    console.log("Plates loaded");
  }, 6000);
};

const washingPlates = () => {
    setTimeout(() => {console.log("Plate washed");},5000)
}

module.exports = { loadingPlates: loadingPlates, washingPlates:washingPlates };
