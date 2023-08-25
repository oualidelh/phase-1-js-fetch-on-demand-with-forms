const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = event.target.children[1].value;
        console.log(inputValue);
        event.target.reset();
        fetch(`http://localhost:3000/movies/${inputValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                title.innerText = `${title.textContent} : ${data.title}`;
                summary.innerText = `${summary.textContent} : ${data.summary}`;
            });
    });
}

document.addEventListener('DOMContentLoaded', init);