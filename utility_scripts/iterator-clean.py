toolslist = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
materialslist = ['neptunium']

for material in materialslist:
    for tool in toolslist:
        print('{}_{}'.format(material, tool))
