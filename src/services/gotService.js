export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
            throw new Error(`xxx ${url} status ${res.status}`)
        }
    
        return await res.json();
    }
    getAllCharacters() {
        return this.getResourse('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }
    getAllHouses(id) {
        return this.getResourse(`/houses/`);
    }
    getHouse(id) {
        return this.getResourse(`/houses/${id}`);
    }
    getAllBooks(id) {
        return this.getResourse(`/books/`);
    }
    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }
}
