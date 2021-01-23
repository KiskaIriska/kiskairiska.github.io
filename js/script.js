const form = document.forms[1];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);

    if ((data.get("textMessage") == "") || (data.get("login") == "") || (data.get("email") == "")) {
        Swal.fire("Ошибка!", "Вы заполнили не все поля.", "error");
    } else {
        Swal.fire("Успешно!", "Скоро мы вам ответим.", "success");
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