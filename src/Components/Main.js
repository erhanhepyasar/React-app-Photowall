import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import entries from '../static/entries'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: entries
        }
        this.removePhoto = this.removePhoto.bind(this) 
        this.addPhoto = this.addPhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) =>({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }
    
    componentDidMount() {      
    }
    
    componentDidUpdate(prevProps, prevState) {     
        console.log('prev:', prevState.posts)
        console.log('current:', this.state)
    }

    render() {   
        console.log(this.state.posts)     
        return (
        <div>
            <Route exact path="/" render={() => (
                <div>
                    <Title title={'Photowall'}/>
                    <PhotoWall 
                        posts={this.state.posts} 
                        onRemovePhoto={this.removePhoto}
                        onNavigate={this.navigate}
                        />    
                </div>
            )}/>

            {/* <Route path="/AddPhoto" component={AddPhoto}/> */}
            <Route path="/AddPhoto" render = {({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')
                }}/>
            )}/>

        </div>        
        )
    }
}

export default Main