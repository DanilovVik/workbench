function GetFormData() {
    let forms = document.getElementsByClassName('btn');
    for (let form of forms) {
        form.onclick = function() {
            let formID = form.parentNode.getAttribute("id");
            let formChooser = document.getElementById(formID);
            let inputs = formChooser.querySelectorAll('input');
            let dataOutput = new Array();
            dataOutput.push(formID);
            for (let input of inputs) {
                let attributeName = input.getAttribute("name");
                let fieldValue = input.value;
                dataOutput.push(attributeName + ": " + fieldValue);
            }
            console.log(dataOutput);
        }
    }
}
GetFormData();
