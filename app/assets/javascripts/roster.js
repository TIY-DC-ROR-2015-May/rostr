$(document).on("ready", function() {
  $("#roster tbody").sortable()

  $("button").on("click", function() {
    var sort_order = $("#roster tbody").sortable("serialize", { key: "player_id" })

    $.ajax(window.location + "/reorder", {
      method: "POST",
      data: {
        order: sort_order
      }
    })
  })
})