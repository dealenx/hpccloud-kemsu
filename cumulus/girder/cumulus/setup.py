from setuptools import setup, find_packages

setup(
    name='cumulus-plugin',
    version='0.1.0',
    description='REST based creation/management of clusters in EC2',
    packages=find_packages(),
    install_requires=[
      'girder>=3.0.0a5',
      'celery==5.2.2'
    ],
    entry_points={
      'girder.plugin': [
          'cumulus_plugin = cumulus_plugin:CumulusPlugin'
      ]
    }
)
