class Github {
    constructor() {
        this.client_id = 'e8e4c32f1a3ffe9904f2',
        this.client_secret = '2414e83384688416783c17a75d4f3fc25a9d01bf'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}