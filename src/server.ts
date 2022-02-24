import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
//importando a mainRoutes
import mainRoutes from "./routes/index"
/*vamos por o path para comserguimos usar a pasta 
publica e colocar o html, css etc*/
import path from "path"

//dotenv para nossa porta
dotenv.config()
//configurando servidor
const server = express()
//configurando o mustache
server.set("view engine","mustache")
//diretorio em que colocaremos nossos arquivos mustache
server.set("views",path.join(__dirname, "views"))
//templates engines do mustache
server.engine("mustache",mustache())

//diretorio da nossa pasta estatica
server.use(express.static(path.join(__dirname,"../public")))

//not found 404
server.use((req,res)=>{
    res.send("Página não encontrada!")
})

//habilitando o servidor    
server.listen(process.env.PORT)