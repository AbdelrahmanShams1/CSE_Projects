import React from "react";
import {
  ArrowLeft,
  User,
  Users,
  FileText,
  Calendar,
  Code,
  Database,
  Cpu,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const ProjectDetailsPage = ({ project, onBackToList }) => {
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

  const getCategoryName = (category) => {
    switch (category) {
      case "security":
        return "أمن المعلومات";
      case "embedded":
        return "أنظمة مدمجة";
      case "networks":
        return "شبكات";
      case "software":
        return "برمجيات";
      case "ai":
        return "ذكاء اصطناعي";
      default:
        return "عام";
    }
  };

  const IconComponent = getCategoryIcon(project.category);

  return (
    <div
      className="fixed inset-0 bg-gray-50 overflow-y-auto z-50"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={onBackToList}
            className="flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: "#176d6a" }}
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للقائمة
          </button>

          <div
            className={`bg-[#176d6a] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}
          >
            <IconComponent className="w-4 h-4" />
            {getCategoryName(project.category)}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between rtl items-center gap-6">
              <img
                src={project.imageUrl}
                className="w-[300px] h-[300px] rounded-lg"
                alt={project.projectTitleAr}
              />
              <div className="text-center md:text-right">
                <h1 className="text-2xl font-bold text-gray-800">
                  {project.projectTitleAr}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {project.projectTitleEn}
                </p>
              </div>
            </div>

            {/* Arabic Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                وصف المشروع بالعربية
              </h2>
              <p className="text-gray-700 leading-relaxed text-right">
                {project.descriptionAr}
              </p>
            </div>

            {/* English Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                Project Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-left">
                {project.descriptionEn}
              </p>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Code className="w-5 h-5" style={{ color: "#176d6a" }} />
                التقنيات المستخدمة
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.split(/[,\s]+/).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Supervisor */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5" style={{ color: "#176d6a" }} />
                المشرف
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium text-right">
                  {project.supervisorAr}
                </p>
                <p className="text-gray-600 text-sm text-left">
                  {project.supervisorEn}
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5" style={{ color: "#176d6a" }} />
                أعضاء الفريق
              </h3>
              <div className="space-y-3">
                {project.teamMembers.split(/[\\-]/).map((member, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg flex items-start"
                  >
                    <p className="text-sm text-gray-700 text-right leading-relaxed mr-2">
                      {member.trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: "#176d6a" }} />
                معلومات المشروع
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">تاريخ البدء:</span>
                  <span>
                    {new Date(project.startTime).toLocaleDateString("ar-EG")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">تاريخ الانتهاء:</span>
                  <span>
                    {new Date(project.completionTime).toLocaleDateString(
                      "ar-EG"
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Document Link */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                الوثائق
              </h3>
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#176d6a" }}
              >
                <FileText className="w-4 h-4" />
                عرض المستند
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
