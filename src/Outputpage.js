import React from 'react';
import { timetableData } from './Timetable';

const TimetableOutput = () => {
  if (!timetableData) return <div>No timetable data available</div>;

  return (
    <div>
      <h2>Timetable for {timetableData.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.timetable.map((row, index) => (
            <tr key={index}>
              <td>{row.day}</td>
              <td>{row.time}</td>
              <td>{row.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableOutput;