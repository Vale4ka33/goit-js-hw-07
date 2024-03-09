const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    const typingName = nameInput.value.trim();
    if (typingName === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = typingName;
    }
}
)
