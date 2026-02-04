import { motion } from "framer-motion";

const Syllabus = () => {
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
            Academic Syllabus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Paradise English Medium School & Junior College follows a
            well-structured syllabus designed to build strong academic
            foundations and overall development.
          </motion.p>
        </div>
      </section>

      {/* ================= SYLLABUS DETAILS ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">

          {/* Pre-Primary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Pre-Primary (Nursery – KG)
            </h2>
            <p className="text-gray-700 mb-4">
              The pre-primary syllabus focuses on play-based and activity-based
              learning to develop early skills and confidence.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Alphabet and number recognition</li>
              <li>Rhymes, stories, and creative activities</li>
              <li>Basic drawing and coloring</li>
              <li>Social and motor skill development</li>
            </ul>
          </motion.div>

          {/* Primary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Primary School (Std I – V)
            </h2>
            <p className="text-gray-700 mb-4">
              The primary syllabus builds strong fundamentals in academics along
              with moral values and discipline.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>English, Mathematics, EVS</li>
              <li>Basic Science and Social Studies</li>
              <li>Computer Education</li>
              <li>Physical Education and Art</li>
            </ul>
          </motion.div>

          {/* Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Secondary School (Std VI – X)
            </h2>
            <p className="text-gray-700 mb-4">
              The secondary syllabus prepares students for board examinations
              while enhancing analytical and problem-solving skills.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>English, Mathematics, Science</li>
              <li>Social Science</li>
              <li>Computer / Information Technology</li>
              <li>Exam-oriented preparation and assessments</li>
            </ul>
          </motion.div>

          {/* Junior College */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Junior College (Std XI – XII)
            </h2>
            <p className="text-gray-700 mb-4">
              The junior college syllabus focuses on academic excellence and
              career readiness with expert guidance.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Science & Commerce streams</li>
              <li>Board exam preparation</li>
              <li>Career guidance and counseling</li>
              <li>Practical and concept-based learning</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Syllabus;
