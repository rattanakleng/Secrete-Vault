$(document).ready(function () {
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

        $.ajax("/api/password/post", {
            type: "POST",
            data: newPassword
        })
            .then(function () {
                console.log("Password is added");
                location.reload();
            })
        // Another way to write using build in jquery 
        // $.post("/api/posts",newPassword,function(){
        //     console.log("Password is added");
        // })
    });


    // Delete a password
    $(document).on("click", "#delete-password", function () {
        // event.preventDefault();
        // console.log(event.target);
        const dataId = $(this).attr("data-id");
        $.ajax({
            method: "DELETE",
            url: "/api/password/delete/" + dataId
        }).then(function () {
            location.reload();
        })
    });

    // Updating a password

    $(document).on("click", "#update-password", function (event) {

        const dataId = $(this).attr("data-id");
        location.href = "/update-password/" + dataId;

    })

    // Call Api to update password

    $("#update-password").on("click", function () {

        let newPassword = {
            name: $("#input-name").val().trim(),
            link: $("#input-link").val().trim(),
            username: $("#input-username").val().trim(),
            password: $("#input-password").val().trim(),
            description: $("#input-description").val().trim()
        }

        let id = $("#updateId").val();
        // alert(id);
        console.log(id);
        $.ajax("/api/password/update/" + id, {
            type: "PUT",
            data: newPassword
        }).then(function () {
            // alert ("Data is updated");
            location.href = "/view-password";
        })

        // Another way to write using build in jquery 
        // $.post("/api/posts",newPassword,function(){
        //     console.log("Password is added");
        // })
    });







    // function handleDeletePassword() {
    //     let currentPassword = $(this)
    //     .parent()
    //     .parent()
    //     .data("passwords");
    //     deletePassword(currentPassword.id);
    // }
    //Function does an API call to delete password
    // $("#edit-password").on("click", function() {

    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/passwords/2"
    //     }).then(function() {
    //         alert("password is deleted");
    //     })

})






