import React from 'react';
import Template from './film-component.template';
import User from '../../models/User';

/*  Componente que muestra una película */
class FilmComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            modalShow: false,
            allowRent: false,
            allowEndRent: true,
            typeModal: "",
            days: 0,
            total: 0
        }

        this.goToDetail = this.goToDetail.bind(this);
        this.rent = this.rent.bind(this);
        this.onHide = this.onHide.bind(this);
        this.confirmRent = this.confirmRent.bind(this);
        this.confirmEndRent = this.confirmEndRent.bind(this);
        this.endRent = this.endRent.bind(this);
        this.watchFilm = this.watchFilm.bind(this);
    }

    componentDidMount() {
        let url = new URL(document.location.href);

        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        if(user.rentFilms.length > 0) {
            for(var i = 0; i < user.rentFilms.length; i++){
                if(user.rentFilms[i].id === this.props.film.id){
                    this.setState(function() {
                        return {
                          modalShow: false,
                          allowRent: true,
                          allowEndRent: false
                        }
                    });

                    break;
                }
            }
        }
    }

    goToDetail() {
        let url = new URL(document.location.href);

        this.props.history.push({
          pathname: '/filmDetail',
          search: '?username='+url.searchParams.get("username")+'&id='+this.props.film.id+'&isRent='+this.props.isRent
        })
    }

    rent() {
        this.setState(function(){
            return {
                modalShow: true,
                typeModal: "rent" 
            }
        });
    }

    endRent() {
        let url = new URL(document.location.href);

        var user = JSON.parse(localStorage.getItem(url.searchParams.get("username")));

        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1;
        var currentYear = currentDate.getFullYear();
        var date = currentDay + "/" + currentMonth + "/" + currentYear;

        var days;
        var total;

        for(let i = 0; i < user.rentFilms.length; i++) {
            if(user.rentFilms[i].id.toString() === this.props.film.id.toString()) {
                days = User.compareDates(user.rentFilms[i].startDate, date);
                total = days * this.props.film.price;
                break;
            }
        }

        this.setState(function(){
            return {
                modalShow: true,
                typeModal: "endRent",
                days: days,
                total: total
            }
        });
    }

    onHide() {
        this.setState(function(){
            return {
              modalShow: false
            }
        });
    }

    confirmEndRent() {
        let url = new URL(document.location.href);

        User.deleteRentFilm(this.props.film, url.searchParams.get("username"));

        this.setState(function() {
            return {
              modalShow: false,
              allowRent: false,
              allowEndRent: true
            }
        });
    }

    confirmRent() {
        let url = new URL(document.location.href);

        User.addRentFilm(this.props.film, url.searchParams.get("username"));

        this.setState(function() {
            return {
              modalShow: false,
              allowRent: true,
              allowEndRent: false
            }
        });
    }

    watchFilm() {
        let url = new URL(document.location.href);

        this.props.history.push({
          pathname: '/watchFilm',
          search: '?username='+url.searchParams.get("username")+'&id='+this.props.film.id
        })
    }

    render () {
        let props = {
            film: this.props.film,
            goToDetail: this.goToDetail,
            isRent: this.props.isRent,
            rent: this.rent,
            modalShow: this.state.modalShow,
            onHide: this.onHide,
            confirmRent: this.confirmRent,
            allowRent: this.state.allowRent,
            allowEndRent: this.state.allowEndRent,
            endRent: this.endRent,
            typeModal: this.state.typeModal,
            confirmEndRent: this.confirmEndRent,
            total: this.state.total,
            days: this.state.days,
            myFilms: this.props.myFilms,
            watchFilm: this.watchFilm
        }

        return Template({ ...props });
    }
}

export default FilmComponent;