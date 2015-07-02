$(document).on("ready", function() {
  $("#roster tbody").sortable()

  $("button").on("click", function() {
    var sort_order = $("#roster tbody").sortable("serialize")

    console.log("sort_order:", sort_order)

    $.ajax(window.location + "/reorder", {
      method: "POST",
      data: sort_order,
      error: function() { 
        alert("Mistakes were made")
      }
    })
  })

  $(".player-name").on("click", function() {
    var current_name = $(this).text()
    var input = $("<input type='text'>").val(current_name)

    $(this).replaceWith(input)
    input.focus()

    input.on("blur", function() {
      var updated_name = $(this).val()
      $(this).replaceWith(updated_name)
      alert(updated_name)
    })

    console.log("name", current_name)
  })
})