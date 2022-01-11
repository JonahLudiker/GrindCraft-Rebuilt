onEvent('recipes', event => {
    //remove normal book recipe
    event.remove({output: 'ars_nouveau:novice_spell_book'})
    event.shaped('ars_nouveau:novice_spell_book', ['glg','gbg','glg'], {g: 'minecraft:golden_ingot',l:'minecraft:lapis_lazuli',b:'minecraft:book'})
})
