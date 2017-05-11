/**
 * Created by Avenger on 11.05.2017.
 */

var endpoint;
var key;
var authSecret;

navigator.serviceWorker.register('sw.js')
	.then(function(registration) {
		return registration.pushManager.getSubscription()
			.then(function(subscription) {
				if(subscription)
				{
					return subscription;
				}

				return registration.pushManager.subscribe({userVisibleOnly: true});
			});
	}).then(function(subscription) {

	var rawKey        = subscription.getKey ? subscription.getKey('p256dh') : '';
	key               = rawKey ?
		btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) :
		'';
	var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
	authSecret        = rawAuthSecret ?
		btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) :
		'';

	endpoint = subscription.endpoint;

	console.log(endpoint);
	console.log(key);
	console.log(authSecret);

});


