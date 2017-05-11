/**
 * Created by Avenger on 11.05.2017.
 */
self.addEventListener('install', function(event) {
	console.log('install');
	console.log(event);

	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/img/1.jpg',
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log('fetch', event);
	event.respondWith(caches.match(event.request).then(function(response){
		return response || fetch(event.request);
	}).catch(function() {
		return fetch(event.request);
	}).then(function(response) {
		if(response)
		{
			caches.open('v1').then(function(cache) {
				cache.put(event.request, response);
			});
			return response.clone();
		}
		return caches.match('/img/1.jpg');
	}).catch(function(err) {
		console.log("err", err);
		return caches.match('/img/1.jpg');
	}));
});