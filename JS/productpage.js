fetch(`http://localhost:3000/product`)
    .then((res) => {
        return res.json()
    }).then((Res) => {
        document.querySelector("#box").innerHTML = view(Res)
        shorting(Res)
        filter(Res)
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

// render shorting .......................................................
function shorting(hi) {
    var short = document.querySelector("#short")

    short.addEventListener("change", () => {
        var optvalue = short.value

        if (optvalue == 'low') {

            var ans = hi.sort((a, b) => {
                return a.price - b.price
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (optvalue == 'high') {
            var ans = hi.sort((a, b) => {
                return b.price - a.price
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (optvalue == 'a') {
            var ans = hi.sort((a, b) => {
                return a.title.localeCompare(b.title)

            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (optvalue == 'z') {
            var ans = hi.sort((a, b) => {

                return b.title.localeCompare(a.title)
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (optvalue == 'alll') {
            var ans = hi.sort((a, b) => {
                return a.id - b.id

            })
            document.querySelector("#box").innerHTML = l(ans)
        }
    })
}


function l(ans) {
    return ans.map((Element) => {
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



function filter(ji) {
    var fill = document.querySelector("#Categories")

    fill.addEventListener("change", () => {
        var filtervalue = fill.value

        if (filtervalue == 'Earbuds') {
            var ans = ji.filter((Element) => {
                return Element.Categories == 'Wireless-Earbuds'
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (filtervalue == 'Neckbands') {
            var ans = ji.filter((Element) => {
                return Element.Categories == 'Neckbands'
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (filtervalue == 'Headphones') {
            var ans = ji.filter((Element) => {
                return Element.Categories == 'Wireless-Headphones'
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (filtervalue == 'Speakers') {
            var ans = ji.filter((Element) => {
                return Element.Categories == 'Wireless-Speakers'
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (filtervalue == 'Limited') {
            var ans = ji.filter((Element) => {
                return Element.Categories == 'Limited-Edition'
            })
            document.querySelector("#box").innerHTML = l(ans)
        }
        else if (filtervalue == 'all') {
            var ans = ji.map((Element) => {
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
</div> `}).join("")
            document.querySelector("#box").innerHTML = ans
        }
    })
}