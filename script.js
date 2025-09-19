function fiction() {
    var choice = prompt("Enter your choice number\n 1.Frozen\n 2.Beuty and the beast\n 3.alladin Adventures");

    if (choice == "1") {
        item++;
        alert("Hooray! Succesfully added a frozen book");
    }
    if (choice == "2") {
        item++;
        alert("Hooray! Succesfully added a Buety and The beast book");
    } else
        if (choice == "3") {
            item++;
            alert("Hooray! Succesfully added a Alladin Adventures book");
        }
}
function nonfiction() {
    var choice = prompt("Enter your choice number\n 1.Basic english\n 2.basic maths\n 3 guide of the human body");

    if (choice == "1") {
        item++;
        alert("Hooray! Succesfully added a english boook");
    }
    if (choice == "2") {
        item++;
        alert("Hooray! Succesfully added a math book");
    } else
        if (choice == "3") {
            item++;
            alert("Hooray! Succesfully added a  guide to human body book");
        }
}