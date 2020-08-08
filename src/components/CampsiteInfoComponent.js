import React, { Component } from 'react';

class CampsiteInfo extends Component{


    render(){

            //if campsite is not null or undefined set to a row else a empty div
        if(this.props.campsite){
             return <div className="row"> </div>;
        }else{
            return <div> </div>;
        }


    }


}

export default CampsiteInfo;