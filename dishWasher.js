const loadingPlates = () => {
  console.log("*****");
  setTimeout(() => {
    console.log("Plates loaded");
  }, 6000);
};

module.exports = { loadingPlates: loadingPlates };
