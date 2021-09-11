
// import * as React from 'react';
import {
    IApplicationConfig,
    IVersion,
    ILoggerManager
} from '@nbsolutions/interfaces';
import {Application} from './Application';
import {ViewComponent, IViewComponentProps, IViewComponentState} from '@nbsolutions/view-component';

export interface IApplicationProps<TApplicationConfig extends IApplicationConfig = IApplicationConfig> extends IViewComponentProps {
    controller: Application<TApplicationConfig>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationState extends IViewComponentState {}

export abstract class ApplicationView<
    TApplicationConfig extends IApplicationConfig = IApplicationConfig,
    TApplicationProps extends IApplicationProps<TApplicationConfig> = IApplicationProps<TApplicationConfig>,
    TApplicationState extends IApplicationState = IApplicationState
> extends ViewComponent<TApplicationProps, TApplicationState> {
    private $lm: ILoggerManager;
    
    public constructor(props: TApplicationProps) {
        super(props);
    }

    protected abstract _getInitialState(props: TApplicationProps): TApplicationState;

    public getName(): string {
        return this.props.controller.getName();
    }

    public getConfig(): TApplicationConfig {
        return this.props.controller.getConfig();
    }

    public getVersion(): IVersion {
        return this.props.controller.getVersion();
    }
}
