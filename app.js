/**
 * Created by Avenger on 11.05.2017.
 */
var webPush = require('web-push');

webPush.setGCMAPIKey(process.env.GCM_API_KEY);

webPush.sendNotification({
	endpoint: "https://android.googleapis.com/gcm/send/eEbvPoFx7x0:APA91bHLguF3a0ZbroEjWOVSZ_Dw8--FrIxHq7cUTa24mxWTxVUyyEW1BKcR6bUCv6HvZwBbgzlLiOpaZPOKGCyYwv5O23VeuY4UEvTz3aFdMqJkgMKlTd5n1DYPOi866Scli66eHs_v",
	TTL     : 0,
	keys    : {
		p256dh: "BNj589BLhr0S4BCH14o2ZDozLvCWJZgiBIAUf75vbqPiq4aH5PFrYeqx5NpH95/x0ir+ObPsB9XoqRAUbvafCQc=",
		auth  : "hYL34Ssso2DDWqK8o9fhKA=="
	}
}, "Test message")
	.then(function() {
		console.log("SEND OK");
	})
	.catch(function(error) {
		console.log("SEND ERROR");
		console.log(error);

	});
// webPush.sendNotification({
// 	endpoint: "https://updates.push.services.mozilla.com/wpush/v1/gAAAAABZFGXuYem6HFMdo0oGodk15QZiiDPvY41TPu_MLcS_s8FsBUS8bY31slLqBpStJx6vpcLfC9aLFn99mCXdtqZ_ffMkcnPyXXGMVbaoJDXAFexwdYVT-OuFUcnWV1I_hyDJ9j4j",
// 	TTL     : 0,
// 	keys    : {
// 		p256dh: "BKs/Fpbj2TEZkyE7U7hl1rStOtTN/RbYZCHhrxDMSVksFQb56MRPZU/HUyteakXcy2gyYNl8K8xY4u2Gm7LrCvo=",
// 		auth  : "NRSoRWfvfHeyIVPzaBz9PA=="
// 	}
// }, "Test message")
// 	.then(function() {
// 		console.log("SEND OK");
// 	})
// 	.catch(function(error) {
// 		console.log("SEND ERROR");
// 		console.log(error);
// 	});