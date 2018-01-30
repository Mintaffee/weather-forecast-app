import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';

import './chart.css';

export default props => {
    return (
        <div className="chart">
            <Sparklines width={240} height={160} data={props.data}>
                <SparklinesLine color={props.color || 'red'} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
        </div>
    );
};
