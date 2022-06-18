import { Log } from 'oidc-client';
import React, { Component } from 'react';
import './Statistics.css';

/** React component that is used to display statistics from an API about child births.*/
export class Statistics extends Component {
    static displayName = Statistics.name;

    //the class constructor
    /**
     * Set up the initial stage for the component.
     * @param  {object} props properties sent from parent.
     */
    constructor(props) {
        super(props);
        this.state = {
            born: [], loading: true, year: ["2016", "2017", "2018", "2019", "2020"], gender: ["1", "2"]};
    }

    /**
     * method that runs automaticly when component is mounted.
     * @returns {void}
     */
    componentDidMount() {
        this.populateMunicipalityData();
    }

    /**
     * A method that renders the table with child births.
     * @param   {List}      born    The data about childs born in each municipality.
     * @param   {List}      year    The years for which the table shall be generated.
     * @param   {List}      gender  The genders for which the table shall be rendered.    
     * @returns {Component}         An table containing the child births.
     */
    static renderMunicipalityTable(born, year, gender) {
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
                        <tr key={brn.id}>
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
                        </tr>  
                    )}
                </tbody>
            </table>
        );
    }

    /**
     * A method that renders the complete statistics page either as loding if data is not fetched or with the table containing the fetched data.    
     * @returns {Component}         The content of the statistics page.
     */
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Statistics.renderMunicipalityTable(this.state.born, this.state.year, this.state.gender);
        return (
            <div>
                <h1 id="tabelLabel" >Antal f&#246;dda barn</h1>
                <p>Antal f&#246;dda barn mellan 2016 och 2020 per kommun uppdelat p&#229; pojkar och flickor.</p>
            {contents}
            </div>
        );
    }

    /**
     * A method that fetches the data from the back-end and then sorts the data alphabetically from A-Z.   
     * @returns {void}
     */
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
