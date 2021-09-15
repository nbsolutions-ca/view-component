[@nbsolutions/view-component - v0.0.0-alpha.3](../README.md) / [Exports](../modules.md) / [ViewComponent](../modules/ViewComponent.md) / ViewComponent

# Class: ViewComponent<TProps, TState\>

[ViewComponent](../modules/ViewComponent.md).ViewComponent

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IViewComponentProps`](../modules/ViewComponent.md#iviewcomponentprops)[`IViewComponentProps`](../modules/ViewComponent.md#iviewcomponentprops)<`never`\> |
| `TState` | extends [`IViewComponentState`](../modules/ViewComponent.md#iviewcomponentstate)[`IViewComponentState`](../modules/ViewComponent.md#iviewcomponentstate)<`never`\> |

## Hierarchy

- `Component`<`TProps`, `TState`\>

  ↳ **`ViewComponent`**

## Implements

- `INBSObject`

## Table of contents

### Constructors

- [constructor](ViewComponent.ViewComponent-1.md#constructor)

### Properties

- [context](ViewComponent.ViewComponent-1.md#context)
- [props](ViewComponent.ViewComponent-1.md#props)
- [refs](ViewComponent.ViewComponent-1.md#refs)
- [state](ViewComponent.ViewComponent-1.md#state)
- [contextType](ViewComponent.ViewComponent-1.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](ViewComponent.ViewComponent-1.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](ViewComponent.ViewComponent-1.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](ViewComponent.ViewComponent-1.md#unsafe_componentwillupdate)
- [\_getInitialState](ViewComponent.ViewComponent-1.md#_getinitialstate)
- [\_getUsableStyles](ViewComponent.ViewComponent-1.md#_getusablestyles)
- [componentDidCatch](ViewComponent.ViewComponent-1.md#componentdidcatch)
- [componentDidMount](ViewComponent.ViewComponent-1.md#componentdidmount)
- [componentDidUpdate](ViewComponent.ViewComponent-1.md#componentdidupdate)
- [componentWillMount](ViewComponent.ViewComponent-1.md#componentwillmount)
- [componentWillReceiveProps](ViewComponent.ViewComponent-1.md#componentwillreceiveprops)
- [componentWillUnmount](ViewComponent.ViewComponent-1.md#componentwillunmount)
- [componentWillUpdate](ViewComponent.ViewComponent-1.md#componentwillupdate)
- [forceUpdate](ViewComponent.ViewComponent-1.md#forceupdate)
- [getClassName](ViewComponent.ViewComponent-1.md#getclassname)
- [getSnapshotBeforeUpdate](ViewComponent.ViewComponent-1.md#getsnapshotbeforeupdate)
- [render](ViewComponent.ViewComponent-1.md#render)
- [setState](ViewComponent.ViewComponent-1.md#setstate)
- [shouldComponentUpdate](ViewComponent.ViewComponent-1.md#shouldcomponentupdate)

## Constructors

### constructor

• **new ViewComponent**<`TProps`, `TState`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IViewComponentProps`](../modules/ViewComponent.md#iviewcomponentprops)<`any`\>[`IViewComponentProps`](../modules/ViewComponent.md#iviewcomponentprops)<`never`\> |
| `TState` | extends [`IViewComponentState`](../modules/ViewComponent.md#iviewcomponentstate)<`any`\>[`IViewComponentState`](../modules/ViewComponent.md#iviewcomponentstate)<`never`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TProps` |

#### Overrides

React.Component&lt;TProps, TState\&gt;.constructor

#### Defined in

[src/ViewComponent.ts:17](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L17)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Inherited from

React.Component.context

#### Defined in

node_modules/@types/react/index.d.ts:473

___

### props

• `Readonly` **props**: `Readonly`<`TProps`\> & `Readonly`<`Object`\>

#### Inherited from

React.Component.props

#### Defined in

node_modules/@types/react/index.d.ts:498

___

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:504

___

### state

• **state**: `Readonly`<`TState`\>

#### Inherited from

React.Component.state

#### Defined in

node_modules/@types/react/index.d.ts:499

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

React.Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:455

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:711

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:743

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TProps`\> |
| `nextState` | `Readonly`<`TState`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:771

___

### \_getInitialState

▸ `Protected` `Abstract` **_getInitialState**(`props`): `TState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TProps` |

#### Returns

`TState`

#### Defined in

[src/ViewComponent.ts:28](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L28)

___

### \_getUsableStyles

▸ `Protected` **_getUsableStyles**(): [`IUsable`](../interfaces/IUsable.IUsable-1.md)

#### Returns

[`IUsable`](../interfaces/IUsable.IUsable-1.md)

#### Defined in

[src/ViewComponent.ts:24](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L24)

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:640

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

React.Component.componentDidMount

#### Defined in

[src/ViewComponent.ts:35](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L35)

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TProps`\> |
| `prevState` | `Readonly`<`TState`\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:682

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:697

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:726

___

### componentWillUnmount

▸ **componentWillUnmount**(): `void`

#### Returns

`void`

#### Overrides

React.Component.componentWillUnmount

#### Defined in

[src/ViewComponent.ts:41](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L41)

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TProps`\> |
| `nextState` | `Readonly`<`TState`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:756

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:490

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Implementation of

INBSObject.getClassName

#### Defined in

[src/ViewComponent.ts:31](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L31)

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TProps`\> |
| `prevState` | `Readonly`<`TState`\> |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:676

___

### render

▸ `Abstract` **render**(): `ReactNode`

#### Returns

`ReactNode`

#### Overrides

React.Component.render

#### Defined in

[src/ViewComponent.ts:29](https://github.com/nbsolutions-ca/view-component/blob/ee91856/src/ViewComponent.ts#L29)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `TState` \| (`prevState`: `Readonly`<`TState`\>, `props`: `Readonly`<`TProps`\>) => `TState` \| `Pick`<`TState`, `K`\> \| `Pick`<`TState`, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:485

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TProps`\> |
| `nextState` | `Readonly`<`TState`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:630
