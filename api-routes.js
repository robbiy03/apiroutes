const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({
        Nama : "Ahmad Robih Rizqi",
        Hobi : "hacking",
        JenisKelamin : "laki-laki",
    })
})

module.exports = router