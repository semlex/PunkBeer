import React, {Component} from 'react';
import SearchPanel from '../search-panel';
import CardsRow from '../cards-row';
import AppHeader from '../app-header';
import GetResource from '../../services/get-resourse';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            favs: [],
            filter: 'all',
            term:''
        }
        this.getResource = new GetResource();
        this.getData();
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onUpdateSearch = (newTerm) => {
        this.getData(newTerm);
        this.setState(({term}) => {
            return {
                term: newTerm,
            }
        });
    }

    onToggleFavourite = (id) => {
        this.setState(({data, favs}) => {
            const newElem = data.filter(elem => elem.id === id);
            if (favs.includes(newElem[0])) {
                newElem.important = false;
                const index = favs.findIndex(elem => elem === newElem[0]);

                const newArr = [...favs.slice(0, index), ...favs.slice(index + 1)];
                return {
                    favs: newArr
                }
            }
            else {
                newElem.important = true;
                const newArr = [...favs, ...newElem];
                return {
                    favs: newArr
                }
            }
        })
    }

    // getResource = async (term = '') => {
    //     if (term === '') {
    //         const request = await fetch('https://api.punkapi.com/v2/beers').then(res => res.json());
    //         return await request;
    //     }
        
    //     else {
    //         const request = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${term}`).then(res => res.json());
    //         return await request;
    //     }
    // }

    onBeerLoaded = (beer) => {
        this.setState({data: beer});
    }

    getData = (term = '') => {
        this.getResource.getBeer(term)
            .then(this.onBeerLoaded);
    }

    filterPost = (items, filter) => {
        const {favs, term} = this.state;

        if (filter === 'favs' && term === '') {
            return favs;
        }
        else if (filter === 'favs' && term !== '') {
            const visibleItems  = [];
            items.forEach(item => {
                if (favs.find(elem => elem.id === item.id)) {
                    item.favourite = true;
                    visibleItems.push(item);
                }
            });
            return visibleItems;
        }
        else {
            items.forEach(item => {
                if (favs.find(elem => elem.id === item.id)) {
                    item.favourite = true;
                }
                else {
                    item.favourite = false;
                }
            })
            return items;
        }
    }

    render() {
        const {data, filter} = this.state;
        let visibleCards = this.filterPost(data, filter);
        return (
            <div className = "app">
                <AppHeader 
                filter = {this.state.filter}
                onFilterSelect = {this.onFilterSelect}/>
                <SearchPanel 
                    term = {this.state.term}
                    onUpdateSearch = {this.onUpdateSearch}
                />
                <CardsRow 
                    cards = {visibleCards}
                    onToggleFavourite = {this.onToggleFavourite}/>
            </div>
        )
    }
}