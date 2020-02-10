import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Posts');
        this.unsubscribe = null;
        this.state = {
            Posts: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const Posts = [];
        querySnapshot.forEach((doc) => {
            const {category,title,content,imgPath, imgOriginName,imgSaveName,link,post_Index, created, updated, viewCount} = doc.data();
            Posts.push({
                key: doc.id,
                doc, // DocumentSnapshot
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
            });
        });
        this.setState({
            Posts
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
}

