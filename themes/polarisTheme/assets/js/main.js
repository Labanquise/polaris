//Populate IN => OUT onclick
function generate()
{
    var name = [document.getElementById("in_name") , document.getElementById("out_name")];
    var func = [document.getElementById("in_func") , document.getElementById("out_func")];
    var email = [document.getElementById("in_email") , document.getElementById("out_email")];
    var tel = [document.getElementById("in_tel") , document.getElementById("out_tel")];

    name[1].textContent = name[0].value;
    func[1].textContent = func[0].value;
    email[1].textContent = email[0].value;
    tel[1].textContent = tel[0].value;
}

function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};