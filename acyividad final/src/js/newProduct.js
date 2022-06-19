const fieldChecker = () =>{
    // e.preventDefault()
    const ProductName = document.getElementById("ProductName");
    const ProductPrice = document.getElementById("ProductPrice");
    const ProductInventory = document.getElementById("ProductInventory");
    const auxName = document.getElementById("auxName");
    const auxPrice = document.getElementById("auxPrice");
    const auxInventory = document.getElementById("auxInventory");

    if(ProductName.value.length == 0){
        auxName.style.display = "block";
    }if(ProductPrice.value.length == 0){
        auxPrice.style.display = "block"
    }if(ProductInventory.value.length == 0){
        auxInventory.style.display = "block";
    }if(ProductName.value.length !== 0){
        auxName.style.display = "none";
    }if(ProductPrice.value.length !== 0){
        auxPrice.style.display = "none";
    }if(ProductInventory.value.length !== 0){
        auxInventory.style.display = "none";
    }
}