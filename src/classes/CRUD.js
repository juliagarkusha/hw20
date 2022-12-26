class CRUD {
    constructor(apiUrl = 'https://jsonplaceholder.typicode.com') {
        this.apiUrl = apiUrl;
    }

    async get(path) {
        const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl);

        if (response.ok) {
            return response.json();
        }

        console.error('debug exception: ', 'Network error');
    }

    async update(path, data) {
        const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.ok) {
            return response.json();
        }

        console.error('debug exception: ', 'Network error');
    }

    async create(path, data) {
        const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.ok) {
            return response.json();
        }

        console.error('debug exception: ', 'Network error');
    }

    async remove(path) {
        const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.ok) {
            return response.json();
        }

        console.error('debug exception: ', 'Network error');
    }
}