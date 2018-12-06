



$(document).ready(function(){
    // init id
    $.id = 0
    
    //event listener on button
    $('form').on('click', "#btn", function(e){
        e.preventDefault()

        //get input value and assign each a unique id
        $.text = $('#inputValue').val()
        $.date = new Date()
        $.id += $.date.getTime()

        //check if input value if valid
    if($.text.length === 0 || $.text.length <= 2 ){
        alert("Pls Enter a task")
    }else{
        //print out input
        $('#content #to-do').append(
            $('<li>').append($.text).addClass("pl-5 bg-primary rounded-left py-2 my-2 text-white").attr('id', $.id));
        }

        //Animate
        $("#"+ $.id).hide().slideDown(60);

        //reset input field
        $('#inputValue').val('')

    });
       

        //delete item
        $("#to-do").on('click', 'li', function(e){
            e.preventDefault();
            //get the id of event item
            $.itemId = $(e.target).attr('id');

            // console.log($(this))

            // get the html and set it to the accomplished item
            $.deleteItemHtml = $('#'+($.itemId)).html();

            $('#content #done').append(
                $('<li>').append(
                    ` <i class="fas fa-check mr-4"></i>`).append( $.deleteItemHtml).addClass("pl-2 bg-success rounded-right py-2 my-2 text-white")
                );


            // delete item 
            $.deleteItem = $('#'+($.itemId))
                    
            $.deleteItem.remove('')
                    
        })


})







