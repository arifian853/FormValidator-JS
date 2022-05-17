function validation() {
    var email = document.getElementById('email').value;
    var frontName = document.getElementById('frontName').value;
    var password = document.getElementById('password').value;

    if (email == "") {
        alert('Email tidak boleh kosong');
        return true;
    }
    if (frontName == "") {
        alert('Nama depan tidak boleh kosong');
        return true;
    }
    if (password == "") {
        alert('Password tidak boleh kosong');
        return true;
    }
    else {
        window.confirm("Terima kasih telah mengisi data");
        return false;
    }
}
    
