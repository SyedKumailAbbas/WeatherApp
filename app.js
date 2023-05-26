let checkweather = () => {
    let city=document.querySelector("#cityinp").value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b18cfc5ba8b584f3640391390e2e73e
    `)
    .then((res)=>{
        // console.log(res)
        console.log(res.data.main.temp)
        document.querySelector("#temp").innerHTML="T: "+res.data.main.temp
        document.querySelector("#humi").innerHTML= "humidity: "+res.data.main.temp
        document.querySelector("#feel").innerHTML= "Feels Like: " +res.data.main.temp
    })
    .catch((err)=>{
        console.log(err)
    })
}