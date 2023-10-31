function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    if (skillsMemberValueLength > 0) {
        skills.innerHTML = skillsMemberValue;
    } else {
        skills.innerHTML = "Skills";
    }
}