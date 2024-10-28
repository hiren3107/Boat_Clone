var kk = true
var ans = []
document.querySelector("#login").addEventListener("submit", (h) => {
    h.preventDefault();

    var loginemail = document.getElementById("loginemail").value
    var loginpass = document.getElementById("loginpassword").value

    kk = true
    document.querySelector("#loginpasstext").innerHTML = ""
    document.querySelector("#loginemailtext").innerHTML = ""


    if (loginemail.length == 0) {
        document.querySelector("#loginemailtext").innerHTML =
            "Plese Enter Valid Password";
        kk = false;

    }
    if (loginpass.length < 8) {
        document.querySelector("#loginpasstext").innerHTML = "Plese Enter Valid Password";
        kk = false;

    }

    if(kk == true)
    {
        fetch(`http://localhost:3000/signupdata`)
        .then((re)=>{
            return re.json()
        }).then((res)=>{
            console.log(res);
            getdata(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
   

    if (kk == true) {
        function getdata(arr){
            ans = arr.filter((el)=>{
                if(loginemail == el.email && loginpass == el.pass)
                {
                    return el
                }
             })
            if (ans.length > 0) {
                Swal.fire({
                    title: "Log In Successful...!",
                    text: "You clicked the button!",
                    icon: "success"
                });

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Log In Failed...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
            }
        }


        
    }

    
})

