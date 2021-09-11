
import {NBSObject} from '@nbsolutions/object';

import {
    IVersion,
    IApplication,
    IApplicationConfig
} from '@nbsolutions/interfaces';
import Version from '@nbsolutions/version';

export class Application<TApplicationConfig extends IApplicationConfig = IApplicationConfig> extends NBSObject implements IApplication<TApplicationConfig> {
    private $config: TApplicationConfig;

    public getName(): string {
        return '';
    }

    public getConfig(): TApplicationConfig {
        return this.$config;
    }

    public getVersion(): IVersion {
        return Version.parse('0.0.0');
    }
}
