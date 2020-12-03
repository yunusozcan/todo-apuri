import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {lastRemoved, setLastRemoved, addLastRemoved} from '../../store/TodoListSlice';
import './Header.css';

function Header() {
    const lastRemovedTodo = useSelector(lastRemoved);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="logo-container">
                <span className="logo">tõdõs</span>
                {lastRemovedTodo &&
                <button className="undo"
                        onClick={() => {
                            dispatch(addLastRemoved(lastRemovedTodo[0]))
                            dispatch(setLastRemoved(null))
                        }}>
                    undo last action
                </button>
                }
            </div>
        </header>
    );
}

export default Header;
