toolslist = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
materialslist = ['wooden','stone','iron','golden','diamond','netherite']

begin = "event.remove({output: 'aquaculture:"
end = "'})"

for material in materialslist:
    for tool in toolslist:
        print('{}{}_{}{}'.format(begin, material, tool, end))
#['wooden','stone','iron','golden','diamond','netherite'] vanilla
#['certus_quartz','nether_quartz']
#['neptunium']
