async function add_hw() {
    var i = 1
    var addToTableAUTO = true
    var table = document.getElementById("hw_table")
    var table_len = table.rows.length
    if(table_len == null || table_len == "null") {
        table_len = 0
    }
    var amountOfData  = localStorage.getItem("amountOfData")

    while(addToTableAUTO) {
        var row = table.insertRow(table_len).outerHTML = "<tr><td>"+ localStorage.getItem("hw_table_1_"+i) + "</td><td>"+ localStorage.getItem("hw_table_2_"+i) + "</td><td>"+ localStorage.getItem("hw_table_3_"+i) + "</td></tr>"
        i++
        if(i == amountOfData) { addToTableAUTO = false }
        await new Promise(resolve => setTimeout(resolve, 5))
    }
    
}

function set_hw() {
    var hwname = document.getElementById("name_sthw").value
    var duedatehwn = document.getElementById("due_date_sthw").value
    var tabledata = parseInt(localStorage.getItem("amountOfData"))
    var tbdatap1 = tabledata + 1
    localStorage.setItem("amountOfData", tbdatap1)
    localStorage.setItem("hw_table_1_"+ tbdatap1, hwname)
    localStorage.setItem("hw_table_2_"+ tbdatap1, duedatehwn)
}