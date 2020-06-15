$(function () {
  $(".change-devour").on("click", (event) => {
    const id = event.currentTarget.attributes[1].nodeValue;
    console.log(id);

    const newDevourState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(() => {
      console.log("changed devoured to", newDevourState);
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#add-burger").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });
});
