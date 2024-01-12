const express = require("express") ;
const router = express.Router() ;
const {isLoggedIn} = require("../middleware/checkAuth") ;
const dashboardController = require('../controllers/dashboardController') ;

/**
*DashBoard Routes 
*/
router.get('/dashboard',isLoggedIn,dashboardController.dashboard) ;
router.get('/dashboard/item/:id',isLoggedIn,dashboardController.dashboardViewNote) ;
router.get('/dashboard/item/:id',isLoggedIn,dashboardController.dashboardUpdateNote) ;
router.delete('/dashboard/item-delete/:id',isLoggedIn,dashboardController.dashboardDeleteNote) ;
router.get('/dashboard/add',isLoggedIn,dashboardController.dashboardAddNote) ;
router.post('/dashboard/add',isLoggedIn,dashboardController.dashboardAddNoteSubmit) ;
router.get('/dashboard/add',isLoggedIn,dashboardController.dashboardSearch) ;
router.post('/dashboard/add',isLoggedIn,dashboardController.dashboardSearchSubmit) ;



module.exports = router ;