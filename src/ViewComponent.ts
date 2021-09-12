
import {INBSObject} from '@nbsolutions/interfaces';
import {NBSObject} from '@nbsolutions/object';
import { IUsable } from 'IUsable';

import * as React from 'react';

export type IViewComponentProps<T = any> = Record<string, T>;
export type IViewComponentState<T = any> = Record<string, T>;

export abstract class ViewComponent<
    TProps extends IViewComponentProps = IViewComponentProps<never>,
    TState extends IViewComponentState = IViewComponentState<never>
> extends React.Component<TProps, TState> implements INBSObject {
    private $styles: IUsable;

    public constructor(props: TProps) {
        super(props);
        NBSObject.prototype.constructor.call(this);
        this.state = this._getInitialState(props);
        this.$styles = this._getUsableStyles();
    }

    protected _getUsableStyles(): IUsable {
        return null;
    }

    protected abstract _getInitialState(props: TProps): TState;
    public abstract render(): JSX.Element;

    public getClassName(): string {
        return NBSObject.prototype.getClassName.call(this);
    }

    public componentDidMount(): void {
        if (this.$styles) {
            this.$styles.use();
        }
    }

    public componentWillUnmount(): void {
        if (this.$styles) {
            this.$styles.unuse();
        }
    }
}

// Think of this hack as multiple inheritence...
// we are extending from both NBSObject AND React.Component.
for (let i in NBSObject.prototype) {
    (ViewComponent.prototype as any)[i] = (NBSObject.prototype as any)[i];
}
