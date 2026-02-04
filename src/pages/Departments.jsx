import { motion } from "framer-motion";

const Departments = () => {
  const departments = [
    {
      title: "Pre-Primary Department",
      grades: "Nursery – KG",
      description:
        "The Pre-Primary Department at Paradise English Medium School focuses on early childhood education through play-based and activity-oriented learning. It builds a strong foundation for language, numbers, creativity, and social skills.",
      points: [
        "Play-based and joyful learning",
        "Early literacy and numeracy",
        "Storytelling, rhymes, and art",
        "Social and emotional development"
      ]
    },
    {
      title: "Primary Department",
      grades: "Std I – V",
      description:
        "The Primary Department emphasizes academic fundamentals along with discipline, values, and creativity. Students develop strong reading, writing, and problem-solving skills in a supportive learning environment.",
      points: [
        "English, Mathematics, EVS",
        "Science and Social Studies basics",
        "Computer education",
        "Moral values and discipline"
      ]
    },
    {
      title: "Secondary Department",
      grades: "Std VI – X",
      description:
        "The Secondary Department prepares students for board examinations while strengthening analytical thinking and conceptual understanding. Focus is given to academics, regular assessments, and overall personality development.",
      points: [
        "Board exam-oriented teaching",
        "Science, Mathematics & Social Science",
        "Computer / IT education",
        "Regular tests and revision"
      ]
    },
    {
      title: "Junior College Department",
      grades: "Std XI – XII",
      description:
        "The Junior College Department provides focused academic training for higher secondary education. Students receive expert guidance, career counseling, and strong academic support for future goals.",
      points: [
        "Science & Commerce streams",
        "Experienced subject teachers",
        "Career guidance & counseling",
        "Practical and concept-based learning"
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
            Our Academic Departments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Paradise English Medium School & Junior College offers well-structured
            departments that ensure quality education, discipline, and holistic
            development at every academic level.
          </motion.p>
        </div>
      </section>

      {/* ================= DEPARTMENTS SECTION ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-10">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-primary mb-2">
                {dept.title}
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                Classes: <span className="font-semibold">{dept.grades}</span>
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed">
                {dept.description}
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {dept.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-primary font-bold mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY OUR DEPARTMENTS ================= */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Paradise?
            </h2>
            <p className="text-xl text-gray-600">
              Our departments are designed to deliver academic excellence,
              disciplined learning, and career-oriented education with a strong
              focus on values and student growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
