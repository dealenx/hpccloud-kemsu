/**
 * @class ExampleComponent
 */
import * as React from 'react';
import './ExampleComponent.css';
export interface Props {
    /**
     * Simple text prop
     **/
    text: string;
}
/** My First component */
export declare class ExampleComponent extends React.Component<Props> {
    render(): JSX.Element;
}
export default ExampleComponent;
