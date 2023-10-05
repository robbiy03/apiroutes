const server = require("express")
const app = server()
const port = 8080
const apirouter = require("./api-routes")

app.get("/", (req, res)=>{
    res.send('Selamat datang di data center siswa')
})

app.use("/datasiswa", apirouter)

app.listen(port, ()=>{
    console.log(`prt berjalan di ${port}`)
})