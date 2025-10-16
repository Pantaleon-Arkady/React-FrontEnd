function ReminderList({ reminders }) {



    return (
        <ul className="list-group mt-3">
            {reminders.map(reminder => (
                <li className="list-group-item ">
                    <span>
                        {reminder.text}
                    </span>
                </li>
            ))}
        </ul>
    )
};

export default ReminderList