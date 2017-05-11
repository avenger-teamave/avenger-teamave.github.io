/**
 * Created by Avenger on 11.05.2017.
 */

if(!('serviceWorker' in navigator))
{
	console.log('Service worker not supported');
}
else
{
	navigator.serviceWorker.register('/sw.js',{scope:"/img/"}).then(registration => {
		if(registration.installing) {
			console.log('Service worker installing');
		} else if(registration.waiting) {
			console.log('Service worker installed');
		} else if(registration.active) {
			console.log('Service worker active');
		}
		console.log(registration);
	}).catch(err => {
		console.log(err);
	});
}