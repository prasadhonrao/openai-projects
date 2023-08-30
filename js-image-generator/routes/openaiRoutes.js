import express from 'express';
import generateImage from '../controllers/openaiController.js'; // Update the path accordingly

const router = express.Router();

router.post('/generateimage', generateImage);

export default router;
