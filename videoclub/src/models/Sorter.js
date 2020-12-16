/*  Clase ordenador                   */
class Sorter {

    static sortByDateAsc(films) {
        return films.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0)); 
    }

    static sortByDateDesc(films) {
        return films.sort((a,b) => (a.year > b.year) ? -1 : ((b.year > a.year) ? 1 : 0)); 
    }

    static sortByBestRating(films) {
        return films.sort((a,b) => (a.stars > b.stars) ? -1 : ((b.stars > a.stars) ? 1 : 0)); 
    }

    static sortByWorstRating(films) {
        return films.sort((a,b) => (a.stars > b.stars) ? 1 : ((b.stars > a.stars) ? -1 : 0)); 
    }

    static sortByPriceAsc(films) {
        return films.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)); 
    }

    static sortByPriceDesc(films) {
        return films.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0)); 
    }
}

export default Sorter;