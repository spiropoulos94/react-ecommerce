import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) =>
            <MenuItem key={id} {...otherSectionProps}  />)}
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    //eslint disable
    sections : selectDirectorySections
})


export default connect(mapStateToProps)(Directory);