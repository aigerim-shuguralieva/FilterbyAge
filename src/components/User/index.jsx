import React from 'react'


export const User = ({el}) => {
    return<div className="user-card">
    <div className="avatar">
       <img style={{width:150, height:180,border:'solid' ,}} src={el.img} alt=""/>
       <h3>{el.name}</h3>
       <p>{el.age}</p>
       <b>{el.country}</b>
        </div>
    </div>
}