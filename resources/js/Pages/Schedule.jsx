import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


const Schedule = () => {
    const handleDateClick = (arg) => {
        alert(`You clicked on: ${arg.dateStr}`);
    };

    return (
        <LandingLayout>
            <Head title="Jadwal" />
            <section className="max-w-7xl mx-auto mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        dateClick={handleDateClick}
                        events={[
                            {
                                title: "Event 1",
                                date: "2024-10-10",
                                color: "#4CAF50",
                            },
                            {
                                title: "Event 2",
                                date: "2024-10-10",
                                color: "#FF5722",
                            },
                            {
                                title: "Event 3",
                                date: "2024-10-20",
                                color: "#03A9F4",
                            },
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
