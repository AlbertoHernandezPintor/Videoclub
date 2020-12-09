import React from 'react';
import Template from './AlertDimissible-component.template'

/*  Componente que consiste en una alerta camcelable                                    */
/*                                                                                      */
/*  Recibe el tipo de alerta que se necesite (Warning, danger, success...), el mensaje  */
/*  que debe salir por pantalla, y otras variables necesarias para la visualización     */
class AlertDimissible extends React.Component {
    render () {
        let props = {
            type: this.props.type,
            message: this.props.message,
            show: this.props.show,
            setShow: this.props.setShow
        };

        return (
            Template({ ...props })
        );
    }
}

export default AlertDimissible;