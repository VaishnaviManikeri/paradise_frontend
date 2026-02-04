import { motion } from "framer-motion";

const AcademicCalendar = () => {
  const calendarData = [
    {
      month: "June",
      events: [
        "School Reopens",
        "Orientation Program for Parents & Students",
        "Beginning of Academic Session"
      ]
    },
    {
      month: "July – August",
      events: [
        "Regular Teaching & Learning Activities",
        "Unit Tests",
        "Co-curricular & Sports Activities"
      ]
    },
    {
      month: "September",
      events: [
        "First Term Examination",
        "Parent-Teacher Meeting (PTM)"
      ]
    },
    {
      month: "October",
      events: [
        "Diwali Vacation",
        "Revision Classes After Vacation"
      ]
    },
    {
      month: "November",
      events: [
        "Second Term Begins",
        "Academic Projects & Assignments"
      ]
    },
    {
      month: "December",
      events: [
        "Christmas Vacation",
        "Annual Day & Cultural Programs"
      ]
    },
    {
      month: "January",
      events: [
        "Preliminary Examinations (Std X & XII)",
        "Career Guidance Sessions"
      ]
    },
    {
      month: "February",
      events: [
        "Annual Examination (All Classes)",
        "Internal Assessments"
      ]
    },
    {
      month: "March",
      events: [
        "Result Declaration",
        "Parent-Teacher Meeting",
        "Academic Session Closing"
      ]
    },
    {
      month: "April – May",
      events: [
        "Summer Vacation",
        "Teacher Training & Planning"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Academic Calendar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Paradise English Medium School & Junior College follows a well-planned
            academic calendar to ensure smooth learning, assessments, and overall
            student development throughout the year.
          </motion.p>
        </div>
      </section>

      {/* ================= CALENDAR SECTION ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Academic Year Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Important academic events, examinations, and vacations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calendarData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.month}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {item.events.map((event, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTE SECTION ================= */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-primary mb-3">
              Important Note
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The academic calendar is subject to change based on government
              guidelines, board notifications, and unforeseen circumstances.
              Parents and students are advised to stay in touch with the school
              office for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
