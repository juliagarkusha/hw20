class CRUD {
    constructor(apiUrl = 'https://jsonplaceholder.typicode.com') {
        this.apiUrl = apiUrl;
    }

    validateResponse(response) {
        if (response.status >= 400) {
            throw new Error('Network error');
        }
    }

    async get(path) {
       try {
           const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl);
           this.validateResponse(response);
           return response.json();
       } catch(exception) {
           console.log('debug exception: ', exception);
           return [];
       }
    }

    async update(path, data) {
        try {
            const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            this.validateResponse(response);
            return response.json();
        } catch(exception) {
            console.log('debug exception: ', exception);
        }
    }

    async create(path, data) {
        try {
            const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            this.validateResponse(response);
            return response.json();
        } catch(exception) {
            console.log('debug exception: ', exception);
        }
    }

    async remove(path) {
        try {
            const response = await fetch(path ? `${this.apiUrl}/${path}`: this.apiUrl, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            });
            this.validateResponse(response);
            return response.json();
        } catch(exception) {
            console.log('debug exception: ', exception);
        }
    }
}