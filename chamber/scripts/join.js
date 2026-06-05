document.addEventListener("DOMContentLoaded", () => {

    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    document.querySelectorAll("[data-modal]").forEach(button => {
        button.addEventListener("click", () => {
            const modal = document.getElementById(button.dataset.modal);
            if (modal) {
                modal.showModal();
            }
        });
    });

    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });

});
