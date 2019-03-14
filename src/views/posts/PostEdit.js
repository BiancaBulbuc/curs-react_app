import React from 'react';
import axios from 'axios';
import UserContext from '../../shared/user.context';

class PostEdit extends React.Component {
    constructor(props){
        super(props);
        this.apiUrl = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;

        this.state={
            post: {}
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }

    async componentDidMount() {
        const post = (await axios.get(this.apiUrl)).data;
        this.context.onUserUpdated(post);
        this.setState({post});
    }

    inputChanged(e) {
    
        const value = e.currentTarget.value;
        const post = this.state.post;

        post[e.currentTarget.id] = value;
        this.setState({post});
    }

    async formSubmitted(e) {
        e.preventDefault();
        const response = await axios.put(this.apiUrl, this.state.post);
        console.log(response);
     }

    render() {
        return(
            <>
            <h2>Edit post: {this.state.post.title}</h2>
            <form onSubmit={this.formSubmitted}>
                <p>
                    <label htmlFor="title">Post Title</label>
                    <input id="title" name="title" value={this.state.post.title} onChange={this.inputChanged} />
                </p>
                <p>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" value={this.state.post.body} onChange={this.inputChanged}></textarea>
                </p>
                <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

PostEdit.contextType = UserContext;

export default PostEdit;