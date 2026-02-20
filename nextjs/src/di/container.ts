import Bottle from 'bottlejs'
import LoggerService from '../services/LoggerService'
import AppService from '../services/AppService'
import ApiService from '../services/ApiService'
import PagesService from '../services/api/PagesService'
import PaginationService from '../services/api/PaginationService'

declare module 'bottlejs' {
    interface IContainer {
        loggerService: ILoggerService
        appService: IAppService
        apiService: IApiService
        pagesService: IPagesService
        paginationService: IPaginationService
    }
}

const bottle = new Bottle()

bottle.service('appService', AppService)
bottle.service('loggerService', LoggerService, 'appService')
bottle.service('apiService', ApiService, 'appService')
bottle.service('pagesService', PagesService, 'apiService', 'appService')
bottle.service(
    'paginationService',
    PaginationService,
    'apiService',
    'appService'
)

export default bottle.container
