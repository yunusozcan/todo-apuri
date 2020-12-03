import React, {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from "react-dates";
import {useDispatch} from 'react-redux';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {remove, done, undone, addDeadline} from '../../store/TodoListSlice';
import bin from '../../bin.svg';
import './TodoListItem.css';

function Todo(props) {
    const {todo} = props;
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(false);
    const [date, setDate] = useState(null);

    return (
        <li className="list-item">
            <span className={todo.completed ? "done" : ""}>{todo.text}</span>
            {!todo.completed && todo.deadline &&
            <span className="deadline">
                {moment(todo.deadline).isBefore() &&
                <span className="badge warning">
                        Overdue!
                    </span>
                }
                {moment(todo.deadline).isAfter() &&
                <span className="badge">
                        {moment(todo.deadline).diff(moment(), 'days')} days left!
                    </span>
                }
            </span>
            }
            <span className="buttons">
                {!todo.completed &&

                <span>
                        <SingleDatePicker
                            placeholder="Deadline"
                            onDateChange={date => {
                                setDate(moment(date));
                                dispatch(addDeadline({id: todo.id, deadline: date.format("YYYY-MM-DD")}));
                            }}
                            onFocusChange={({focused}) => setFocused(focused)}
                            focused={focused}
                            date={todo.deadline ? moment(todo.deadline) : date}
                            displayFormat="YYYY-MM-DD"
                            withFullScreenPortal={true}
                        />
                    </span>
                }
                {!todo.completed &&
                <button type="button" onClick={() => dispatch(done(todo.id))}>Done</button>
                }
                {todo.completed &&
                <button type="button" onClick={() => dispatch(undone(todo.id))}>Undone</button>
                }
                <button type="button" onClick={() => dispatch(remove(todo.id))}>
                    <img src={bin} className="delete" alt="delete"/>
                </button>
            </span>
        </li>
    );
}

export default Todo;
