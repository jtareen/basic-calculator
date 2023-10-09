var string = "";

function xyz(element) {
    let text = element.innerHTML;
    let result;

    switch (text) {
        case 'AC':
            string = "";
            break;

        case 'del':
            string = string.slice(0, -1);
            break;

        case '=':
            try {
                result = eval(string);
                string = "";
                string = string + result;
            }
            catch {
                string = "";
                alert("Invalid opertaion");
            }
            break;

        default:
            string += text;
            break;
    }
    let x = document.getElementById('output');
    x.innerHTML = string;
}