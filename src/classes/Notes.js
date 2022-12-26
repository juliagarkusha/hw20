class Notes extends CRUD {
    constructor() {
        super('https://62054479161670001741b708.mockapi.io/api');
        this.notes = [];
    }

    async getAllNotes() {
        const list = await this.get('stickers');
        this.notes = list.map(item => new Note(item.description, item.id));
        return this.notes;
    }

    async updateNote(id, desc) {
        const updatedNote = await this.update(`stickers/${id}`, {description: desc});

        if (updatedNote) {
            this.notes = this.notes.map(note => {
                if (note.id === id) {
                    return new Note(updatedNote.description, note.id);
                }

                return note;
            });
        }

        return this.notes;
    }

    async removeNote(id) {
        await this.remove(`stickers/${id}`);
        this.notes = this.notes.filter(note => String(note.id) !== String(id));
        return this.notes;
    }

    async createNote(desc = '') {
        const newNote = await this.create('stickers', {description: desc});

        if (newNote) {
            this.notes.push(new Note(newNote.description, newNote.id));
        }

        return this.notes;
    }
}

(($) => {
    $.fn.notes = function () {
        $(document).on('click', '.sticker button', async (event) => {
            const id = $(event.target).parent().attr('id');
            const stickers = await notes.removeNote(id);
            renderStickers(stickers);
        })
        $(document).on('blur', '.sticker textarea', async (event) => {
            const id = $(event.target).parent().attr('id');
            const newValue = $(event.target).val();
            const stickers = await notes.updateNote(id, newValue);
            renderStickers(stickers);
        })

        const notes = new Notes();

        const renderStickers = (stickers) => {
            this.empty();
            stickers.forEach(sticker => {
                const $sticker = $(sticker.getMockup());
                this.append($sticker);
            })
        }
        this.createNote = async (desc) => {
            const stickers = await notes.createNote(desc);
            renderStickers(stickers);
        }

        notes.getAllNotes().then(stickers => {
            renderStickers(stickers);
        });

        return this;
    }
})(jQuery);
