'use strict';

(($) => {
    $(document).ready(() => {
        const NOTES_CONTAINER_CLASS = 'notes__container';
        const CREATE_BUTTON_CLASS = 'create-note';
        const notesContainer = $(`.${NOTES_CONTAINER_CLASS}`);
        const createNoteBtn = $(`.${CREATE_BUTTON_CLASS}`);
        const notes = notesContainer.notes();
        createNoteBtn.on('click', async () => {
            await notes.createNote('');
        })
    });
})(jQuery);
