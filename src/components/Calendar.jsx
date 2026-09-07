import React from 'react';

const Calendar = ({ date = new Date(), className = '' }) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Month name
  const monthName = date.toLocaleString('default', { month: 'long' });

  // First day of the month (0 = Sunday)
  const firstDay = new Date(year, month, 1).getDay();
  
  // Number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate calendar days array
  const calendarDays = [];

  // Empty slots before the 1st
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
        <div className={`calendar ${className}`} style={{
        maxWidth: '320px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        }}>
        {/* Header */}
        <div style={{
            backgroundColor: '#f8fafc',
            padding: '16px 20px',
            textAlign: 'center',
            borderBottom: '1px solid #e5e7eb',
            fontWeight: 600,
            fontSize: '1.25rem',
        }}>
            {monthName} {year}
        </div>

        {/* Weekday Headers */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            backgroundColor: '#f1f5f9',
            borderBottom: '1px solid #e5e7eb',
        }}>
            {weekdays.map((day, index) => (
            <div
                key={index}
                style={{
                padding: '10px 0',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#64748b',
                borderRight: index < 6 ? '1px solid #e5e7eb' : 'none',
                }}
            >
                {day}
            </div>
            ))}
        </div>

        {/* Calendar Days Grid */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1px',
            backgroundColor: '#e5e7eb',
        }}>
            {calendarDays.map((day, index) => (
            <div
                key={index}
                style={{
                backgroundColor: '#fff',
                padding: '12px 8px',
                textAlign: 'center',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                fontSize: '0.95rem',
                ...(day === null ? { backgroundColor: '#f8fafc' } : {}),
                // Highlight today
                ...((day === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear())
                    ? {
                        backgroundColor: '#eff6ff',
                        fontWeight: 600,
                        color: '#1e40af',
                    }
                    : {}),
                }}
            >
                {day}
            </div>
            ))}
        </div>
        </div>
  );
};

export default Calendar;