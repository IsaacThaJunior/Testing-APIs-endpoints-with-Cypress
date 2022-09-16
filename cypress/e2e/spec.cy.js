describe('a way to test APIs with cypress', () => {
	// Test 1
	it('checks the response code of the request', () => {
		cy.request({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums/1/photos',
		})
			.its('status')
			.should('be.equal', 200);
	});

	// Test 2
	it('checking the headers of the data', () => {
		cy.request({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums/1/photos',
		})
			.its('headers')
			.its('content-type')
			.should('include', 'application/json');
	});

	// Test 3
	it('checking that the request returns 50 items', () => {
		cy.request({
			method: 'GET',

			// This specific URL returns an array with 50 items
			url: 'https://jsonplaceholder.typicode.com/albums/1/photos',
		})
			.its('body')
			.should('have.length', 50);
	});

	// Test 4
	it('should make a Post request', () => {
		cy.request({
			method: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.its('status')
			.should('be.equal', 201);
			
	});
});
