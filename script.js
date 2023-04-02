let kaat = "";
let jawab = "";
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById('question').value = string;
        }
        else if (e.target.innerHTML == '<') {
                string[string.length - 1] = "";
                string.length = string.length - 1;
                document.getElementById('answer').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.getElementById('answer').value = string;
            document.getElementById('question').value = string;
        }
        else {
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.getElementById('question').value = string;
                jawab = eval(string);
                document.getElementById('answer').value = jawab;
        }
    })
})
