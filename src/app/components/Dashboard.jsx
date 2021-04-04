import React from 'react';
import { connect } from 'react-redux';
import {ConnectedTaskList} from './TaskList';

//We map the groups, which will return a jsx Object -> Therefore we use the lamba to create this for us.
export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
         <ConnectedTaskList id={group.id} name={group.name}/>
        ))}
    </div>
);

//This will create a connected Object
function mapStateToProps(state){
    return {
        groups: state.groups
    }
}

//This will export the connected Object as an Object.
export const ConnectedDashboard = connect(mapStateToProps) (Dashboard)