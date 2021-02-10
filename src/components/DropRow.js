import React, { useState, useContext } from 'react';
import RowContext from '../contexts/RowContext';


export default () => {
    const{ ruleList, handleAddRuleSet, handleRemoveRuleSet, idx } = useContext(RowContext);

    const [rowList, setRowList] = useState([{ para: "" }]);
    const [isSelectOpt1, setSelectOpt1] = useState(['aff_sub', 'aff_sub1', 'aff_sub2']);
    const [isSelectOpt2, setSelectOpt2] = useState(['is', 'less', 'more']);

    const selectOpt1 = isSelectOpt1.map(selectOpt1 => selectOpt1);
    const selectOpt2 = isSelectOpt2.map(selectOpt2 => selectOpt2);


    // handle parameter input row changes
    const handleInputPara = (e, index) => {
        const { name, value } = e.target;
        const list = [...rowList];
        list[index][name] = value;
        setRowList(list);
    };

    // hancle click event of remove rule
    const handleRemoveRule = index => {
        const list = [...rowList];
        list.splice(index, 1);
        setRowList(list);
    };

    // handle click event of add rule
    const handleAddRule = () => {
        setRowList([...rowList, { para: "" }]);
    };


    return (
        <div className="row">

            <h4 className="rule-title">Rule {idx + 1}</h4>

            <div className="row-content">
                <div className="drop-grp">
                    <select className="drop-grp-menu">
                        {
                            selectOpt1.map((type1, key) => <option key={key} value={key}>{type1}</option>)
                        }
                    </select>
                    <select name="subOpt2" className="drop-grp-menu">
                        {
                            selectOpt2.map((type2, key) => <option key={key} value={key}>{type2}</option>)
                        }
                    </select>
                </div>

                <div className="para-grp">
                    {rowList.map((y, idx2) => {
                        return (
                            <div key={idx2} className="para-subgrp">
                                <input
                                    name="para"
                                    className="input-para"
                                    type="text"
                                    value={y.para}
                                    placeholder=" insert parameter"
                                    onChange={e => handleInputPara(e, idx2)}
                                />
                                {rowList.length !== 1 && rowList.length - 1 !== idx2 &&
                                    <button
                                        className="rm-rule btn-rule"
                                        onClick={() => handleRemoveRule(idx2)}
                                    >
                                        remove rule
                                    </button>
                                }
                                {
                                    rowList.length - 1 === idx2 &&
                                    <button
                                        className="add-rule btn-rule"
                                        onClick={handleAddRule}
                                    >
                                        add rule
                                    </button>
                                }
                            </div>
                        );
                    })}

                    {
                        ruleList.length !== 1 &&
                        <button
                            className="rm-row"
                            id="btn-add"
                            onClick={() => handleRemoveRuleSet(idx)}>
                            -
                                </button>
                    }
                    {
                        ruleList.length - 1 === idx &&
                        <button
                            className="add-row"
                            id="btn-add"
                            onClick={handleAddRuleSet}>
                            +
                                </button>
                    }

                </div>

            </div>

        </div>

    )
}