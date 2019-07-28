import React, {Component} from 'react'
import Query from '../Query';
import {ArticleContext} from '../context/ArticleContext'

class ArticleDescription extends Component {
    static contextType = ArticleContext;

    state = {
        category: '',
        sub_category: '',
        tags: [],
        tag: '',
        title: '',
        loading: false
    }

    set_tags = (tag)=>{
    let {tags} = this.state;
    if(!tag) return
    tags.push(tag)
    this.tagInput.value = '';
    this.setState({tags: tags, tag: ''})

    }

    remove_tags = (value)=>{
        let {tags} = this.state ;
         let tag_index =  tags.findIndex(tag=>tag === value);
         tags.splice(tag_index, 1)
         console.log(tags,tag_index, value)
         this.setState({tags})
         console.log(tags)
    }

    save_article = ()=>{
      let {tags, category, sub_category, title}  = this.state;
      let {setActiveTab} = this.props;
      if(!(tags.length && category && sub_category && title)) return
      this.setState({loading: true});
      Query.save_article_description({tags,category, sub_category, title})
      .then(res=>{
          this.setState({loading: false});
          this.context.update_id(res.data.article_id)
          setActiveTab('content');
      })
      .catch(err=>{
          console.log(err);
          this.setState({loading: false});
      })
    }


    render(){
        let {setActiveTab } = this.props, {tags, tag, loading} = this.state;
        return(
            <div className="main-content-area">
            <h1> Article Description</h1>
            <div className="card">
                <h2> Select Category </h2>
                <div className="card-item">
                    <h3> category</h3>
                    <div className="select">
                        <select className="card-select" onChange={(e)=>{this.setState({category: e.target.value})}}>
                            <optgroup>
                            <option value> Select category</option>
                                <option value> Feeding</option>
                                <option value> Lifestyle</option>
                            </optgroup>
                        </select>
                        <i className="fa fa-chevron-down" />
                    </div>
                </div>
                <div className="card-item">
                    <h3> sub category </h3>
                    <div className="select">
                        <select className="card-select" onChange={(e)=>{this.setState({sub_category: e.target.value})}}placeholder='slect a sub category' >
                            <optgroup>
                            <option value=''> Select a sub-category</option>
                                <option value='Excercise'> Excercise</option>
                                <option value='Rest'> Rest</option>
                                <option value='Stress'> Stress</option>
                                <option value='Hygiene'> Hygiene</option>
                            </optgroup>
                        </select>
                        <i className="fa fa-chevron-down" />
                    </div>
                </div>
            </div>
            <div className="card">
                <h2> Provide description tags </h2>
                <div className="card-item w-100">
                   { tags.length ? tags.map(tag=><sapn id={tag} onClick={(e)=>{this.remove_tags(tag)}} key={tag} className="tag">{tag}</sapn>) :
                   <>
                    <sapn className="tag">
                        Lorem
                    </sapn>
                    <sapn className="tag">
                        Ipsum
                    </sapn>
                    <sapn className="tag">
                        Dolor
                    </sapn>
                    <sapn className="tag">
                        Sit
                    </sapn>
                    <sapn className="tag">
                        Amet
                    </sapn>
                    </>
                    }
                </div>
                <div className="card-item">
                    <h3>
                        Enter tag name
                    </h3>
                    <div className="input-wrap">
                        <input type="text" ref= {(el)=>{this.tagInput = el}} className="input-primary " placeholder="Eg: Travel" onChange={(e)=>{this.setState({tag: e.target.value})}}/>
                    </div>
                    <btn  className="btn btn-primary d-inline-block btn-next" onClick = {()=>{this.set_tags(tag)}}> Add </btn>
                </div>
            </div>
            <div className="card w-100">
                <h2> Enter article title</h2>
                <div className="card-item">
                    <h3>
                        Title
                    </h3>
                    <div className="input-wrap w-100 ">
                        <input type="text" className="input-primary w-100" placeholder="Eg: Why apple is good for you" onChange={(e)=>{this.setState({title: e.target.value})}} />
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                {/* <a href="#" className="btn btn-primary d-inline-block btn-next" onClick={()=>{setActiveTab()}}> Previous </a> */}
                <btn  className="btn btn-primary d-inline-block btn-next" onClick={()=>{this.save_article()}}>{loading ?  <i className="fas fa-circle-notch fa-spin" /> : 'Next'}</btn>
            </div>
        </div>
        )
    }
}

export default ArticleDescription