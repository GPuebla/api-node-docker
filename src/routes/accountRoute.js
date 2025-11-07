import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{res.send('Account Route')});

export default router