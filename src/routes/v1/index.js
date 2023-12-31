const express=require('express');
const router=express.Router();
const cityController=require('../../controllers/city-controller');
const flightController=require('../../controllers/flight-controller');
const airportController=require('../../controllers/airport-controller');
const flightMiddleware=require('../../middlewares/flight-middleware')


router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.get('/city',cityController.getAll);
router.patch('/city/:id',cityController.update);
router.post('/flights',flightMiddleware.validateCreateFlight,flightController.create);
router.get('/flights',flightController.getAll);
router.post('/airports',airportController.create);
router.get('/flight/:id',flightController.getFlight);
router.patch('/flight/:id',flightController.update);


module.exports=router;