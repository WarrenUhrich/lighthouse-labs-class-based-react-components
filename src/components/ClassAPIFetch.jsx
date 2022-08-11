import { Component } from 'react';

class ClassAPIFetch extends Component {
    constructor() {
        super();

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(result => result.json())
            .then(data => this.setState({films: data}));
    }

    render() {
        return (
            <section>
                <h2>Class-Based Movie List</h2>
                {this.state.films.length === 0 && <p>Loading...</p>}
                {this.state.films.length > 0 && <ul>
                    {this.state.films.map(film => <li key={film.id}>
                        {film.title} ({film.original_title})
                    </li>)}
                </ul>}
            </section>
        );
    }
}

export default ClassAPIFetch;
