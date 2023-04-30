
//     export default function Event ({event, attendees, showAttendees, toggleEventAttendees   }) {
//       return (
//       <>
//       <li key={event.id}>
//         <img src={event.eventImage} alt={event.name} />
//         <h5>
//           {event.name} {event.eventType}
//         </h5>
//         <br />
//         <span>Organized by: {event.organizer} </span>
//         <br />
//         <>
//           <button onClick={toggleEventAttendees}>
//             {!showAttendees ? "Show Attendees" : "Hide Attendees"}
//           </button>
  
//           {showAttendees ? (
//             <div className="attendees">
//               {attendees.map((attendee, index) => (
//                 <>
//                   <div key={attendee.id} className="attendee">
//                     <p>
//                       <img
//                         src={attendee.avatar}
//                         alt={attendee.firstName}
//                       />
//                       {"   "}
//                       <span>
//                         {" "}
//                         {attendee.firstName} {attendee.lastName}{" "}
//                       </span>
//                     </p>
//                     <p>
//                       <button
//                         className="clickable"
//                         onClick={updateEventAttendance}>
                          
//                             {event.id, attendee.id}>
//                           )
                        
                      
//                         Attending:
//                       </button>
//                       <span>
//                         {attendee.attendance ? "✅" : "❌"}
//                       </span>
//                     </p>
  
//                     <p>
//                       <span>Note:</span> {attendee.note}
//                     </p>
//                   </div>
//                 </>
//               ))}
//             </div>
//         ) : null}
//         </>
//       </li>
//     </>
//   );
// }
      

export default function Event({event, attendees, showAttendees, toggleEventAttendees, updateEventAttendance}) {
  return (
    <>
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <>
          <button onClick={toggleEventAttendees}>
            {!showAttendees ? "Show Attendees" : "Hide Attendees"}
          </button>

          {showAttendees ? (
            <div className="attendees">
              {attendees.map((attendee, index) => (
                <>
                  <div key={attendee.id} className="attendee">
                    <p>
                      <img
                        src={attendee.avatar}
                        alt={attendee.firstName}
                      />
                      {"   "}
                      <span>
                        {" "}
                        {attendee.firstName} {attendee.lastName}{" "}
                      </span>
                    </p>
                    <p>
                      <button
                        className="clickable"
                        onClick={() =>
                          updateEventAttendance(
                            event.id,
                            attendee.id
                          )
                        }
                      >
                        Attending:
                      </button>
                      <span>
                        {attendee.attendance ? "✅" : "❌"}
                      </span>
                    </p>

                    <p>
                      <span>Note:</span> {attendee.note}
                    </p>
                  </div>
                </>
              ))}
            </div>
          ) : null}
        </>
      </li>
    </>
  );
}