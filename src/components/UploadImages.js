import React, { Component } from 'react';
import Query from '../Query'
import { format } from 'upath';


class UploadImages extends Component {
    state = {
        images : [],
        image_preview: [],
        loading: false
    }
    remove_image = (i)=>{
    let {images, image_preview} = this.state;
    images.splice(i,1);
    image_preview.splice(i,1);
    console.log(image_preview, images)
    this.setState({images, image_preview})
    }
    readImages = (e)=>{
      let reader = new FileReader(), $this = this;
      let {images, image_preview} = this.state;
      images.push(...e.target.files);
      this.setState({images});
      reader.onload = function(e) {
        image_preview.push(e.target.result)
        $this.setState({image_preview})
        reader.abort()
      }
      reader.readAsDataURL(images[images.length -1]);
      
    }

    post_images = ()=>{
        let {images} = this.state;
        if(!images.length) return
        let form_data = new FormData()
        images.forEach(image=>{
            form_data.append('images',image);
        })
        // form_data.append('images',images)
        this.setState({loading: true})
        for (var [key, value] of form_data.entries()) {
            console.log(key,value); 
         }
        Query.save_article_images(form_data)
        .then(res=>{
            this.setState({loading : false});
            console.log(res)
        })
        .catch(err=>{
            this.setState({loading : false});
            console.log(err)
        })

    }
    render() {
        let {image_preview,loading} = this.state;
        return (
            <div className="main-content-area">
                <h1> Upload images for the article</h1>
                <div className="card w-100">
                    <h2>Choose Images</h2>
                    <div className="card-item">
                        <div className="images-display row">
                        { image_preview.length ?  image_preview.map((element,i) => (
                            <div className="col-sm-12 col-md-6 col-xl-3 img-wrap">
                            <img src={element} className="w-100" alt="article-image" />
                            <div className="img-cancel text-center" onClick={()=>{this.remove_image(i)}}>
                                <i className="fas fa-times text-icon" > </i><span> Cancel</span>
                            </div>
                            </div>
                                )) : ''}
                           
                     </div>
                        <input type="file" name="pics" className="my-4" onChange={(e)=>{this.readImages(e)}} accept="image/*"  />
                    </div>
                </div>
                <div className="btn-wrap">
                    <btn className="btn btn-primary d-inline-block btn-next"> Previous </btn>
                    <btn className="btn btn-primary d-inline-block btn-next" onClick={this.post_images}> {loading ?  <i className="fas fa-circle-notch fa-spin" /> : 'Next'} </btn>
                </div>
            </div>

        )
    }
}

export default UploadImages;