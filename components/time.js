// time.js - Updated version
import { useState, useEffect, createContext, useContext } from "react";

// Create context for business hours
export const BusinessHoursContext = createContext();

export function BusinessHoursProvider({ children }) {
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check if current time is between 10am and 11pm
  useEffect(() => {
    function checkBusinessHours() {
      const now = new Date();
      const hours = now.getHours();
      // Business hours are 10:00 (10am) to 23:00 (11pm)
      setIsBusinessHours(hours >= 10 && hours < 23);
      setCurrentTime(now);
    }
    // Check immediately
    checkBusinessHours();
    // Update every minute
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BusinessHoursContext.Provider value={{ isBusinessHours, currentTime }}>
      {children}
    </BusinessHoursContext.Provider>
  );
}

// Hook to use the business hours context
export const useBusinessHours = () => useContext(BusinessHoursContext);

function OpenHours() {
  const { isBusinessHours, currentTime } = useBusinessHours();

  return (
    <div>
      <div
        style={{
          padding: "15px",
          backgroundColor: isBusinessHours ? "var(--light)" : "var(--lightest)",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <h3
          style={{
            color: isBusinessHours ? "green" : "red",
            margin: "0 0 10px 0",
          }}
        >
          {isBusinessHours ? "We are OPEN" : "We are CLOSED"}
        </h3>

        {!isBusinessHours && <p>Business hours are from 10 AM to 11 PM.</p>}
        <p>
          <strong>Current time: </strong>
          {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}

export default OpenHours;
