import React, {Component} from "react";
import ArticleContent  from './ArticleContent';
import ArticleDescription  from './ArticleDescription';
import UploadImages from './UploadImages';
import TransitionElement from './TransitionElement';

class CreateArticle extends Component {
    state = {
        activeTab: 'description',
        context: 'create',
        article_id : ''
    }


    setActiveTab = (activeTab)=>{
        this.setState({activeTab})
    }

    
    render(){
        let {activeTab} = this.state;
        switch (this.state.activeTab){
         case 'content' : return (
            <TransitionElement
            in = {activeTab === 'content'}
            transClass = {'page'}
            child = {<ArticleContent setActiveTab = {this.setActiveTab}/>}
            />
         );
         case 'description': return (
            <TransitionElement
            in = {activeTab === 'description'}
            transClass = {'page'}
            child = {<ArticleDescription setActiveTab = {this.setActiveTab}/>}
            />
         );
         case 'images': return <UploadImages/>;
        }
    }
}


export default CreateArticle;