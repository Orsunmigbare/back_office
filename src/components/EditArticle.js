import React, {Component} from 'react';
import Query from   '../Query';
import {UserContext} from "../context/UserContext";

class EditArticle extends Component {
    static contextType = UserContext;
    state = {
        articles: null,
        user_id : ''
    }
    async componentDidMount(){
    await  this.setState({user_id: this.context.user_id()})
    let {user_id} = this.state
     Query.get_article_list(user_id)
     .then(res=>{console.log(res.data); this.setState({articles: res.data})})
     .catch(err=>{console.log(err)})
    }
    render(){
        let {articles} = this.state;
        return(
            <div className="main-content-area">
                <h1> Edit Article</h1>
                <div className="card w-100">
                    <h2> Select Article </h2>
                    <div className="card-item">{
                       articles === null ?
                       <img class="m-auto d-block" style={{height: 70, width: 70}}src={require('../assets/images/loader.svg')} /> : 

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
                                    {articles.length ? articles.map((article,i) =>(
                                        <tr className="">
                                        <th scope="row" colSpan={1}>{i+1V}</th>
                                        <td>{article.title}</td>
                                        <td>{article.id}</td>
                                        <td>{article.category}</td>
                                        <td>{article.sub_category}</td>
                                    </tr>
                                    )): <tr className="selected">
                                    <th scope="row" colSpan={1}></th>
                                    <td>You have not written any article</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                   </tr>
                                    }
                                </tbody>
                            </table>
                        </div>}
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