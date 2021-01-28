document.addEventListener("DOMContentLoaded", function (event) {
    restore_options();
    document.getElementById("saveButton").addEventListener("click", save_options);
});

var settings = null;

function save_options() {
    var linkFormatValue = document.getElementById("helsinkiCallRegEx").value;
    var linkTextFormatValue = document.getElementById("helsinkiCallProtocol").value;
    chrome.storage.local.set({
        helsinkiCallRegEx: linkFormatValue,
        helsinkiCallProtocol: linkTextFormatValue,
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById("status");
        status.textContent = "Options Saved";
        setTimeout(function () {
            status.innerHTML = "&nbsp;";
        }, 750);
    });
}


function restore_options() {
    chrome.storage.local.get({
        helsinkiCallRegEx: "(([\+][0-9]{1,3})|([0-9])+)?[\s]?(([0-9])+[\s]?){6,20}",
        helsinkiCallProtocol: "tel:",
    }, function (items) {
        settings = items;
        document.getElementById("helsinkiCallRegEx").value = items.helsinkiCallRegEx;
        document.getElementById("helsinkiCallProtocol").value = items.helsinkiCallProtocol;
    });
}


