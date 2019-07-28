import React, {Component} from 'react';

class EditArticle extends Component {
    render(){
        return(
            <div className="main-content-area">
                <h1> Edit Article</h1>
                <div className="card w-100">
                    <h2> Select Article </h2>
                    <div className="card-item">
                        <div id="table-responsive" className="select-table">
                            <table className="table table-hover ">
                                <thead className="table-header">
                                    <tr>
                                        <th scope="col" colSpan={1}>#</th>
                                        <th scope="col">Tittle</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Sub Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="selected">
                                        <th scope="row" colSpan={1}>1</th>
                                        <td>How to make rice without using stew</td>
                                        <td>Dere0865</td>
                                        <td>Health</td>
                                        <td>Vibrations</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colSpan={1}>1</th>
                                        <td>How to make rice without using stew</td>
                                        <td>Dere0865</td>
                                        <td>Health</td>
                                        <td>Vibrations</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colSpan={1}>1</th>
                                        <td>How to make rice without using stew</td>
                                        <td>Dere0865</td>
                                        <td>Health</td>
                                        <td>Vibrations</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="btn-wrap">
                    <btn className="btn btn-primary d-inline-block btn-next"> Next </btn>
                </div>
            </div>

        )
    }
}

export default EditArticle