const Router = require('express').Router()
const ciudadesController = require('../controllers/ciudadesControllers')
const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad, obtenerCiudad} = ciudadesController
const itinerariesController = require('../controllers/itinerariesControllers')
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario, obtenerUnItinerarioPoridCiudad, likeDislike} = itinerariesController
const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken }= usersControllers
const validator = require('../config/validator')
const passport = require('../config/passport')
const actividadesControllers = require('../controllers/actividadesControllers')
const {obtenerActivities, obtenerUnActividad, cargarActividad, borrarActividad, modificarActividad, obtenerUnaActividadPoridItinerario} = actividadesControllers




Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerCiudad)



/*-----------------------------itineraries-------------*/

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)

Router.route('/allitineraries/ciudades/:id')
.get(obtenerUnItinerarioPoridCiudad)

/*-------------Activities----------------*/
Router.route('/allactivities')
.get(obtenerActivities)
.post(cargarActividad)


Router.route('/allactivities/:id')
.delete(borrarActividad)
.put(modificarActividad)
.get(obtenerUnActividad)

Router.route('/allactivities/itineraries/:id')
.get(obtenerUnaActividadPoridItinerario)

/*----------SignUp------------*/

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

/*-------Likes Deslikes--------*/

Router.route('/likeDislike/:id')
.put(passport.authenticate('jwt',{ session:false }),  likeDislike)

module.exports = Router