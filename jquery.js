$(document).ready(function(){
    $("#myForm").on("submit", function(e){
        e.preventDefault(); // Prevent form from submitting normally

        let formData =$(this).serialize(); // Serialize form data

        $.ajax({
            type: "POST",
            url:"https:/", // Replace with your API endpoint
            data: formData,
            success: function(response){
                $("#responseMessage").html("<p>Form submitted successfully!</p>")
                console.log(response)
            },
            error: function(xhr,status,error){
                $("#responseMessage").html("<p>There was an error submitting the form.</p>")
                console.error(error)
            }

        });
    })
})    