// priority: 0

var indivItems = [
	'tconstruct:copper_ingot'
]
let metals = [
	'tconstruct:copper'
]

onEvent('jei.hide.items', event => {
	// Hides items in indivItems list
	for(let i of indivItems){
		event.hide(i)
	}
})
