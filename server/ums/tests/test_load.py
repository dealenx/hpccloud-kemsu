import pytest

from girder.plugin import loadedPlugins


@pytest.mark.plugin('ums')
def test_import(server):
    assert 'ums' in loadedPlugins()
