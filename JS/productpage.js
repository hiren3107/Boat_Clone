fetch(`http://localhost:3000/product`)
    .then((res) => {
        return res.json()
    }).then((Res) => {
        document.querySelector("#box").innerHTML = view(Res)
    }).catch((err) => {
        console.log(err);
    })

function view(arr) {
    return arr.map((Element) => {
      return `
         <div class="flex p-[5px] rounded-[8px] w-[100%] md:w-[48%] xl:w-[32%] border bg-[#FAFAFA] mb-[25px]">
    <div class="me-[10px]" id="po">
        <a href="singal.html?id=${Element.id}">
            <img src="${Element.img}"  alt=""
                id="mainimg">
        </a>
        <div id="yellow">
            <p id="pt">${Element.playback} Hours Playback</p>
        </div>
    </div>
    <div class="flex flex-wrap items-center w-[100]">
        <div class="w-[100%]">
            <div class="flex mb-[5px]">
                <div class="flex items-center  ">
                    <img src="${Element.ratingimg}" alt="" id="st">
                    <span class="text-[12px] pe-[5px] border-r-[2px]">${Element.rating}</span>
                </div>
                <div class="flex items-center ps-[5px]">
                    <img src="${Element.reviewimg}"
                        alt="" id="st">
                    <span class="text-[12px] ">${Element.review}</span>
                </div>
            </div>
            <h1 class="text-[16px] text-[#1A2024] font-black">${Element.title}</h1>
        </div>
        <div class="w-[100%]">
            <div class="flex items-end">
                <p class="text-[16px] text-[#1A2024] font-black me-[7px]">₹${Element.price}</p>
                <p class="text-[12px] text-[#b2b9bf] line-through me-[7px]">₹${Element.offprice}</p>
                <p class="text-[12px] text-[#12b985] me-[5px] font-black">${Element.discount}% off</p>
                <p></p>
            </div>
            <a href="singal.html?id=${Element.id}">
                <div class="mt-[15px]">
                    <button id="cart">Add To Cart</button>
                </div>
            </a>
        </div>
    </div>
</div> `
    }).join("")
}
