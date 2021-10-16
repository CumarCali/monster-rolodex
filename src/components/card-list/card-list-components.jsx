import React from 'react';
import '../card/card-components';
import { Card } from '../card/card-components';
import './card-list-style.css';
export const CardList = props =>{
    return <div className="card-list">

{
       props.coder.map(coder => (
            <Card key={coder.id} coder={coder}/>
         ))
     }
    </div>
}