import React from 'react';
import axios from 'axios';
import UserContext from '../../shared/user.context';
 

class PostDetails extends React.Component {
    constructor (props) {
        super(props);
        this.apiUrl = "https://jsonplaceholder.typicode.com/";

        this.state = {
            post: {},
            comments:[]
        }
    }

    async componentDidMount() {
        this.fetchPosts();
        this.fetchComments();
    }

    async fetchComments() {
        const url = this.apiUrl + "comments?postId=";
        let comments = (await axios.get( url  + this.props.match.params.id)).data;
        this.setState({ comments });
    }

    async fetchPosts(){
        const url = this.apiUrl + "posts/";
        let post = (await axios.get( url  + this.props.match.params.id)).data;
        this.setState({ post });
    }
    
    render() {
        return (
        <UserContext.Consumer>
            { (function (value) { // ( {user} ) => <div></div>
                return ( 
                    <div>
                        Welcome, {value.user.userId}!
                        <h2>{ this.state.post.title }</h2>
                        <p>{ this.state.post.body }</p>
                        <br/>
                        <dl>
                            <dt>{ this.state.comments.map(comment => <dt key={comment.id} > {comment.body} </dt>) }</dt>
                        </dl>
                    </div>
                );
                }).bind(this)
            }
        </UserContext.Consumer>
        );
    }
}


export default PostDetails;