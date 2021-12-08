function saveDetails() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value

    if(fname != null && lname != null && fname != 'null' && lname != 'null') {
        localStorage.setItem('fname', fname)
        localStorage.setItem('lname', lname)
        localStorage.setItem('setupq', true)
        localStorage.setItem('amountOfData', 0)
        localStorage.setItem('noofoentries_tdl', 0)
        location.replace('dashboard.html')
    }
}