import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return <div>
                <Link className="addIcon" to="/AddPhoto"> </Link>                
                <div className="photo-grid">
                    {props.posts
                        .sort((x, y) => y.id - x.id) // descending order
                        .map((post, index) => <Photo key={post.id} post={post} {...props} index={index}/>)}
                </div>
            </div>
    
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,    
}

export default PhotoWall 