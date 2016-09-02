import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const App = ({params}) => (
    <div className="wrapper">
        <LeftPanel group={params.groupProp || 'all'} />
        <RightPanel group={params.groupProp || 'all'} filter={params.groupPropVal || 'all'} />
    </div>
);

export default App;