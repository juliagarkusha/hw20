class Note {
    constructor(desc, id) {
        this.desc = desc;
        this.id = id;
    }

    getMockup() {
        return `
            <div class="sticker" id="${this.id}">
                <button>x</button>
                <textarea>${this.desc}</textarea>
            </div>
        `;
    } ;
}