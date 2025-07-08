import React, { useState } from "react";
import {
  ChevronRight,
  Calendar,
  User,
  Users,
  FileText,
  Filter,
  ArrowLeft,
  Eye,
  Code,
  Database,
  Cpu,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const GraduationProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");

  // البيانات الأساسية للمشاريع
  const projects = [
    {
      id: "1",
      startTime: "2025-07-05 22:27:24",
      completionTime: "2025-07-05 22:27:49",
      email: "MAHER.Gomaa1411213@el-eng.menofia.edu.eg",
      name: "ماهر جمعه اسماعيل سيد",
      projectTitleAr: "تأمين النظم الحساسة بإستخدام منهجيات الذكاء الاصطناعي",
      projectTitleEn:
        "Securing sensitive systems using artificial intelligence methodologies",
      supervisorAr: "مروه احمد شومان",
      imageUrl:
        "https://github.com/AbdelrahmanShams1/Template_One/blob/main/%E2%80%94Pngtree%E2%80%94global%20data%20security%20personal%20data_1752646.jpg",
      supervisorEn: "Marwa Ahmed Shouman",
      teamMembers:
        "ماهر جمعه اسماعيل سيد(قائد الفريق , مصمم نظام التأمين , مدرب موديل الذكاء الاصطناعي ) -علياء نبيل علي مصطفى ( مصممة الواجهة ) - فاطمه ايهاب عبدلله كامل ( مصمة الواجهة)",
      descriptionAr:
        "مشروع نظام الأمان SecSys يُعد حلاً أمنيًا متكاملاً مخصصاً للمنظمات الحساسة، يقدم مراقبة فورية وكشف ذكي للتهديدات مع واجهة تحكم ميسرة. يعتمد على تقنيات متطورة تشمل Flask للنظام الخلفي، وHTML/CSS/JavaScript للواجهة الأمامية، وTensorFlow وOpenCV لتحليل الصور والصوت، مع دعم ميزات مثل كشف العواطف واكتشاف الانحرافات الصوتية. يشمل النظام إشعاراً لعربات الشرطة وقسم الشرطة، وحساب أقرب المسارات لجميع العربات مع مراعاة الازدحام المروري، بالإضافة إلى نظام تشفير متقدم للبيانات الحساسة تم تطويره بتقنيات مبتكرة من قبل فريق المشروع.",
      descriptionEn:
        "The SecSys Security System is a comprehensive security solution designed for sensitive organizations, offering real-time monitoring, intelligent threat detection, and an intuitive control interface. It leverages advanced technologies, including Flask for the backend, HTML/CSS/JavaScript for the frontend, and TensorFlow and OpenCV for image and audio analysis, with features such as emotion detection and anomaly sound identification. The system includes notifications to police vehicles and stations, calculates the nearest routes for all vehicles considering traffic congestion, and incorporates a proprietary encryption system for sensitive data, developed innovatively by the project team.",
      technologies:
        "Python Flask HTML CSS JavaScript TensorFlow OpenCV SQLAlchemy Docker",
      category: "security",
      documentUrl:
        "https://elengmenofiaedu-my.sharepoint.com/personal/ah_he_kasas_el-eng_menofia_edu_eg/_layouts/15/Doc.aspx?sourcedoc=%7B692FEA22-935F-478A-8CB9-B3C0DEE51F40%7D&file=SecSys_%D9%85%D8%A7%D9%87%D8%B1%20%D8%AC%D9%85%D8%B9%D9%87%20%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%20%D8%B3.docx&action=default&mobileredirect=true",
    },
    {
      id: "2",
      startTime: "2025-07-05 22:34:26",
      imageUrl:
        "/public/—Pngtree—global data security personal data_1752646.jpg",
      completionTime: "2025-07-05 23:07:58",
      email: "1900444@el-eng.menofia.edu.eg",
      name: "معاذ انور محمد على سليمان",
      projectTitleAr:
        "نظام ذكي لتقليل استهلاك الطاقة والصيانة التنبؤية باستخدام الذكاء الاصطناعي",
      projectTitleEn:
        "Power Consumption Optimization and Predictive Maintenance Smart System",
      supervisorAr: "د. مروة شومان",
      supervisorEn: "Dr. Marwa Shouman",
      teamMembers:
        "معاذ أنور سليمان - قائد الفريق ومسؤول عن الهارد ويير وربط جميع أجزاء المشروع ببعضه.\\ ناريمان امام- مسؤولة عن تطبيق الجورزمات الذكاء الاصطناعي\\ مريم رمضان- مسؤولة عن تحليل البيانات وتجميعها\\ إبراهيم عبد المنعم - مسؤول عن نشر المشروع وتصميم هيكل المشروع\\ منة لله محمد - مسؤولة عن الأبليكيشن.",
      descriptionAr:
        "يهدف هذا المشروع إلى تصميم وتنفيذ نظام ذكي يعتمد على تقنيات الذكاء الاصطناعي من أجل تقليل استهلاك الطاقة في المصانع وتحسين جدولة الصيانة من خلال التنبؤ بالأعطال قبل وقوعها.",
      descriptionEn:
        "This project aims to design and implement an intelligent system based on Artificial Intelligence techniques to reduce energy consumption in industrial environments and optimize maintenance schedules by predicting potential failures before they occur.",
      technologies:
        "Python,Scikit-learn,Pandas & NumPy,FastAPI,Flask ,SQLite ,Flutter ,Dart ,Docker ,Git & GitHub,Raspberry Pi 4,Draw.io,Markdown",
      category: "embedded",
      documentUrl:
        "https://elengmenofiaedu-my.sharepoint.com/personal/ah_he_kasas_el-eng_menofia_edu_eg/_layouts/15/Doc.aspx?sourcedoc=%7BF7FCD0E8-C2DA-4795-AD20-FADA9E48A7DB%7D&file=Project%20Info_%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%86%D9%88%D8%B1%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D9%84%D9%89%20%D8%B3.docx&action=default&mobileredirect=true",
    },
  ];

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

  {
    /* Header section */
  }
  <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
    {/* University Logo */}
    <img
      src="/images/university-logo.png" // ضع هنا مسار شعار الجامعة
      alt="شعار الجامعة"
      className="w-20 h-20 object-contain"
    />

    {/* University Name Image */}
    <img
      src="/images/university-name.png" // ضع هنا صورة مكتوب فيها اسم الجامعة
      alt="اسم الجامعة"
      className="h-16 object-contain"
    />
  </header>;

  if (selectedProject) {
    const IconComponent = getCategoryIcon(selectedProject.category);

    return (
      <div
        className="min-h-screen bg-gray-50"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity mb-4"
              style={{ backgroundColor: "#176d6a" }}
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للقائمة
            </button>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {selectedProject.imageUrl && (
                <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                          {selectedProject.projectTitleAr}
                        </h1>
                        <p className="text-xl text-gray-600 mt-1">
                          {selectedProject.projectTitleEn}
                        </p>
                      </div>
                    </div>
                    <span
                      className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
                      style={{ backgroundColor: "#176d6a" }}
                    >
                      {getCategoryName(selectedProject.category)}
                    </span>
                  </div>
                  <img
                    src={selectedProject.imageUrl}
                    alt="صورة المشروع"
                    className="w-[250px] h-[250px] rounded-md"
                  />
                </div>
              )}
              {/* Arabic Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                  وصف المشروع بالعربية
                </h2>
                <p className="text-gray-700 leading-relaxed text-right">
                  {selectedProject.descriptionAr}
                </p>
              </div>

              {/* English Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                  Project Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-left">
                  {selectedProject.descriptionEn}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <Code className="w-5 h-5" style={{ color: "#176d6a" }} />
                  التقنيات المستخدمة
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies
                    .split(/[,\s]+/)
                    .map((tech, index) => (
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
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <User className="w-5 h-5" style={{ color: "#176d6a" }} />
                  المشرف
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium text-right">
                    {selectedProject.supervisorAr}
                  </p>
                  <p className="text-gray-600 text-sm text-left">
                    {selectedProject.supervisorEn}
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Users className="w-5 h-5" style={{ color: "#176d6a" }} />
                  أعضاء الفريق
                </h3>
                <div className="space-y-3">
                  {selectedProject.teamMembers
                    .split(/[\\-]/)
                    .map((member, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 text-right leading-relaxed">
                          {member.trim()}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5" style={{ color: "#176d6a" }} />
                  معلومات المشروع
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">تاريخ البدء:</span>{" "}
                    {new Date(selectedProject.startTime).toLocaleDateString(
                      "ar-EG"
                    )}
                  </p>
                  <p>
                    <span className="font-medium">تاريخ الانتهاء:</span>{" "}
                    {new Date(
                      selectedProject.completionTime
                    ).toLocaleDateString("ar-EG")}
                  </p>
                  <p>
                    <span className="font-medium">البريد الإلكتروني:</span>{" "}
                    {selectedProject.email}
                  </p>
                </div>
              </div>

              {/* Document Link */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  الوثائق
                </h3>
                <a
                  href={selectedProject.documentUrl}
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
  }

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            مشاريع التخرج
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            قسم الحاسبات - كلية الهندسة
          </p>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "#176d6a" }}
          ></div>
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
                  onClick={() => setFilterCategory(key)}
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

        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: "#176d6a" }}>
                <tr className="text-white">
                  <th className="px-6 py-4 text-right font-semibold">
                    اسم المشروع
                  </th>
                  <th className="px-6 py-4 text-right font-semibold">
                    قائد الفريق
                  </th>
                  <th className="px-6 py-4 text-right font-semibold">المشرف</th>
                  <th className="px-6 py-4 text-right font-semibold">النوع</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => {
                  const IconComponent = getCategoryIcon(project.category);
                  return (
                    <tr
                      key={project.id}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4">
                        <div className="text-right">
                          <h3 className="font-medium text-gray-800">
                            {project.projectTitleAr}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.projectTitleEn}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700">
                        {project.supervisorAr}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm"
                          style={{ backgroundColor: "#176d6a" }}
                        >
                          <IconComponent className="w-4 h-4" />
                          {getCategoryName(project.category)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
                          style={{ backgroundColor: "#176d6a" }}
                        >
                          <Eye className="w-4 h-4" />
                          عرض التفاصيل
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Projects Summary */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            عدد المشاريع المعروضة:{" "}
            <span className="font-semibold">{filteredProjects.length}</span> من
            أصل <span className="font-semibold">{projects.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraduationProjects;
