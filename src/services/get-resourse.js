export default class GetResource {
    constructor() {
        this._apiBase = 'https://api.punkapi.com/v2';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getBeer(term = '') {
        if (term === '') {
            const beers = await this.getResource(`/beers`);
            return beers.map(this._transformBeer);
        }

        else {
            const beers = await this.getResource(`/beers?beer_name=${term}`);
            return beers.map(this._transformBeer);
        }
    }

    _transformBeer(beer) {
        return {
            label: beer.name,
            description: beer.description,
            img: beer.image_url,
            id: beer.id
        };
    }
}