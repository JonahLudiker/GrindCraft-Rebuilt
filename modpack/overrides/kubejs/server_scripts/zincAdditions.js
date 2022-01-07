onEvent('recipes', event => {
  // Remove Chain recipe, replace with zinc components
  event.remove({output: 'minecraft:chain'})
  event.shaped('minecraft:chain',  ['n','i','n'], {n: 'create:zinc_nugget', i: 'create:zinc_ingot' })
  //Replace shop sign recipe ingredients with zinc
  event.remove({output: 'buildersaddition:shop_sign_wood'})
  event.shaped('buildersaddition:shop_sign_wood', ['nn','ss','ss'], {n: 'create:zinc_nugget', s: '#minecraft:wooden_slabs'})
})
