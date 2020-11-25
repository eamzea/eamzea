import React from 'react';
import JournalEntries from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

const Sidebar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="jornal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"> </i>
        <p>new Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
