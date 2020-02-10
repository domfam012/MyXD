import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            title:'',
            content: '',
            imgPath:'',
            imgOriginName:'',
            imgSaveName:'',
            link:'',
            post_Index:'',
            created: '',
            updated:'',
            viewCount:''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('Posts').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const post = doc.data();
                this.setState({
                    key: doc.id,
                    category: post.category,
                    title: post.title,
                    content: post.content,
                    imgPath:post.imgPath,
                    imgOriginName:post.imgOriginName,
                    imgSaveName:post.imgSaveName,
                    link:post.link,
                    post_Index:post.post_Index,
                    created: post.created,
                    updated:post.updated,
                    viewCount:post.viewCount,
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({post: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {category,title,content,imgPath, imgOriginName,imgSaveName,link,post_Index, created, updated, viewCount} = this.state;

        const updateRef = firebase.firestore().collection('Posts').doc(this.state.key);
        updateRef.set({
            category,
            title,
            content,
            imgPath,
            imgOriginName,
            imgSaveName,
            link,
            post_Index,
            created,
            updated,
            viewCount
        }).then((docRef) => {
            this.setState({
                key: '',
                category: '',
                title:'',
                content: '',
                imgPath:'',
                imgOriginName:'',
                imgSaveName:'',
                link:'',
                post_Index:'',
                created: '',
                updated:'',
                viewCount:''
            });
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
}
