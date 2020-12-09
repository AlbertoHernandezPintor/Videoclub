import React from 'react';
import Template from './film-component.template';

/*  Componente que muestra una película */
class FilmComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.goToDetail = this.goToDetail.bind(this);
    }

    goToDetail() {
        let url = new URL(document.location.href);

        this.props.history.push({
          pathname: '/filmDetail',
          search: '?username='+url.searchParams.get("username")+'&id='+this.props.film.id
        })
    }

    render () {
        let props = {
            film: this.props.film,
            goToDetail: this.goToDetail
        }

        return Template({ ...props });
    }
}

export default FilmComponent;