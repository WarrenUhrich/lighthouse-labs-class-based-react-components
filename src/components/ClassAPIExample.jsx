import { Component } from 'react';

export default class ClassAPIExample extends Component {
    state = {weatherData: null}

    componentDidMount() {
        fetch(`https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`)
            .then(result => result.json())
            .then(data => {
                this.setState({weatherData: data.dataseries});
            });
    }

    render() {
        return (
            <section>
                <h2>Class-based Weather API</h2>
                <ul>
                    {this.state.weatherData !== null && this.state.weatherData.map(data => <li key={data.timepoint}>
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
}
