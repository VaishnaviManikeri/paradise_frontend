import React from "react";
import { motion } from "framer-motion";

const FacilitiesPage = () => {
    const facilities = [
        {
            title: "Smart Classrooms",
            description:
                "Paradise English Medium School provides digitally enabled smart classrooms with interactive boards and audio-visual tools to make learning engaging and effective.",
            image: "/facilities/Classroom_1.jpg",
            alt: "Smart classroom at Paradise English Medium School",
        },
        {
            title: "Science Laboratories",
            description:
                "Well-equipped Physics, Chemistry, and Biology laboratories that encourage practical learning and scientific thinking among school and junior college students.",
            image: "/facilities/laboratory_lab.jpg",
            alt: "Science laboratory at Paradise English Medium School",
        },
        {
            title: "Computer Laboratory",
            description:
                "A modern computer lab with high-speed internet and updated systems to enhance digital literacy and technical skills.",
            image: "/facilities/computer_lab.jpg",
            alt: "Computer lab at Paradise English Medium School",
        },
        {
            title: "Library",
            description:
                "A calm and resource-rich library with textbooks, reference books, competitive exam materials, and digital learning resources.",
            image: "/facilities/Library.jpg",
            alt: "Library at Paradise English Medium School",
        },
        {
            title: "Sports & Playground",
            description:
                "Spacious playground and sports facilities for cricket, football, athletics, yoga, and indoor games to promote physical fitness.",
            image: "/facilities/sport.JPG",
            alt: "Playground at Paradise English Medium School",
        },
        {
            title: "Transportation Facility",
            description:
                "Safe and reliable school bus service with trained drivers and staff ensuring secure transportation for students.",
            image: "/facilities/bus.jpeg",
            alt: "School bus facility at Paradise English Medium School",
        },
        {
            title: "CCTV Surveillance",
            description:
                "24/7 CCTV surveillance across the campus to ensure complete safety and security of students and staff.",
            image: "/facilities/cctv.png",
            alt: "CCTV surveillance at Paradise English Medium School",
        },
        {
            title: "Safe Drinking Water",
            description:
                "RO and UV purified drinking water available throughout the campus to maintain students’ health and hygiene.",
            image: "/facilities/drinking_water.jpeg",
            alt: "Drinking water facility at Paradise English Medium School",
        },
        {
            title: "Medical & First Aid Room",
            description:
                "A dedicated medical room with first-aid facilities and trained staff to handle emergencies and ensure student wellbeing.",
            image: "/facilities/wellness.jpg",
            alt: "Medical room at Paradise English Medium School",
        },
    ];

    return (
        <div className="pt-20">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Facilities at Paradise English Medium School & Jr. College
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-lg max-w-2xl mx-auto opacity-90"
                    >
                        We provide a safe, modern, and student-friendly environment that supports academic excellence and overall development.
                    </motion.p>
                </div>
            </section>

            {/* FACILITIES GRID */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">

                    <h2 className="text-4xl font-bold text-center text-primary mb-12">
                        World-Class Facilities for Quality Education
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={facility.image}
                                        alt={facility.alt}
                                        loading="lazy"
                                        className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {facility.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 leading-relaxed">
                                    {facility.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FacilitiesPage;
