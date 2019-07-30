import Axios from "axios";
import React,{Component, useContext} from 'react';
import {ArticleContext} from './context/ArticleContext';
import {UserContext} from './context/UserContext';
import {BASE_URL, GET_ARTICLE_DESCRIPTION} from './uri';
import {
    LOGIN, 
    SAVE_ARTICLE_DESCRIPTION,
    SAVE_ARTICLE_CONTENT,
    SAVE_ARTICLE_IMAGES,
    GET_ARTICLE_LIST,
    GET_ARTICLE_CONTENT,
    GET_ARTICLE_IMAGES,

} from './uri';

const getRequest =  ({URL}, ID)=>{
    return new Promise((resolve,reject)=>{
        Axios.get(`${BASE_URL}${URL}/${ID}`,{ withCredentials:  true, headers: {"Content-Type": 'application/json'}})
        .then(res=>{
            resolve(res.data)
        }).catch(err=>{
            if(err.message === 'Request failed with status code 403'){
                sessionStorage.removeItem('user_id');
                document.location.reload();
            }
            reject(err)
        })
    })
    
}

const postRequest = ({URL,parameters},formdata)=>{
    return new Promise((resolve,reject)=>{
        Axios.post(`${BASE_URL}${URL}`, 
        parameters,
       { withCredentials:  true,  headers: {"Content-Type": formdata ? 'multipart/form-data' : 'application/json' } }
       ).then(res=>{
           resolve(res.data)
       }).catch(err=>{
            if(err.message === 'Request failed with status code 403'){
                sessionStorage.removeItem('user_id');
                document.location.reload();
            }
           reject(err)
       })
    })
    

}
   

class Query extends Component {
static login = (parameters)=>{
    return postRequest({URL:LOGIN, parameters}, )
 }

 static sign_up =  (parameters)=>{
    return  postRequest({URL:LOGIN, parameters}, )
  }
 static  save_article_description = (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_DESCRIPTION, parameters}, )
}
 static save_article_content =  (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_CONTENT, parameters}, )
}
  static  save_article_images = (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_IMAGES, parameters}, true)
}

static  get_article_list = (ID)=>{
    return getRequest({URL: GET_ARTICLE_LIST},ID)
}

static get_article_content = (ID)=>{
    return getRequest({URL: GET_ARTICLE_CONTENT}, ID)
}

static get_article_description = (ID)=>{
    return getRequest({URL: GET_ARTICLE_DESCRIPTION}, ID)
}
static get_article_images = (ID)=>{
    return getRequest({URL: GET_ARTICLE_IMAGES}, ID)
}
}



export default  Query;