import express from 'express'
import * as group_router from 'express-router-group'
const router = express.Router()

import * as controller_timekeeping from './../app/Http/Controllers/Timekeeping.js'



router.group('/', async (router) => {
	router.post('/iclock/cdata', controller_timekeeping.post_iclock_data)
	router.get('/iclock/cdata', controller_timekeeping.get_config)
	router.get('/iclock/getrequest', controller_timekeeping.get_request)
	router.post('/iclock/devicecmd', controller_timekeeping.result_requet)

})

export default router
