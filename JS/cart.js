fetch(`https://boat-api-1.onrender.com/cart`)
    .then((res) => {
        return res.json()
    }).then((Res) => {

        let cartnum = Res.length

        document.querySelector("#cnum").innerHTML = cartnum
        document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })

function view(arr) {
    let subtotle = 0
    let total = 0
    return arr.map((Element) => {
        subtotle = Element.price * Element.qtt
        total = total + subtotle
        document.getElementById("h").innerHTML = `₹${total}.00`
        return `
<div class="lg:w-[100%] p-[10px] grid lg:grid lg:grid-cols-6 grid-cols-1 lg:gap-12 gap-4 lg:block border ">
<div class="flex justify-center items-center">
    <img src="${Element.img}" alt="" id="cartimg">
</div>
<div class="flex justify-center items-center">
    <p class="text-[16px] text-[#000]">${Element.title}</p>
</div>
<div class="flex justify-center items-center">
    <p class="text-[16px] text-[#000]">${Element.price}</p>
</div>
<div class="flex justify-center items-center">
    <button id="inc_btn1" onclick="inc_dc(${Element.qtt},${Element.id},'dc')">-</button>
    <input type="text" value="${Element.qtt}" disabled id="qnt">
    <button id="inc_btn2" onclick="inc_dc(${Element.qtt},${Element.id},'inc')">+</button>
</div>
<div class="flex justify-center items-center">
    <p class="text-[16px] text-[#000] font-black " id="h">${subtotle}</p>
</div>
<div class="flex justify-center items-center">
    <p class="text-[16px] text-[#000] font-black"><button id="delet" onclick=" dd(${Element.id})">Delete</button></p>
</div>
</div>
    `}).join("")
}

function dd(id) {
    fetch(`https://boat-api-1.onrender.com/cart/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json()
        }).then((Res) => {
            // console.log(Res);
            document.querySelector("#box").innerHTML = ""
        }).catch((err) => {
            console.log(err);
        })

}

function inc_dc(qtt, id, opr) {

    var h = qtt

    if (opr == 'dc') {

        h = h - 1;

        if (h == 0) {
            fetch(`https://boat-api-1.onrender.com/cart/${id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    return res.json()
                }).then((Res) => {
                    document.querySelector("#box").innerHTML = ""
                    // console.log(Res);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
    else if (opr == 'inc') {
        h = h + 1;
    }
    fetch(`https://boat-api-1.onrender.com/cart/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ qtt: h })
    })
        .then((res) => {
            return res.json()
        }).then((Res) => {
            console.log(Res);
        }).catch((err) => {
            console.log(err);
        })

}


function pay() {

    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Paymant Succsessfully.....",
        showConfirmButton: false,
        html: `
        <a href="index.html" autofocus><button style="background-color: #ED1C24; border:none;  border-radius: 8px; width: 200px; height: 40px; color: white;"><i class="fa-solid fa-house me-[10px]"></i> Go To Home</button></a>
      `
    });
}

