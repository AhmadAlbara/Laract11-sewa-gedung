import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Schedule = ({ orders, auth }) => {
    const user = auth.user;

    const [selectedEvent, setSelectedEvent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    // Handle when an event is clicked
    const handleEventClick = (info) => {
        const event = info.event;
        setSelectedEvent({
            title: event.title,
            date: event.startStr,
            color: event.backgroundColor,
            nama_pemesan: event.extendedProps.nama_pemesan, 
            keperluan: event.extendedProps.keperluan, 
            other_info: event.extendedProps.other_info, 
        });
        setShowModal(true);
    };

    // Generate random color for events
    const getRandomColor = () => {
        const letters = "0123456789";
        let color = "#0053";
        for (let i = 0; i < 2; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
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
                        eventClick={handleEventClick} // Event click handler
                        events={[
                            ...orders.map((order) => ({
                                title: order.gedung.name,
                                date: order.tanggal_pemakaian,
                                color: getRandomColor(),
                                nama_pemesan: order.nama_pemesan, // Add Nama Pemesan
                                keperluan: order.keperluan, // Add Keperluan
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
                        dayMaxEvents={3}
                        eventTextColor="#fff"
                        style={{ zIndex: -10 }}
                    />
                </div>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
                        <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm">
                            <h2 className="text-xl font-bold mb-4">
                              Gedung :  {selectedEvent.title}
                            </h2>
                            <p>Tanggal: {selectedEvent.date}</p>
                            <p>Nama Pemesan: {selectedEvent.nama_pemesan}</p>{" "}
                            {/* Nama Pemesan */}
                            <p>Keperluan: {selectedEvent.keperluan}</p>{" "}
                            {/* Keperluan */}
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </LandingLayout>
    );
};

export default Schedule;
