$(function () {
  pokedex("https://pokeapi.co/api/v2/pokemon/");

  $(".morePokemons").click(function (event) {
    event.preventDefault();
    pokedex(event.target.href);
  });

  $(".card-deck").on("click", ".moreInfo", function (event) {
    event.preventDefault();
    pokemon(event.target.href);
  });
});

function pokedex(url) {
  $.ajax({
    url: url,
  })
    .done(function (data) {
      const pokeString = data.results.map(function (pokemon) {
        return `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text"><a href="${pokemon.url}" class="moreInfo">¡Quiero saber más
          de este pokémon!</a></p>
        </div>
      </div>`;
      });
      $(".card-deck").append(pokeString.join(""));
      $(".morePokemons").attr("href", data.next);
    })
    .fail(function (error) {
      console.log(error);
    });
}

function pokemon(url) {
  $.ajax({
    url: url,
  })
    .done(function (data) {
      $(".modal-title").html(data.name);
      const types = data.types.map((t) => t.type.name);
      const typesHtml = types.map((type) => `<li>${type}</li>`);
      $(".modal-body").append(`<ul>${typesHtml.join("")}</ul>`);

      const abilities = data.abilities.map((a) => a.ability.name);
      const abilityHtml = abilities.map((ability) => `<li>${ability}</li>`);
      $(".modal-body").append(`<ul>${abilityHtml.join("")}</ul>`);

      const movements = data.moves.splice(0, 5).map((m) => m.move.name);
      const moveHtml = movements.map((move) => `<li>${move}</li>`);
      $(".modal-body").append(`<ul>${moveHtml.join("")}</ul>`);

      $(".modal").modal("show");
    })
    .fail(function (error) {
      console.log(error);
    });
}
