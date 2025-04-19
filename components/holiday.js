import { useState, useEffect } from "react";
import OpenHours from "./time";

function HolidayAPI({ countryCode = "CA", year = new Date().getFullYear() }) {
  const [todaysHoliday, setTodaysHoliday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkTodayForHoliday() {
      try {
        setLoading(true);

        // Get today's date in format YYYY-MM-DD
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];

        // Fetch all holidays for the current year and country
        const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const holidays = await response.json();

        // Check if today matches any holiday date
        const holidayToday = holidays.find((holiday) => holiday.date === formattedDate);
        setTodaysHoliday(holidayToday || null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to check for holidays:", err);
      } finally {
        setLoading(false);
      }
    }

    checkTodayForHoliday();
  }, [year, countryCode]);

  if (loading) return <p>Checking for holidays today...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div
        style={{
          padding: "15px",
          backgroundColor: todaysHoliday ? "var(--light)" : "var(--lightest)",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            margin: "0 0 10px 0",
          }}
        >
          {todaysHoliday && (
            <div>
              Today is <strong>{todaysHoliday.localName}</strong>! Due to higher order volume,
              please allow for longer processing times.
              <br />
              <strong>{todaysHoliday.date}</strong>
            </div>
          )}
        </p>
        <OpenHours />
      </div>
    </div>
  );
}

export default HolidayAPI;
