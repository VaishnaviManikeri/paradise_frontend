import React, { useState, useEffect } from "react";
import { announcementsAPI } from "../api";
import { Helmet } from "react-helmet";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    filterAnnouncements();
  }, [announcements, filter, searchTerm]);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const response = await announcementsAPI.getAll();
      setAnnouncements(response.data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAnnouncements = () => {
    let filtered = [...announcements];

    if (filter === "active") filtered = filtered.filter(a => a.isActive);
    if (filter === "archived") filtered = filtered.filter(a => !a.isActive);

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        a =>
          a.title.toLowerCase().includes(term) ||
          a.content.toLowerCase().includes(term)
      );
    }

    setFilteredAnnouncements(filtered);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 24) return "Today";
    if (diffInHours < 48) return "Yesterday";
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
    return formatDate(dateString);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16 md:pt-20 pb-8 sm:pb-12">
      {/* SEO */}
      <Helmet>
        <title>Announcements | Jadhavar International School</title>
        <meta
          name="description"
          content="Stay updated with the latest announcements, notices, and important information from Jadhavar International School."
        />
      </Helmet>

      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pt-4 sm:pt-6">
          <div className="inline-block p-2 sm:p-3 bg-blue-100 rounded-full mb-3 sm:mb-4">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2 sm:mb-3 px-2">
            Announcements
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-700 max-w-2xl mx-auto px-3 sm:px-4">
            Stay updated with the latest news and important information from
            Jadhavar International School.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["all", "active", "archived"].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-200 ${
                    filter === type
                      ? type === "active"
                        ? "bg-green-600 text-white shadow-sm"
                        : type === "archived"
                        ? "bg-gray-600 text-white shadow-sm"
                        : "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-56 md:w-64 lg:w-72 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                <svg 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-blue-600 rounded-full mx-auto mb-3 sm:mb-4"></div>
            <p className="text-blue-700 text-sm sm:text-base">Loading announcements...</p>
          </div>
        ) : filteredAnnouncements.length > 0 ? (
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {filteredAnnouncements.map(a => (
              <div
                key={a._id}
                className={`bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 p-4 sm:p-5 md:p-6 ${
                  a.isActive
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              >
                {/* Announcement Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 line-clamp-2">
                      {a.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                        a.isActive
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {a.isActive ? "Active" : "Archived"}
                    </span>
                  </div>
                </div>

                {/* Date Info */}
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 mb-3 sm:mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(a.date)}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {getTimeAgo(a.date)}
                  </span>
                </div>

                {/* Announcement Content */}
                <div className="text-sm sm:text-base text-blue-800 leading-relaxed whitespace-pre-line">
                  {a.content}
                </div>

                {/* Mobile Date Info (Alternative Layout) */}
                <div className="sm:hidden flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="text-xs text-blue-500">
                    {getTimeAgo(a.date)}
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-white rounded-lg sm:rounded-xl shadow border border-gray-100">
            <div className="inline-block p-3 sm:p-4 bg-blue-50 rounded-full mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mb-1 sm:mb-2">
              No announcements found
            </h3>
            <p className="text-blue-500 text-sm sm:text-base max-w-md mx-auto px-4">
              {searchTerm 
                ? `No results for "${searchTerm}". Try different keywords.`
                : filter !== "all" 
                  ? `No ${filter} announcements available.`
                  : "No announcements available at the moment."}
            </p>
            {(searchTerm || filter !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Stats Footer (Optional) */}
        {!loading && filteredAnnouncements.length > 0 && (
          <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm sm:text-base text-blue-600">
              <div>
                Showing <span className="font-semibold">{filteredAnnouncements.length}</span> of{" "}
                <span className="font-semibold">{announcements.length}</span> announcements
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                  <span>Active: {announcements.filter(a => a.isActive).length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                  <span>Archived: {announcements.filter(a => !a.isActive).length}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Line clamp for title */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Better touch targets on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 36px;
            min-width: 36px;
          }
          
          input, select, textarea {
            font-size: 16px; /* Prevent zoom on iOS */
          }
        }

        /* Smooth scrolling for announcements */
        .announcement-content {
          max-height: 200px;
          overflow-y: auto;
        }

        /* Custom scrollbar for webkit browsers */
        .announcement-content::-webkit-scrollbar {
          width: 4px;
        }

        .announcement-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }

        .announcement-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }

        .announcement-content::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }

        /* Optimize for very small screens */
        @media (max-width: 360px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          
          h1 {
            font-size: 1.5rem;
          }
        }

        /* Improve button focus states for accessibility */
        button:focus, input:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Smooth transitions */
        * {
          transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Announcements;