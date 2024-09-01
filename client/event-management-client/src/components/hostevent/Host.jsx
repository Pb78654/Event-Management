import React from 'react'
import './Host.css'
// import Getimg from '../hostevent/imgupload/Getimg'

const Host = () => {
    return (
        <div class="container">
            <div className="createeventinfo">
                <h2>Create Event</h2>
                <form>
                    <div className="Fgrp">
                        <div className="in1">
                            <label for="event-title">Event Title:</label>
                            <input type="text" id="event-title" name="event-title" placeholder="Enter Title" />
                        </div>
                        <div className="in1">
                            <label for="event-category">Event Category:</label>
                            <select id="event-category" name="event-category">
                                <option value="" disabled selected>Select Category</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label for="event-venue">Event Venue:</label>
                            <select name="event-venue" id="event-venue">
                                <option value="" disabled selected>Select Venue</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label for="event-date">Booking Price:</label>
                            <input type="number" id="event-price" name="event-price" placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="mainformgroup">
                        <div class="form-group">
                            <div>
                                <label for="start-time">Start Time:</label>
                                <input type="time" id="start-time" name="start-time" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label for="end-time">End Time:</label>
                                <input type="time" id="end-time" name="end-time" placeholder="Enter your mail" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div>
                                <label for="start-date">Start Date:</label>
                                <input type="date" id="start-date" name="start-date" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label for="end-date">End Date:</label>
                                <input type="date" id="end-date" name="end-date" placeholder="Enter your mail" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="eventdescription">
                <h2>Event Description</h2>
                <form>
                    <div className="in1">
                        <label for="event-image">Event Image:</label>
                        <div className="inputimg">
                            <input type="file" id="event-image" name="event-image" />
                        </div>
                        {/* <Getimg/> */}

                    </div>
                    <div className="in1">
                        <label for="event-description">Event Description:</label>
                        <textarea id="event-description" name="event-description" placeholder="Type here..."></textarea>
                    </div>
                    <button type="submit" class="hostbutton">Create event</button>
                </form>
            </div>

        </div>
    )
}

export default Host