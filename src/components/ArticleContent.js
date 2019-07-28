import React, { Component } from 'react';
import {ArticleContext} from '../context/ArticleContext';
import Query from '../Query'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ArticleContent extends Component {
    static contextType = ArticleContext;
    state  = {
        data: "",
        article_id: "",
        loading: false
    }
    componentDidMount(){
        this.setState({article_id: this.context.article_id})
    }
    save_content = ()=>{
        this.setState({loading: true});
        let {data, article_id} = this.state; let {setActiveTab} = this.props;
    if(!data) return
    Query.save_article_content({paragraphs : data, id: article_id}).then(res=>{
        this.setState({loading: false});
        setActiveTab('images')
    }).catch(err=>{
        console.log(err)
    })
    }
    render() {
        let {setActiveTab} = this.props; let {loading} = this.state;
        return (
            <div className="main-content-area">
                <h1> Article Content</h1>
                <div className="card w-100">
                    <h2>Write content</h2>
                    <div id="html-editor">
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello polease input article content.. paragraph by paragraph!</p>"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                         this.setState({data})
                    } }
                />
                    </div>
                </div>
                <div className="btn-wrap">
                    <btn href="#" className="btn btn-primary d-inline-block btn-next" onClick={()=>{setActiveTab('description')}}> Previous </btn>
                    <btn href="#" className="btn btn-primary d-inline-block btn-next" onClick={this.save_content}>{loading ?  <i className="fas fa-circle-notch fa-spin" /> : 'Next' }</btn>
                </div>
            </div>

        )
    }
}

export default ArticleContent;