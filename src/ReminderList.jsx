function ReminderList({ reminders }) {



    return (
        <ul className="list-group mt-3">
            {reminders.map(reminder => (
                <li className="list-group-item d-flex">
                    <div className="reminders_text border text-start">
                        <span className="border">
                            {reminder.text}
                        </span>
                    </div>
                    <div className="reminders_date border">

                    </div>
                    <div className="reminders_mod border">

                    </div>
                </li>
            ))}
        </ul>
    )
};

export default ReminderList