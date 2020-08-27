import express from 'express';
import cors from 'cors'
import path from 'path';
import routes from './routes';

const app = express()

app.use(cors())
app.use(routes)
app.use(express.json())
app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')))

/*const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
]

app.get('/users', (req,res) => {

   const search = String(req.query.search)

   const filteredUsers = search ? users.filter(user => user.includes(search)) : users

   return res.json(filteredUsers)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users[id]

    return res.json(user)
})

app.post('/users', (req, res) => {

    const data = req.body
   
    const user = {
        name: data.name,
        email: data.email
    }

    return res.json(user)
})*/
app.listen('3333', () => console.log('Executando'))