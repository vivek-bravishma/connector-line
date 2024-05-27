import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
	customerName: {
		type: String,
		required: true,
	},
	channel: {
		type: String,
		required: true,
	},
	engagementId: {
		type: String,
	},
	providerParticipantId: {
		type: String,
		required: true,
	},
	correlationId: {
		type: String,
		required: true,
	},
	dialogId: {
		type: String,
		required: true,
	},
	connectionId: {
		type: String,
		required: true,
	},
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
