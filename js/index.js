console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshyakumar",
    "email": "akshyakumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "shivanshu.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true

}


submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("Clicked")
    let key = "ema_live_ztBTqghFOPcXtnra5h4uaWGQk9m68UPSckAxmhaS"
    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json //to parse the fetched data,,
                                //we can use res.text to see resuls in text formate
    let str = ``
    for (key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]}</div>`
    }
    console.log(str)
    resultCont.innerHTML = str


})