import path from "path";
import { fileURLToPath } from 'url';
import { Router as expressRouter } from 'express';

const router = expressRouter();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, '../templates');


router.get('/', (req, res)=> {
  
    res.sendFile(`${basePath}/contato.html`)

})

export default router;