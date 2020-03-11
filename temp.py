from os import listdir
from shutil import copyfile

for img in listdir('res'):
    copyfile(f'res/{img}', f'res2/{img.lower()}')