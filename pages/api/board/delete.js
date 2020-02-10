import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('Posts').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    delete(id){
        firebase.firestore().collection('Posts').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}
