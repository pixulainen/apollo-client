import ApolloBoost, { gql } from 'apollo-boost';

const client = new ApolloBoost({
	uri: 'http://localhost:4000',
	request: (operation) => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		});
	}
});

const getUsers = gql`
	query {
		users {
			id
			name
		}
	}
`;

client
	.query({
		query: getUsers
	})
	.then((resp) => {
		console.log(resp.data);
	});
