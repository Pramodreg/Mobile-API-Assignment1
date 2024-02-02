function displayDetails(pokemon) { // function to generate details.
    var detailsPart = document.getElementById('pokemon-details'); //getting the details
    detailsPart.innerHTML = pokemondesc(pokemon); // setting the content using generated description from above function.

    var abilities = document.getElementById('abilities'); // for abilities getting container
    pokemon.abilities.forEach(function (ability) {
        var listItem = document.createElement('li'); // Creating list items
        listItem.textContent = ability.ability.name;
        listItem.addEventListener('click', async function () { // Using event listener.
            var abilityDetails = await getdata(ability.ability.url);
            alert(                                              // Showing details as a popup
                'Ability Name: ' + abilityDetails.name +
                '\nAbility Effect: ' + abilityDetails.effect_entries.find(function (entry) {
                    return entry.language.name === 'en';
                }).effect +
                '\nAbility Short Effect: ' + abilityDetails.effect_entries.find(function (entry) {
                    return entry.language.name === 'en';
                }).short_effect +
                '\nFlavor Text: ' + abilityDetails.flavor_text_entries.find(function (entry) {
                    return entry.language.name === 'en';
                }).flavor_text
            );
        });
        abilities.appendChild(listItem); //append the listItem to abilities
    });
}