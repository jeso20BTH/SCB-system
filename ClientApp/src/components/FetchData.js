import React, { Component } from 'react';
import './FetchData.css';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {
            born: [], loading: true, year: ["2016", "2017", "2018", "2019", "2020"], gender: ["1", "2"], searchstring: "halmstad"};
    }

    componentDidMount() {
        this.populateMunicipalityData();
    }

    static renderMunicipalityTable(born, year, gender, searchstring) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        {
                            year.map((year) =>
                                <th key={year} className='center'>{year}</th>
                                )
                        }
                    </tr>
                    <tr>
                        <th>Kommun</th>
                        {year.map((year) =>
                            <th key={year}>
                                <div className='split-cell'>
                                    {gender.map((gender) =>
                                        <span key={gender}>{(gender === "1") ? "Pojkar" : "Flickor"}</span>
                                    )}

                                </div>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {born.map(brn =>
                    
                        (brn.name.toLowerCase().includes(searchstring)) ? <tr key={brn.id}>
                            <td>{brn.name}</td>
                            {year.map((year) =>
                                <td key={year}>
                                    <div className='split-cell'>
                                        {gender.map((gender) =>
                                            <span key={gender}>{brn.born[year][gender]}</span>
                                        )}

                                    </div>
                                </td>
                            )}
                        </tr> : <></>
                    
                        
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderMunicipalityTable(this.state.born, this.state.year, this.state.gender, this.state.searchstring);
        return (
            <div>
                <h1 id="tabelLabel" >Antal f&#246;dda barn</h1>
                <p>Antal f&#246;dda barn mellan 2016 och 2020 per kommun uppdelat p&#229; pojkar och flickor.</p>
            {contents}
            </div>
        );
    }

    async populateMunicipalityData() {
        const response = await fetch('/municipality');
        const data = await response.json();
        let sortedData = data.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        this.setState({ born: sortedData, loading: false });
    }
}
