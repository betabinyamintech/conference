import { AutoComplete, Calendar } from 'antd';
import { TimePicker } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

const BookingRequestDetails = ({ user }) => {
    return (
        <div style={{
            width:'400px',
            margin:'3em auto',
            direction:'rtl'
        }}>
            <span>שלום </span>
            <span>אורית</span>
            <div>ברוכים הבאים למערכת זימון החדרים של בנימין טק. למתי לשריין את החדר?</div>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
            </div>
            <div>
                <div>משעה</div>
                <TimePicker minuteStep={15} format='HH:mm' placeholder="בחר שעה" />
            </div>
            <div>
                <div>עד שעה</div>
                <TimePicker minuteStep={15} format='HH:mm' placeholder="בחר שעה" />
            </div>
            <button name="ok" text="מתאים לי בדיוק" />
        </div>
    );
}

export default BookingRequestDetails