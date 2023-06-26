import Calendar from "../assets/calendar.png";
import Table from "../assets/dinner-table.png";
import User from "../assets/user.png";
import CreditCard from "../assets/credit-card.png";

function ProgressBar() {
  return (
    <>
      <div className="progressBar-container">
        test
        <div>
          <img src={Calendar} alt="calendar icon" width={20} height={20} />
          Date
        </div>
        <div>
          <img src={Table} alt="table icon" width={20} height={20} />
        </div>
        <div>
          <img src={User} alt="user icon" width={20} height={20} />
        </div>
        <div>
          <img src={CreditCard} alt="credi card icon" width={20} height={20} />
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
