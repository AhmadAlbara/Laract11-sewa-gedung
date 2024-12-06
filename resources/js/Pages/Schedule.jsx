import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Schedule = ({ orders, auth }) => {
    const user = auth.user;

    const handleDateClick = (arg) => {
        alert(`You clicked on: ${arg.dateStr}`);
    };
      const getRandomColor = () => {
          const letters = "0123456789";
          let color = "#0053";
          for (let i = 0; i < 2; i++) {
              color += letters[Math.floor(Math.random() * 10)];
          }
              console.log(color);
          return color;
      };
  
      

    return (
        <LandingLayout user={user}>
            <Head title="Jadwal" />
            <section className="max-w-7xl mx-auto mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        dateClick={handleDateClick}
                        events={[
                            ...orders.map((order) => ({
                                title: order.gedung.name,
                                date: order.tanggal_pemakaian,
                                color: getRandomColor(),
                            })),
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,dayGridWeek",
                        }}
                        buttonText={{
                            today: "Today",
                            month: "Month",
                            week: "Week",
                        }}
                        height="auto"
                        contentHeight={600}
                        dayMaxEvents={3} // Limit the number of events per day
                        eventTextColor="#fff"
                        customButtons={{
                            myCustomButton: {
                                text: "Custom Button",
                                click: function () {
                                    alert("Custom button clicked!");
                                },
                            },
                        }}
                    />
                </div>
            </section>
        </LandingLayout>
    );
};

export default Schedule;
