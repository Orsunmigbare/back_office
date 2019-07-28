import React, {Component} from 'react';

export const ArticleContext = React.createContext({})
export const ArticleConsumer = ArticleContext.Consumer;


class ArticleProvider extends Component {
    state = {
        article_id: '',
    }

    update_id = (id)=>{this.setState({article_id: id})}
    clear_id = ()=>{this.setState({article_id: ''})}
    render(){
       let value = {
            article_id : this.state.article_id,
            update_id: this.update_id,
            clear_article: this.clear_id
        }
        return(
            <ArticleContext.Provider value={value}>
                {this.props.children}
            </ArticleContext.Provider>
        )
    }
}

export default ArticleProvider;