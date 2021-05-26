const base = 'http://localhost:8000';

export function post(endpoint, data) {
	return fetch(`${base}${endpoint}`, {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((r) => r.json())
		.catch((err) => err.json());
}
