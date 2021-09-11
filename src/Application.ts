
import {NBSObject} from '@nbsolutions/object';

import {
    IVersion,
    IApplication,
    IApplicationConfig,
    ILoggerManager
} from '@nbsolutions/interfaces';
import Version from '@nbsolutions/version';
import {LoggerManager} from '@nbsolutions/logger';

export class Application<TApplicationConfig extends IApplicationConfig = IApplicationConfig> extends NBSObject implements IApplication<TApplicationConfig> {
    private $config: TApplicationConfig;
    private $lm: ILoggerManager;

    public getName(): string {
        return '';
    }

    public getConfig(): TApplicationConfig {
        return this.$config;
    }

    public getVersion(): IVersion {
        return Version.parse('0.0.0');
    }

    protected _createLoggerManager(): ILoggerManager {
        return new LoggerManager();
    }

    // public getLoggerManager(): ILoggerManager {
    //     return this.$lm;
    // }
}
