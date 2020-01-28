$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var devourState = {
      DEVOURED: newDevour
    };
    if ($(this)[0].innerText === "DEVOUR!") {
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
        location.reload();
      });
      $(this)
        .parent()
        .remove();
    }
  });

  $(".create-Burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
