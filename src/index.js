import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.get("/generic.ejs", (req,res)=> {
    res.render("generic.ejs")
})

app.get("/elements.ejs", (req,res)=> {
    res.render("elements.ejs")
})

app.get("/index.ejs", (req,res)=> {
    res.render("index.ejs")
})


app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('Server is listening on port', 3000)