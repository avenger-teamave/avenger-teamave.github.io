/**
 * Created by Avenger on 11.05.2017.
 */

if(!('serviceWorker' in navigator))
{
	console.log('Service worker not supported');
}
else
{
	navigator.serviceWorker.register('/js/sw.js',{scope:"/"}).then(registration => {
		console.log('SW registered!');
		console.log(registration);
	}).catch(err => {
		console.log(err);
	});
}