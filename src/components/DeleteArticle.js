import React, { Component } from 'react';

class DeleteArticle extends Component {
    render() {
        return (
            <div className="main-content-area">
                <h1> Delete Article</h1>
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
                    {/* modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Article ?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Delete Article "How to make rice without stew"? this action cannot be undone
          `                     </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-wrap">
                    <btn className="btn btn-primary d-inline-block btn-next" data-toggle="modal" data-target="#exampleModal"> Next </btn>
                </div>
            </div>

        )
    }
}

export default DeleteArticle;