import { useState, useEffect } from 'react';

export default function FunctionalAPIExample() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`)
            .then(result => result.json())
            .then(data => setWeatherData(data.dataseries));
    }, []);

    return (
        <section>
            <h2>Functional Weather API</h2>
            <ul>
                {weatherData !== null && weatherData.map(data => <li key={data.timepoint}>
                    <dl>
                        <dt>timepoint</dt><dd>{data.timepoint}</dd>
                        <dt>cloudcover</dt><dd>{data.cloudcover}</dd>
                        <dt>seeing</dt><dd>{data.seeing}</dd>
                        <dt>transparency</dt><dd>{data.transparency}</dd>
                        <dt>lifted_index</dt><dd>{data.lifted_index}</dd>
                        <dt>rh2m</dt><dd>{data.rh2m}</dd>
                        <dt>temp2m</dt><dd>{data.temp2m}</dd>
                        <dt>prec_type</dt><dd>{data.prec_type}</dd>
                    </dl>
                </li>)}
            </ul>
        </section>
    );
}
