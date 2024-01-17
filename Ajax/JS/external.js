3.// we make get request
function getData() {
    // step1: create object of XMLHttpRequest
    const xmlhttp = new XMLHttpRequest();

    //step2: define callback function 
    xmlhttp.onload = function () {
        console.log(this.response)
        let data = this.response;
        document.getElementById("d1").innerHTML = data;
    }
    //step3 create request by using open method 
    xmlhttp.open("GET", "http://localhost:8888/product");
    //step4: send request
    xmlhttp.send();
}
//we make delte requst
function getproductId() {
    var id = document.getElementById("proId").value;
    // console.log(id)
    if (window.confirm(`Are You Sure To Delete Product With Id :${id}`)) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            window.alert("Product Deleted Successfully");
        }
        xmlhttp.open("DELETE", `http://localhost:8888/product/${id}`);
        xmlhttp.send(); d
    }
}
// w add data successfully
function addData() {
    let productObj = {
        name: document.getElementById("pname").value,
        price: document.getElementById("pprice").value,
        company: document.getElementById("pcompany").value
    }
    let ProductJsonData = JSON.stringify(productObj);
    // console.log(name,price,company) 
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        window.alert("Product Added Successfully");
    }
    xmlhttp.open("POST", "http://localhost:8888/product");
    xmlhttp.setRequestHeader("Content-type", "application/json")
    xmlhttp.send(ProductJsonData);
}
// here we make get request for single product
function getSinleProduct() {
    let id = document.getElementById("pid").value;
    // console.log(id);
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function () {
        // console.log(this.response);
        let data = JSON.parse(this.response);
        // console.log(data);
        document.getElementById("proname").value = data.name;
        document.getElementById("proprice").value = data.price;
        document.getElementById("procompany").value = data.company;
    }
    xmlHttp.open("GET", `http://localhost:8888/product/${id}`);
    xmlHttp.send();
}
// here we make put request
function updateProduct() {
    let pid = document.getElementById("pid").value;

    if (window.confirm(`Are You Sure To update Product With Id :${pid}`)) {
        let productobj = {
            id: pid,
            name: document.getElementById("proname").value,
            price: document.getElementById("proprice").value,
            company: document.getElementById("procompany").value,
        }
        let productJson = JSON.stringify(productobj)

        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onload = function () {
            window.alert("Product Updated Successfully");
        }
        xmlHttp.open("PUT", `http://localhost:8888/product/${pid}`);
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.send(productJson);
    }

}


