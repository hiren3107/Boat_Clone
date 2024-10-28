
function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`https://boat-api-1.onrender.com/product?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.getElementById("box").innerHTML = view(res)
            document.getElementById("cart").addEventListener("click", () => {
                addToCart(res)
            })
        })
        .catch((err) => {
            console.log(err)
        })
  }
  
  
  function view(arr) {
    return arr.map((Element) => {
        return `
        <div class="flex justify-center">
        <img src="${Element.img}" alt="" id="singalimg">
    </div>
    <div class="pt-[10px] pb-[10px]">
        <div class="flex mb-[10px]">
            <div class="flex me-[15px] items-center">
                <div class="flex items-center">
                    <img src="${Element.ratingimg}" alt="" id="st">
                    <span class="text-[12px] pe-[5px] border-r-[2px]">${Element.rating}</span>
                </div>
                <div class="flex items-center ps-[5px]">
                    <span class="text-[12px] me-[3px]">${Element.review} reviews </span>
                    <img src="${Element.reviewimg}"
                        alt="" id="st">
                </div>
            </div>
            <div class="">
                <p class="text-[11px] text-[#fff] bg-[#d83333]  pt-[2px] pb-[2px] ps-[12px] pe-[12px] rounded-[10px]">Earn upto 59 boAt reward points on this product</p>
            </div>
        </div>
        <h1 class="text-[28px] text-[#1A2024] font-black">${Element.title}</h1>
        <div class="">
            <div class="flex items-center mt-[10px]">
                <p class="text-[22px] text-[#1A2024] font-black me-[12px]">₹${Element.price}</p>
                <p class="text-[14px] text-[#b2b9bf] line-through me-[12px]">₹${Element.offprice}.00</p>
                <p class="text-[14px] text-[#12b985] me-[5px] font-black">${Element.discount}% off</p>
            </div>
            <p class="text-[11px] mt-[-4px]">MRP(Inclusive of all taxes)</p>
        </div>
        <div class="mt-[20px]">
            <p class="text-[14px] text-[#1A2024] font-black">Choose your colour : <span class="font-[100]">Default</span></p>
            <div class="mt-[10px] flex gap-[15px]">
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#22201f]"></div>
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#586575]"></div>
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#d48f87]"></div>
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#d1d1d1]"></div>
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#c5b898]"></div>
                <div class="rounded-[50%] h-[32px] w-[32px] bg-[#3e5844]"></div>
            </div>
        </div>
        <div class="mt-[30px]">
            <p class="text-[14px] text-[#1A2024] font-black">Check Delivery</p>
            <div class="mt-[14px] p-[16px] bg-[#F2F5F9] rounded-[10px] w-[60%]">
                <div class="h-[46px] flex bg-[#fff] justify-between rounded-[5px] border border-[#ccc]">
                    <input type="tel" class="ps-[10px] rounded-[5px] w-[100%]" placeholder="Enter PIN code">
                    <button id="btn1">Change</button>
                </div>
                <div class="mt-[10px]">
                    <h1 class="text-[14px] text-[#000] font-black"> <span class="text-[#2F9B6A]">Free delivery</span> | By Sunday, 27 Oct</h1>
                    <p class="text-[14px] text-[#000]">If ordered within <span class="text-[#CD1515]">23 hrs 26 mins</span></p>
                </div>
            </div>
        </div>
        <div class="mt-[20px]">
            <p class="text-[14px] text-[#1A2024] font-black">Users' Love</p>
            <div class="mt-[14px] p-[16px] bg-[#F2F5F9] rounded-[10px] w-[60%]">
                <h1 class="text-[16px] text-[#000] font-black">Make Your Product Personalised</h1>
                <p class="text-[11px] text-[#395b92] mt-[8px]">Get A Customized Engraving And Make It Unmistakably Yours.</p>
            </div>
        </div>
        <button id="cart">Add To Cart</button>
    </div>
        `
    }).join("")
  }
  
  function addToCart(res) {
    fetch(`https://boat-api-1.onrender.com/cart?id=${res[0].id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            if (Res.length > 0) {
                // alert("Product Ia Already In Cart !")
                // sweetAlert("Oops...", "Product Ia Already In Cart!", "error");
                Swal.fire({
                    title: "Item is Already Present in Cart !!!!!",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            } else {
                fetch(`https://boat-api-1.onrender.com/cart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({...res[0],qtt : 1})
                })
                    .then((Res) => {
                        return Res.json()
                    })
                    .then((Res) => {
                        console.log(Res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
  
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Added Succsessfully.....",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    // alert("Product Added Succsessfully.....")

                    // sweetAlert("Oops...", "Something went wrong!", "error");
                    // Swal.fire({
                    //     title: "Product Added Succsessfully.....",
                    //     showClass: {
                    //       popup: `
                    //         animate__animated
                    //         animate__fadeInUp
                    //         animate__faster
                    //       `
                    //     },
                    //     hideClass: {
                    //       popup: `
                    //         animate__animated
                    //         animate__fadeOutDown
                    //         animate__faster
                    //       `
                    //     }
                    //   });
            }
        })
        .catch((err) => {
            console.log(err)
        })
  
  }
  FetchingData()
  
  
  