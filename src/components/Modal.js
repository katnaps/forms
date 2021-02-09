import React from 'react';
import FormContext from '../contexts/FormContext';
import DropRow from './DropRow';

export default () => {



    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-subcontent">
                    <div className="title-row">
                        <h4>Add Revenue Group</h4>
                        <p>Revenue Group Title</p>
                        <input type='text' className='text-input' />
                    </div>
                    <form>
                        <div className="top-row">
                            <div className="upper-row">
                                <label>If</label>
                                <select className="drop-menu">
                                    <option>ALL</option>
                                    <option>option1</option>
                                    <option>option2</option>
                                    <option>option3</option>
                                </select>
                                <label>of the below conditions are met</label>
                            </div>
                            <DropRow />
                            <div className="rev-row">
                                <label>the revenue is</label>
                                <input type="number" />
                                <span>%</span>
                            </div>

                            <div className="action-btn">
                                <button id="confirm">Confirm</button>
                                <button id="cancel">Cancel</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}