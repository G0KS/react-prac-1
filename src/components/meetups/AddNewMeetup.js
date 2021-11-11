import Card from "../card/Card";

import classes from "./AddNewMeetup.module.css";

function AddNewMeetup() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.content}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            placeholder="Next Meetup"
            id="title"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            placeholder="http://www.images.com/image.jpg"
            id="image"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            placeholder="123 Street, Abc City"
            id="address"
          ></input>
        </div>
        <div className={classes.content}>
          <label htmlFor="desciption">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            placeholder="This is the next Meetup"
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
