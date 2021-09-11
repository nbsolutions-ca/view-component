
import {NBSObject, INBSObject} from '@nbsolutions/object';

import * as React from 'react';

export type IViewComponentProps<T = any> = Record<string, T>;
export type IViewComponentState<T = any> = Record<string, T>;

export abstract class ViewComponent<
    TProps extends IViewComponentProps = IViewComponentProps<never>,
    TState extends IViewComponentState = IViewComponentState<never>
> extends React.Component<TProps, TState> implements INBSObject {

    public constructor(props: TProps) {
        super(props);
        NBSObject.prototype.constructor.call(this);
        this.state = this._getInitialState(props);
    }

    protected abstract _getInitialState(props: TProps): TState;
    public abstract render(): JSX.Element;

    public getClassName(): string {
        return NBSObject.prototype.getClassName.call(this);
    }
}

// Think of this hack as multiple inheritence...
// we are extending from both NBSObject AND React.Component.
for (let i in NBSObject.prototype) {
    (ViewComponent.prototype as any)[i] = (NBSObject.prototype as any)[i];
}
