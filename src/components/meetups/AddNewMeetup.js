import userEvent from "@testing-library/user-event";
import { useRef } from "react";

import Card from "../card/Card";

import classes from "./AddNewMeetup.module.css";

function AddNewMeetup(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.content}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            placeholder="eg: Next Meetup"
            ref={titleInputRef}
            id="title"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            placeholder="http://example.com/image.jpg"
            ref={imageInputRef}
            id="image"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            placeholder="eg: 123 Street, Abc City"
            ref={addressInputRef}
            id="address"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="desciption">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            placeholder="eg: This is the next Meetup"
            ref={descriptionInputRef}
            id="desciption"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add New</button>
        </div>
      </form>
    </Card>
  );
}

export default AddNewMeetup;
