(() => {
    const refs = {
        openModalBtn: document.querySelector('[menu-mobile-modal-open]'),
        closeModalBtn: document.querySelector('[menu-mobile-modal-close]'),
        modal: document.querySelector('[menu-mobile-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();