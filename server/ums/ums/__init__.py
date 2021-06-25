from girder import plugin
from girder.utility.model_importer import ModelImporter

from .rest.user_module import UserModule

class GirderPlugin(plugin.GirderPlugin):
    DISPLAY_NAME = 'Плагин UMS для HPCCLoud'

    def load(self, info):
        ModelImporter.registerModel('user_module', UserModule, plugin='ums')
        info['apiRoot'].user_module = UserModule()

