import React from 'react';
import fetch from "isomorphic-fetch";

var QUERY = "https://itunes.apple.com/search?term=";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], not_found: false };
    }

    componentDidMount() {
        fetch(QUERY + this.props.toSearch)
            .then(res => res.json())
            .then(
                result => {
                    if (result.results) {
                        this.setState({
                            list: Object.entries(result.results)

                        });
                    } else {
                        this.setState({ not_found: true });
                    }
                    console.log(this.state.list)
                },

                error => {
                    this.setState({
                        error
                    });
                }
            );
        //console.log(this.state.list);

    }



    render() {
        if (this.state.not_found) {
            return (
                <div className="col-sm-6 offset-sm-3 text-center">
            <p>404 Not Found</p>
        </div>
            );
        }
        if (this.state.list.length === 0) {
            return (
                <div className="col-sm-6 offset-sm-3 text-center">
            <p>Loading ...</p>
        </div>
            );
        } else {
            return (
                <div className="col-sm-8 offset-sm-2 text-center">  
        <div>
            {
                this.state.list.map(function(info, i){
                    return (<div key={i} className="row border">
                                <div className="col-sm-3 my-auto">
                                    <div> <b>Track name:</b> {info[1].trackName}</div>
                                    <div> <b>Artist :</b> {info[1].artistName}</div>
                                    <div> <b>Price :</b> $ {info[1].trackPrice}</div>
                                </div>

                                <div className="col-sm-3 my-auto">
                                    <img alt ='' src={info[1].artworkUrl100}/>
                                </div>

                                <div className="col-sm-6 my-auto embed-responsive-item">
                                    <audio className="embed-responsive-item" controls="controls">
                                        <source src={info[1].previewUrl}/>
                                    </audio>
                                </div>
                                <hr/>
                            </div>)
                                
                    })
            }
        </div>
        </div>
            );
        }
    }
}
export default Data;