$(document).on("ready", function() {
  $("#roster tbody").sortable()

  $("button").on("click", function() {
    var sort_order = $("#roster tbody").sortable("serialize")

    console.log("sort_order:", sort_order)

    $.ajax(window.location + "/reorder", {
      method: "POST",
      data: sort_order
    })
  })
})