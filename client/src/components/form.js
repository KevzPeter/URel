import React, { Component } from 'react'
import axios from 'axios'

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullurl:undefined,
            shortUrl:"",
            copied:undefined,
        }
    }
    
    
    shortify=async(e)=>{
        e.preventDefault();
        const settingState=()=>{
            const user_url = e.target.fullUrl.value
            this.setState({fullurl:user_url})}
        await settingState()
        if (this.state.fullurl.length){
        var data = {
            fullUrl:this.state.fullurl,
        }   
        axios.post('/shortUrls',data).then(res=>this.setState({shortUrl:res.data})).catch(e=>console.log(e))
        }
    }
    showResult=()=>{
        if (this.state.shortUrl){
        return(
            <div className="row justify-content-center py-2">
            <h4 className="col-md-4">https://urelapp.herokuapp.com/{this.state.shortUrl}</h4>
            <i className="col-md-2 fa fa-clone" aria-hidden="true" 
            onClick={() => {
                navigator.clipboard.writeText('https://urelapp.herokuapp.com/'+this.state.shortUrl);
                this.setState({copied:"Copied!"})
                }}> {this.state.copied}</i>
            </div>
        )
        }
    }

    render(){
    return (
        <div className="Form">
            <form className="row py-2 justify-content-center"  onSubmit={this.shortify} >
                <input type="url" className="form-control col-md-4 m-2" id="fullUrl" name="fullUrl" autoComplete="off" placeholder="paste url here"/>
                <button className="btn btn-success col-md-1 m-2" type="submit">Shortify</button>
            </form>
            {this.showResult()}
        </div>

    )
}
}

