import React, { useEffect, useState } from "react";
import { galleryAPI } from "../api";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await galleryAPI.getAll();
      setItems(res.data);

      const unique = [
        "all",
        ...new Set(res.data.map((i) => i.category).filter(Boolean)),
      ];
      setCategories(unique);
    } catch (err) {
      console.error("Gallery fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filtered =
    category === "all"
      ? items
      : items.filter((i) => i.category === category);

  return (
    // ✅ EXTRA TOP MARGIN ADDED HERE
<div className="min-h-screen mt-32 sm:mt-36 md:mt-40 lg:mt-34 pb-12 bg-white-50">
      <Helmet>
        <title>Gallery | Jadhavar International School</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          School Photo Gallery
        </h1>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500">
            No images found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.imageUrl}   // ✅ CLOUDINARY URL
                  alt={item.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-3">
                  <h3 className="font-semibold truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
