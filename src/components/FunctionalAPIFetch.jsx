import { useState, useEffect } from "react";

export default function FunctionalAPIFetch () {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(result => result.json())
            .then(data => setFilms(data));
    }, []);

    return (
        <section>
            <h2>Functional Movie List</h2>
            {films.length === 0 && <p>Loading...</p>}
            {films.length > 0 && <ul>
                {films.map(film => <li key={film.id}>
                    {film.title} ({film.original_title})
                </li>)}
            </ul>}
        </section>
    );
}
