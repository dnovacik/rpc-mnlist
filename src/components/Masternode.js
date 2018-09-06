import React from 'react';

import { activeTime, timeSinceEpoch } from './../utils/Helpers';

export const Masternode = ({status, pubkey, lastSeen, lastPaid, activeSince}) => (
    <tr>
        <td>{status}</td>
        <td>{pubkey}</td>
        <td>{timeSinceEpoch(lastSeen)}</td>
        <td>{timeSinceEpoch(lastPaid)}</td>
        <td>{activeTime(activeSince, true)}</td>
    </tr>
);