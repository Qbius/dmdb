#!/usr/bin/python

from shutil import copyfile
from os import listdir
from os.path import normpath, join
*location_list, publishfile = normpath(__file__).replace('\\', '/').split('/')
location = join(*location_list)
[copyfile(join(location, file), join(location, '..', file)) for file in listdir(location) if file != publishfile]