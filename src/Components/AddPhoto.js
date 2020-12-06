import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const description = event.target.elements.description.value
        const imageLink = event.target.elements.link.value
        const post = {
            id: Number(new Date()),
            description,
            imageLink
        }
        if (imageLink && description) {
            this.props.onAddPhoto(post)
        }

    }

    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> Post </button>
                    </form>              
                </div>
            </div>
        )
    }
}

export default AddPhoto