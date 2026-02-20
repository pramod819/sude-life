export default class LoggerService implements ILoggerService {
    private static LOGGER_PREFIX = 'BTE'
    private static LEVEL_ORDER: ILogLevel[] = [
        'ALL',
        'DEBUG',
        'INFO',
        'WARNING',
        'ERROR',
    ]

    private logLevel: ILogLevel
    private logger: Console
    private levelPriority: number

    constructor(appService: IAppService, logger: Console = console) {
        this.logger = logger
        this.logLevel = appService.configuration.LOG_LEVEL || 'INFO'
        this.levelPriority = LoggerService.LEVEL_ORDER.indexOf(this.logLevel)
        this.debug(
            `app config ${JSON.stringify(appService.configuration, null, 2)}`
        )
    }

    private call(level: ILogLevel, method: string, message: string) {
        if (this.levelPriority > LoggerService.LEVEL_ORDER.indexOf(level)) {
            return
        }
        this.logger[method](
            `[${LoggerService.LOGGER_PREFIX}][${level}] ${message}`
        )
    }

    public log(message) {
        this.call('INFO', 'log', message)
    }

    public warn(message) {
        this.call('WARNING', 'warn', message)
    }

    public error(message) {
        this.call('ERROR', 'error', message)
    }

    public debug(message) {
        this.call('DEBUG', 'debug', message)
    }
}
