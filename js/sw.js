/**
 * Created by Avenger on 11.05.2017.
 */
self.addEventListener('install',function(event){
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

this.addEventListener('fetch', function(event) {
	console.log('fetch',event);
	event.respondWith(caches.match(event.request).catch(function() {
		return fetch(event.request);
	}).then(function(response) {
		caches.open('v1').then(function(cache) {
			cache.put(event.request, response);
		});
		return response.clone();
	}).catch(function() {
		return caches.match('/img/1.jpg');
	}));
});