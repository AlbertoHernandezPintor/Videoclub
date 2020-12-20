import React from 'react';
import Template from './rent-component.template';
import films from '../../assets/json/rentFilms.json';
import Sorter from '../../models/Sorter';

/*  Página en la que se muestran las péliculas disponibles para alquiler y la posibilidad de alquilarlas    */
class RentComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          films: films,
        }

        this.sortByDateAsc = this.sortByDateAsc.bind(this);
        this.sortByDateDesc = this.sortByDateDesc.bind(this);
        this.sortByBestRating = this.sortByBestRating.bind(this);
        this.sortByWorstRating = this.sortByWorstRating.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    }

    componentDidMount() {
        let url = new URL(document.location.href);
        if(sessionStorage.getItem(url.searchParams.get("username")) === null){
            this.props.history.push({
                pathname: '/error',
            })
        }
    }

    sortByDateAsc() {
        this.setState({
            films: Sorter.sortByDateAsc(films)
        })
    }

    sortByDateDesc() {
        this.setState({
            films: Sorter.sortByDateDesc(films)
        })
    }

    sortByBestRating() {
        this.setState({
            films: Sorter.sortByBestRating(films)
        })
    }

    sortByWorstRating() {
        this.setState({
            films: Sorter.sortByWorstRating(films)
        })
    }

    sortByPriceAsc() {
        this.setState({
            films: Sorter.sortByPriceAsc(films)
        })
    }

    sortByPriceDesc() {
        this.setState({
            films: Sorter.sortByPriceDesc(films)
        })
    }

    render () {
        let props = {
            rentFilms: this.state.films,
            history: this.props.history,
            sortByDateAsc: this.sortByDateAsc,
            sortByDateDesc: this.sortByDateDesc,
            sortByBestRating: this.sortByBestRating,
            sortByWorstRating: this.sortByWorstRating,
            sortByPriceAsc: this.sortByPriceAsc,
            sortByPriceDesc: this.sortByPriceDesc
        }

        return Template({ ...props });
    }
}

export default RentComponent;