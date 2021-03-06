// @flow
import React from 'react';
import _ from 'lodash';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';

import './chart.css';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

type Props = {
    data: Object,
    color: string,
    units: string
};

export default (props: Props) => {
    return (
        <div className="chart">
            <Sparklines width={240} height={160} data={props.data}>
                <SparklinesLine color={props.color || 'red'} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)} {props.units || ''}
            </div>
        </div>
    );
};
