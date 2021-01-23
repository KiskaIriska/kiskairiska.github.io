const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);

    if ((data.get("adress") == "") || (data.get("phone") == "")) {
        Swal.fire("Ошибка!", "пожалуйста заполните все поля", "error");
    } else {
        Swal.fire("Спасибо что написали нам", "Скоро мы вам ответим", "success");
    }
});

form.addEventListener("formdata", event => {
    const data = event.formData;

    console.log(data);

    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);
});