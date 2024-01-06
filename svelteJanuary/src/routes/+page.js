import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	//const res = await fetch('localhost:3000/hello');
	//console.log({ res });
	return {
		title: 'Hello world!',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};

	error(404, 'Not found');
}
