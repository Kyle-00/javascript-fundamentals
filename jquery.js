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

$('#loadProfileBtn').on('click', function() {
            $('#fetchMessage').html('<i class="fa-solid fa-circle-notch fa-spin mr-1"></i> Fetching data...')
                .removeClass().addClass('mt-4 text-sm font-medium text-center text-slate-500');
            
            var dataUrl = 'https://jsonplaceholder.typicode.com/users/2';
            
            fetchPayload(dataUrl, 
                function(data) {
                    $('#displayUsername').text(data.username);
                    $('#displayEmail').text(data.email);
                    
                    $('#userDataDisplay').removeClass('hidden').addClass('block animate-fade-in');
                    
                  
                    $('#fetchMessage').html('<i class="fa-solid fa-circle-check mr-1"></i> Data rendered successfully!')
                        .removeClass().addClass('mt-4 text-sm font-medium text-center text-emerald-600');
                },
                function(xhr, status, error) {
                  
                    $('#fetchMessage').html('<i class="fa-solid fa-circle-exclamation mr-1"></i> Failed to fetch data.')
                        .removeClass().addClass('mt-4 text-sm font-medium text-center text-rose-600');
                    console.error("Fetch error: ", error);
                }
            );
        });