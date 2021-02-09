import React, { useState } from 'react';
import FormContext from '../contexts/FormContext';


export default () => {


    const addBtn = () => {
        return (
            <button className="add-row" id="btn-add">+</button>
        )
    }

    const rmBtn = () => {
        return (
            <button className="rm-row" id="btn-add">-</button>
        )
    }

    return (
        <div className="row">
            <div className="row-content">
                <div className="drop-grp">
                    <select className="drop-grp-menu">
                        <option>aff_sub</option>
                        <option>aff_sub1</option>
                        <option>aff_sub2</option>
                    </select>
                    <select className="drop-grp-menu">
                        <option>is</option>
                        <option>less</option>
                        <option>more</option>
                    </select>
                </div>

                <div className="para-grp">
                    <div className="para-subgrp">
                        <input type="text" className="input-para" placeholder=" insert parameter" />
                        <button className="rm-rule btn-rule">remove rule</button>
                        <input type="text" className="input-para" placeholder=" insert parameter" />
                        <button className="add-rule btn-rule">add rule</button>
                        {rmBtn()}
                        {addBtn()}
                    </div>
                </div>
            </div>
        </div>
    )
}