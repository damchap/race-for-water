import Test from "../assets/test.json"

async function fpxbmpzf() {
    console.log("movai !")
    console.log(Test[1])
    console.log(Test[1].id)
    var blob = new Blob([""+Test[1].id], {type: "text/plain"})
    var url = window.URL.createObjectURL(blob)
    var a = document.createElement("a")
    a.href=url
    a.download="res.txt"
    a.click();
    
}

export default fpxbmpzf;