const form = document.querySelector(".formm");
const inp = document.querySelector(".inp")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(inp.value);
    let val = /\w+/g.test(inp.value);
    if(val) document.write("Pasele joven");
    else document.write("Nel perro");
})