import React from 'react';
import pic from './23656.png';
const FieldsForm = (props) => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <img alt ='' src={pic} width="150" height = "150"/>
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">iTunes Search App</h1>
                            <p className="lead">Enter book, film, song or artist name:</p>
                        <div className="form-group">
                            <form onSubmit={props.mySubmitHandler}>
                                <div>
                                <input type="text" onChange={props.myChangeHandler} />
                                <br />
                                <br />
                                <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
        </div>
    );
}

export default FieldsForm;