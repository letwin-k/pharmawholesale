function updateLanguage() {
    let selectedLang = document.getElementById("language").value; //variable named "selectedLang" is assigned the value of the currently selected option i.e. the element with id="language"
    document.getElementById("selected-lang").textContent = selectedLang; //find the element with id="selected-lang" and update its text content to match the value stored in selectedLang
}

// the "updateLanguage()" function updates the text content of the element with id="selected-lang"