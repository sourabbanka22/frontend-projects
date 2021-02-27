import React from 'react';
import './Settings.css';
import Configure from '../configure/Configure';

const Settings = (props) => {

    return (
      <div className="Settings">
        <div className="adjust">
        <Configure
          id={['session-label', 'session-length', 'session-increment', 'session-decrement']}
          label="working"
          value={props.working}
          increment={props.incWorkSession}
          decrement={props.decWorkSession} />
        </div>
        <div className="adjust">
        <Configure
          id={['break-label', 'break-length', 'break-increment', 'break-decrement']}
          label="break"
          value={props.break}
          increment={props.incBreakSession}
          decrement={props.decBreakSession} />
        </div>
      </div>
    );

}

export default Settings;