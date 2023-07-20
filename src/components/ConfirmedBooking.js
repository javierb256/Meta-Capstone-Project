import { Link } from "react-router-dom";

function ConfirmedBooking() {
    return (
        <div className="confirmation-container container">
            <h3>Table Reserved</h3>
            <p>Your table has been reserved successfully! You will receive an email confirmation with your reservation details shortly. We are excited to see you soon!</p>
            <Link to={'/booking'} className="custom-button">Book Another Table</Link>
        </div>
    )
}

export default ConfirmedBooking;