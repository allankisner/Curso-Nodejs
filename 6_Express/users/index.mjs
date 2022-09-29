import path from "path";
import { fileURLToPath } from 'url';
import { Router as expressRouter } from 'express';

const router = expressRouter();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, '../templates');


router.get('/create', (req, res)=> {
  
    res.sendFile(`${basePath}/form.html`)

})

router.post('/save', (req, res)=>{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do Usuário é ${name} e ele tem ${age} anos`)

   res.sendFile(`${basePath}/form.html`)
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    console.log(`buscando usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)

})

export default router;