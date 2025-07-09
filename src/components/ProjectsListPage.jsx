import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Eye,
  Code,
  Database,
  Cpu,
  Globe,
  Shield,
  Zap,
  Filter,
} from "lucide-react";

import projects from "../data.json";

const ProjectsListPage = ({ onProjectSelect }) => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const categories = {
    all: { name: "جميع المشاريع", icon: Globe },
    software: { name: "برمجيات", icon: Code },
    networks: { name: "شبكات", icon: Database },
    embedded: { name: "أنظمة مدمجة", icon: Cpu },
    security: { name: "أمن المعلومات", icon: Shield },
    ai: { name: "ذكاء اصطناعي", icon: Zap },
  };

  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((project) => project.category === filterCategory);

  // حساب الصفحات
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // إعادة تعيين الصفحة عند تغيير الفلتر
  const handleFilterChange = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "security":
        return Shield;
      case "embedded":
        return Cpu;
      case "networks":
        return Database;
      case "software":
        return Code;
      case "ai":
        return Zap;
      default:
        return Globe;
    }
  };

  // مكون Pagination
  const PaginationComponent = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {/* زر الصفحة السابقة */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
          السابق
        </button>

        {/* أرقام الصفحات */}
        <div className="flex gap-1">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 rounded-lg transition-colors ${
                currentPage === number
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
              style={
                currentPage === number ? { backgroundColor: "#176d6a" } : {}
              }
            >
              {number}
            </button>
          ))}
        </div>

        {/* زر الصفحة التالية */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          التالي
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Container للصور واللوجو */}
          <div className="flex justify-between items-center mb-6">
            {/* الصورة على الشمال */}
            <div className="w-[50px] h-[50px] md:w-[150px] md:h-[70px]">
              <img
                src="/WhatsApp Image 2025-07-08 at 10.00.12_4be6af3a.jpg"
                alt="صورة الكلية"
                className="w-full h-full object-contain"
              />
            </div>

            {/* المحتوى في المنتصف */}
            <div className="flex-1 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                مشاريع التخرج
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                قسم هندسة وعلوم الحاسبات - كلية الهندسة الالكترونية بمنوف
              </p>
              <p className="text-lg md:text-l text-gray-600 mb-4">
                جامعة المنوفية
              </p>
              <div
                className="w-24 h-1 mx-auto rounded-full"
                style={{ backgroundColor: "#176d6a" }}
              ></div>
            </div>

            {/* لوجو الجامعة على اليمين */}
            <div className="w-20 h-20 md:w-24 md:h-24">
              <img
                src="/WhatsApp Image 2025-07-08 at 09.59.08_163a64a9.jpg"
                alt="لوجو الجامعة"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5" style={{ color: "#176d6a" }} />
            <h2 className="text-lg font-semibold text-gray-800">
              فلترة حسب نوع المشروع
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => handleFilterChange(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    filterCategory === key
                      ? "text-white"
                      : "text-gray-700 bg-white hover:bg-gray-100"
                  }`}
                  style={
                    filterCategory === key ? { backgroundColor: "#176d6a" } : {}
                  }
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {currentProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div
                        className={`bg-[#176d6a] text-white font-medium inline-flex items-center mb-2`}
                      >
                        <img src={project.imageUrl} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {project.projectTitleAr}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {project.projectTitleEn}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <User className="w-3 h-3 text-gray-600" />
                      {project.supervisorAr}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mt-4 line-clamp-2">
                    {project.descriptionAr}
                  </p>

                  <div className="mt-6 flex justify-center items-center">
                    <button
                      onClick={() => onProjectSelect(project)}
                      className="inline-flex items-center gap-1 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#176d6a" }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>عرض التفاصيل</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <PaginationComponent />

        {/* Projects Summary */}
        <div className="mt-8 text-center">
          <div className="space-y-2">
            <p className="text-gray-600">
              عرض المشاريع من {startIndex + 1} إلى{" "}
              {Math.min(endIndex, filteredProjects.length)} من أصل{" "}
              <span className="font-semibold">{filteredProjects.length}</span>
            </p>
            {filteredProjects.length !== projects.length && (
              <p className="text-gray-500 text-sm">
                إجمالي المشاريع:{" "}
                <span className="font-semibold">{projects.length}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListPage;
