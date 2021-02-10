import React, { useState, useContext } from 'react';
import DropRow from './DropRow';
import StateContext from '../contexts/StateContext';
import ModalContext from '../contexts/ModalContext';

export default ({ children }) => {
    const { closeModalState } = useContext(ModalContext);

    const [condition, setCondtions] = useState(['ALL', 'option1', 'option2', 'option3']);
    const [ruleList, setRuleList] = useState([{}]);

    const conditions = condition.map(conditions => conditions);



    // handle click event to remove Rule set
    const handleRemoveRuleSet = index => {
        const list = [...ruleList];
        list.splice(index, 1);
        setRuleList(list);
    }

    // handle click event to add Rule set
    const handleAddRuleSet = () => {
        const ruleSubSet = [...ruleList];
        ruleSubSet.push(<DropRow />)
        setRuleList(ruleSubSet);
    }


    return (
        <div className="modal-subcontent">
            <div className="title-row">
                <h4>Add Revenue Group</h4>
                <p>Revenue Group Title</p>
                <input type='text' className='text-input' />
            </div>
            <div className="top-row">
                <div className="upper-row">
                    <label>If</label>
                    <select className="drop-menu">
                        {conditions.map((opt, key) => <option key={key} value={key}>{opt}</option>)}
                    </select>
                    <label>of the below conditions are met</label>
                </div>

                {ruleList.map((x, idx) => {
                    return (
                        <StateContext.Provider value={{ ruleList, handleAddRuleSet, handleRemoveRuleSet, idx }}>
                            <div key={idx}>
                                <DropRow />
                            </div>
                            {children}
                        </StateContext.Provider>
                    )
                })}
                <div className="rev-row">
                    <label>the revenue is</label>
                    <input type="number" />
                    <span>%</span>
                </div>

                <div className="action-btn">
                    <button id="confirm">Confirm</button>
                    <button id="cancel" onClick={closeModalState}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

// ruleList={ruleList} handleAddRuleSet={handleAddRuleSet} handleRemoveRuleSet={handleRemoveRuleSet} idx={idx}