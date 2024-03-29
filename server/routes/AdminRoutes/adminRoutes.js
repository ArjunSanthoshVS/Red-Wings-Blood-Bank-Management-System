const express = require('express')
const router = express.Router()
const { adminVerifyToken } = require('../../Middlewares/auth')
const adminController = require('../../controllers/Admin/adminController')

router.post('/adminSignup', adminController.adminSignup)
router.post('/adminLogin', adminController.adminLogin)
router.get('/users', adminVerifyToken, adminController.users)
router.get('/users/:id', adminVerifyToken, adminController.individualUUser)
router.get('/donations', adminVerifyToken, adminController.donations)
router.get('/userDonations/:id', adminVerifyToken, adminController.userDonations)
router.get('/requests', adminVerifyToken, adminController.requests)
router.get('/userRequests/:id', adminVerifyToken, adminController.userRequests)
router.put('/requests/:id/approve', adminVerifyToken, adminController.approveRequest)
router.put('/requests/:id/reject', adminVerifyToken, adminController.rejectRequest)
router.put('/donations/:id/approve', adminVerifyToken, adminController.approveDonation)
router.put('/donations/:id/reject', adminVerifyToken, adminController.rejectDonation)
router.post('/newBranch', adminVerifyToken, adminController.newBranch)
router.get('/branches', adminVerifyToken, adminController.branches)
router.put('/editBranch', adminVerifyToken, adminController.editBranch)
router.delete('/removeBranch/:id', adminVerifyToken, adminController.removeBranch)
router.get('/districtChoose', adminVerifyToken, adminController.districtChoose)
router.get('/units', adminVerifyToken, adminController.units)

module.exports = router;