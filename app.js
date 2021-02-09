var magicContainer = document.getElementById("magic")


function generateValues() {
    var rowNum = 0;
    var descNum = 0;
    magicContainer.innerHTML = ""
    var size = document.getElementById("magic-size").value
    for (let i = 0; i < size; i++) {
        var trow = document.createElement("tr")
        rowNum++
        descNum = 0
        for (let j = 0; j < size; j++) {
            descNum++
            var td = document.createElement("td")
            td.setAttribute("id", `${rowNum}-${descNum}`)
            trow.appendChild(td)
        }
        magicContainer.appendChild(trow)
    }
}
function setValues() {
    let values = 1

    var size = document.getElementById("magic-size").value
    let addSize = parseInt(size) + 1

    rowNum = 1
    descNum = addSize / 2

    boxRow = rowNum;
    boxDesc = descNum

    let box = document.getElementById(`${rowNum}-${descNum}`)
    
    console.log(boxRow,boxDesc)
    box.innerHTML = 1

    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {

            values++

            if (rowNum - 1 < 1) {

                rowNum = rowNum + parseInt(size) - 1

                if (descNum + 1 > size) {
                    descNum = 1
                }
                else {
                    descNum = descNum + 1
                }


                if (document.getElementById(`${rowNum}-${descNum}`).innerHTML != '') {
                    rowNum = boxRow + 1
                    descNum = boxDesc
                    document.getElementById(`${rowNum}-${descNum}`).innerHTML = values
                }
                else {
                    document.getElementById(`${rowNum}-${descNum}`).innerHTML = values
                }
                boxRow = rowNum
                boxDesc = descNum


            }
            else {
                rowNum = rowNum - 1

                if (descNum + 1 > size) {
                    descNum = 1
                }
                else {
                    descNum = descNum + 1
                }


                if (document.getElementById(`${rowNum}-${descNum}`).innerHTML != '') {
                    rowNum = boxRow + 1
                    descNum = boxDesc
                    console.log(rowNum, descNum)
                    if (document.getElementById(`${rowNum}-${descNum}`) != null) {

                        document.getElementById(`${rowNum}-${descNum}`).innerHTML = values
                    }

                }
                else {

                    document.getElementById(`${rowNum}-${descNum}`).innerHTML = values
                }
                boxRow = rowNum
                boxDesc = descNum

            }

        }

    }
}

function isOdd(value) {
    if (value % 2 == 0)
        return false;
    else
        return true;
}

function generate() {
    var size = document.getElementById("magic-size").value
    if (isOdd(size)) {
        if (size > 1) {
            generateValues()
            setValues()
        }
        else{
            alert("use higher number")
        }
    }
    else {
        alert("only odd numbers are supported")
    }
    document.getElementById("magic-size").value = ''
}
