import React, { Component } from "react";

console.log(process.env)
class Headlines extends Component {
    constructor(props){
        super(props);
        this.state = {ufoData : []};
    }

    componentDidMount(){
        fetch(`https://content.guardianapis.com/search?q=ufo&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&show-fields=thumbnail`)
            .then(data => data.json())
            .then(parsedData => this.setState({ufoData : parsedData.response.results}));
    }

    render(){
        return(
        <div>
            <h1>
                Scary Scenes
            </h1>
            <div>
                {this.state.ufoData.map(index => <article><h2 id="headlines" key={index.id} style={{textAlign: "left"}}>{index.webTitle}</h2><br></br>
                <img id="images" src={index.fields.thumbnail} alt="error loading"/>
                <p>*imagines summary*</p><a href={index.webUrl}>Read the full story</a></article>)}    
            </div>
        </div>
        )
    }
}
     

export default Headlines;