function mysayhello(firstname, lastname, sex) {
    let man  = "Mr", woman = "Ms"; //local variable
    let honorific; // undefined local variable

    if (sex === man) {
        honorific = man; 
    } else {
        honorific = woman;
    }

    console.log("hello " + honorific + " " + firstname + " " + lastname);
}