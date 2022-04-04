import React, {Component} from "react"
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { auth } from '../firebase/config';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile'
import CreatePost from '../screens/CreatePost';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged( user => {
            if(user){
                this.setState({
                    loggedIn: true
                })
            }
        })
    }
    
    handleLogin(email, password){
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({
                loggedIn: true
            })
        })
        .catch(() => {
            alert('Error al iniciar sesión');
        })
    }

    handleLogout(){
        auth.signOut()
        .then(()=> {
            this.setState({
                loggedIn: false
            })
        })
        .catch(() => {
            alert('Error en el logout');
        })
    }

    render(){
        const Drawer = createDrawerNavigator();

        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName ='Login'>
                    {this.state.loggedIn === true ?
                    <React.Fragment>
                        <Drawer.Screen name = 'Home'>
                            {props => <Home {...props}/>}
                        </Drawer.Screen>

                        <Drawer.Screen name= 'Tu perfil'>
                            {props => <Profile {...props} handleLogout={()=> this.handleLogout()}/>}
                        </Drawer.Screen>

                        <Drawer.Screen name = 'Publicar posteo'>
                            {props => <CreatePost {...props}/>}
                        </Drawer.Screen>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Drawer.Screen name="Login">
                            {props => <Login {...props} handleLogin={(email, password)=>this.handleLogin(email, password)}/>}
                        </Drawer.Screen>
                    </React.Fragment>
                }
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
