
import {NBSObject, INBSObject} from '@nbsolutions/object';

import * as React from 'react';

export abstract class ViewComponent<TProps extends Record<string, any> = Record<string, never>, TState extends Record<string, never> = Record<string, never>> extends React.Component<TProps, TState> implements INBSObject {

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

for (let i in NBSObject.prototype) {
    (ViewComponent.prototype as any)[i] = (NBSObject.prototype as any)[i];
}
