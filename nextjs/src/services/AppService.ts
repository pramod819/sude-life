import appConfig from '../appConfig'

export default class AppService implements IAppService {
    public configuration: IAppConfig = appConfig as IAppConfig
}
