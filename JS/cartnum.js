fetch(`https://boat-api-1.onrender.com/cart`)
.then((res) => {
    return res.json()
}).then((Res) => {
    let cartnum= Res.length
    document.querySelector("#cnum").innerHTML = cartnum
}).catch((err) => {
    console.log(err);
})