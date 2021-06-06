
from girder.api import access
from girder.api.rest import Resource, filtermodel, RestException

from girder.api.describe import Description, autoDescribeRoute
from girder.constants import SortDir, AccessType
from ..models.user_module import UserModule as UserModuleModel

from girder import logprint

class UserModule(Resource):
    def __init__(self):
        super(UserModule, self).__init__()
        self.resourceName = 'user_module'
        self.route('GET', (), self.list_userModules)
        self.route('GET', (':id',), self.get_userModule)
        self.route('POST', (), self.create_userModule)
        self.route('PUT', (':id',), self.update_userModule)
        self.route('DELETE', (':id',), self.delete_userModule)

        self.model = UserModuleModel()

    @access.user
    @autoDescribeRoute(
        Description("Get all userModules")
    )
    def list_userModules(self):
        list = []
        for userModule in self.model.list():
            list.append(userModule)
        logprint(list)
        return list

    @access.user
    @autoDescribeRoute(
        Description('Get a userModule')
            .modelParam('id', 'ID of the userModule', model=UserModuleModel)
            .errorResponse('ID was invalid.')
    )
    def get_userModule(self, userModule, params):
        return userModule

    @access.user
    @autoDescribeRoute(
        Description('Create a new userModule.')
            .responseClass('userModule')
            .param('name', 'A variable', required=True)
            .param('url', 'A variable', required=True)
            .errorResponse('You are not authorized to create reports.', 403)
    )
    def create_userModule(self, name, url):
        user = self.getCurrentUser()

        return self.model.create(
            name, url = url, creator=user, save=True
        )

    @access.user
    @autoDescribeRoute(
        Description('Update a userModule')
            .modelParam('id', 'ID of the userModule', model=UserModuleModel)
            .param('name', 'A variable', required=True)
            .param('url', 'A variable', required=True)
    )
    def update_userModule(self, userModule, name, url):
        user = self.getCurrentUser()
        if name is not None:
            userModule['name'] = name
        if url is not None:
            userModule['url'] = url

        userModule = self.model.update(userModule)

        return userModule

    @access.user
    @autoDescribeRoute(
        Description('Delete an existing userModule.')
            .modelParam('id', 'The report ID', model=UserModuleModel)
            .errorResponse('ID was invalid.')
            .errorResponse('Admin access was denied for the report.', 403)
    )
    def delete_userModule(self, userModule, params):
        logprint(userModule)
        self.model.remove(userModule)
        return userModule['_id']
