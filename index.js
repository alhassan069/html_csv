function getCsv() {

    var location = 'data:application/vnd.ms-excel;base64,';
    var excelTemplate = '<html> ' +
        '<head> ' +
        '<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/> ' +
        '</head> ' +
        '<body> ' +
        document.getElementById("html_input").value +
        '</body> ' +
        '</html>'
    window.location.href = location + window.btoa(excelTemplate);

}