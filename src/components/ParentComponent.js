import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [childcount, setChildCount] = useState(0);
    const callback = (count) => {
        console.log(count);
        setChildCount(count);
    }

    return (
        <div>
            <ChildComponent ParentCallback={callback} />
            <h3>hello {childcount}</h3>
        </div>
    )
}

export default ParentComponent
