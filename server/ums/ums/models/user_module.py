from girder.constants import AccessType
from girder.models.model_base import AccessControlledModel, Model
from girder.exceptions import ValidationException
from girder.models.user import User
import datetime


class UserModule(Model):

    def __init__(self):
        super(UserModule, self).__init__()

    def initialize(self):
        self.name = 'userModule'

        self.exposeFields(level=AccessType.READ, fields={
            '_id', 'name', 'created', 'url',  'creatorId'})

    def validate(self, userModule):
        if not userModule['name']:
            raise ValidationException('Folder name must not be empty.', 'name')

        return userModule

    def list(self):
        for userModule in self.find():
            yield userModule

    def delete(self, userModule):
        self.remove(userModule)

    def update(self, userModule):
        return self.save(userModule)

    def create(self, name, url, creator=None, save=True):
        now = datetime.datetime.utcnow()

        userModule = {
            'name': name,
            'created': now,
            'url': url,
            'creatorId': creator['_id']
        }

        if save:
            userModule = self.save(userModule)

        return userModule
