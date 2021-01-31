$(".input").on("submit", function (event) {

    event.preventDefault();


    let newPassword = {
        name: $("#input-name").val().trim(),
        link: $("#input-link").val().trim(),
        username: $("#input-username").val().trim(),
        password: $("#input-password").val().trim(),
        description: $("#input-description").val().trim()
    }

    console.log(newPassword);

    // $.ajax("/api/posts", {
    //     type: "POST",
    //     data: newPassword
    // })
    //     .then(function () {
    //         console.log("Password is added");
    //         // location.reload();
    //     })

        $.post("/api/posts",newPassword,function(){
            console.log("Password is added");
        })
})
