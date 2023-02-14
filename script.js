// console.log("Hello")
async function getData(){
    try{
        let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        let data = response.json();
        data.then(function (ans){
            // console.log(ans)
            appendData(ans)
        })
    }catch{
        console.log("error message")
    }
}
getData()


let body = document.querySelector("tbody");
let main = document.querySelector("table");

function appendData(data){
    console.log(data)
    data.map((ele)=>{
        let row = document.createElement("tr");

        let logo = document.createElement("td");
        logo.style.display = "flex";

        let img = document.createElement("img");
        img.setAttribute("src", ele.image)

        let name = document.createElement("div")
        name.innerHTML = ele.name;

        logo.append(img,name)

        let price = document.createElement("td");
        price.innerHTML = ele.current_price;

        let market_cap = document.createElement("td");
        market_cap.innerHTML = ele.market_cap;

        let high = document.createElement("td");
        high.innerHTML = ele.high_24h;

        let low = document.createElement("td");
        low.innerHTML = ele.low_24h;



        row.append(logo,price,market_cap,high,low)
        body.append(row);
        main.append(body);
    })
}