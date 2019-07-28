import Axios from "axios";
import React,{Component, useContext} from 'react';
import {ArticleContext} from './context/ArticleContext';
import {UserContext} from './context/UserContext';
import {BASE_URL} from './uri';
import {
    LOGIN, 
    SAVE_ARTICLE_DESCRIPTION,
    SAVE_ARTICLE_CONTENT,
    SAVE_ARTICLE_IMAGES
} from './uri';

const getRequest =  ({URL},credentials)=>{
    try {
        return Axios.get(`${BASE_URL}${URL}`, {withCredentials: !!credentials})
    }catch(err){
        console.log(err.response)
    }
}

const postRequest = ({URL,parameters},credentials,formdata)=>{
    return new Promise((resolve,reject)=>{
        Axios.post(`${BASE_URL}${URL}`, 
        parameters,
       { withCredentials:  !!credentials,  headers: {"Content-Type": formdata ? 'multipart/form-data' : 'application/json' } }
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
    return postRequest({URL:LOGIN, parameters}, true)
 }

 static sign_up =  (parameters)=>{
    return  postRequest({URL:LOGIN, parameters}, true)
  }
 static  save_article_description = (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_DESCRIPTION, parameters}, true)
}
 static save_article_content =  (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_CONTENT, parameters}, true)
}
  static  save_article_images = (parameters)=>{
    return postRequest({URL: SAVE_ARTICLE_IMAGES, parameters}, true, true)
}
 
}



export default  Query;