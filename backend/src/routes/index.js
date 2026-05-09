const express = require('express');
const { asyncHandler } = require('../utils/http');
const playerController = require('../controllers/playerController');
const saveController = require('../controllers/saveController');
const logController = require('../controllers/logController');
const rankingController = require('../controllers/rankingController');

const router = express.Router();

router.get('/health', (req, res) => res.json({ code: 200, msg: 'ok' }));

router.post('/login', asyncHandler(playerController.login));
router.post('/player', asyncHandler(playerController.updatePlayer));
router.post('/save', asyncHandler(saveController.uploadSave));
router.post('/error', asyncHandler(logController.uploadError));
router.post('/message', asyncHandler(logController.uploadMessage));

router.get('/ranking', asyncHandler(rankingController.ranking));
router.post('/ranking', asyncHandler(rankingController.ranking));
router.get('/random-save', asyncHandler(saveController.randomSave));

router.post('/msg', asyncHandler(logController.uploadMessage));
router.post('/setting', asyncHandler(playerController.updateSetting));
router.post('/nickname', asyncHandler(playerController.updateNickname));

module.exports = router;
