import React, { Component } from 'react';

class ClassWeatherInfo extends Component {

    constructor() {
        super();

        this.state = {
            weatherData: []
        };
    }

    // Check the lifecycle here: https://miro.medium.com/v2/resize:fit:4516/1*552z6hbX_b648DjpTLHZNg.png
    componentDidMount() {
        fetch(`https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`)
        .then(result => result.json())
        .then(result => {
            console.log('API Result:', result);
            this.setState(prev => ({
                ...prev,
                weatherData: result.dataseries
            }));
        });
    }

    render() {
        return (

            <section>
                <h2>Class-Based Weather Info Component</h2>
                {this.state.weatherData.length === 0 && <p>Loading...</p>}
                {this.state.weatherData.length > 0 && (
                    <ul>
                        {this.state.weatherData.map((data, index) => (

                            <li key={index}>
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
                            </li>

                        ))}
                    </ul>
                )}
            </section>

        );
    }

}

export default ClassWeatherInfo;