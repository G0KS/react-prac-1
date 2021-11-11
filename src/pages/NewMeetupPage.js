import { useNavigate } from "react-router-dom";

import AddNewMeetup from "../components/meetups/AddNewMeetup";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetuphandler(meetupData) {
    fetch(
      "https://react-prac-1-5ed1d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Typer": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <AddNewMeetup onAddMeetup={addMeetuphandler} />
    </section>
  );
}

export default NewMeetupPage;
