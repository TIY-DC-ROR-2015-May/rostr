$(document).on("ready", function() {
  $(".name-input").hide()

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
    var input = $(this).find(".name-input")
    var display = $(this).find(".name-text")
    var current_name = display.text()
    var player_id = input.data("player-id")
      // $("<input type='text'>").val(current_name)

    input.val(current_name).show().focus()
    display.hide()

    input.on("blur", function() {
      display.text(input.val())
      input.hide()
      display.show()

      $.ajax("/players/" + player_id, {
        method: "PATCH",
        data: {
          name: input.val()
        },
        error: function() {
          alert("Failed to update player")
        }
      })
    })
  })
})