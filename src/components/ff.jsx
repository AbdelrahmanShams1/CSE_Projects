<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {filteredProjects.map((project) => {
    const IconComponent = getCategoryIcon(project.category);

    return (
      <div
        key={project.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div
                className={`bg-[#176d6a] text-white px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 mb-2`}
              >
                <IconComponent className="w-3 h-3" />
                {getCategoryName(project.category)}
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                {project.projectTitleAr}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {project.projectTitleEn}
              </p>
            </div>
            {project.imageUrl && (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
              <User className="w-3 h-3 text-gray-600" />
              {project.name}
            </span>
            <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
              <User className="w-3 h-3 text-gray-600" />
              {project.supervisorAr}
            </span>
          </div>

          <p className="text-gray-600 text-sm mt-4 line-clamp-2">
            {project.descriptionAr}
          </p>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {new Date(project.startTime).toLocaleDateString("ar-EG")}
            </span>
            <button
              onClick={() => setSelectedProject(project)}
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
</div>;

//////////////////////////////

if (selectedProject) {
  const IconComponent = getCategoryIcon(selectedProject.category);

  return (
    <div
      className="fixed inset-0 bg-gray-50 overflow-y-auto z-50"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={() => setSelectedProject(null)}
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
            {getCategoryName(selectedProject.category)}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-right">
                <h1 className="text-2xl font-bold text-gray-800">
                  {selectedProject.projectTitleAr}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {selectedProject.projectTitleEn}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <User className="w-4 h-4 text-gray-600" />
                    {selectedProject.name}
                  </span>
                </div>
              </div>
              {selectedProject.imageUrl && (
                <img
                  src={selectedProject.imageUrl}
                  alt="صورة المشروع"
                  className="w-full md:w-48 h-48 object-cover rounded-xl border-2 border-gray-200"
                />
              )}
            </div>

            {/* Arabic Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                وصف المشروع بالعربية
              </h2>
              <p className="text-gray-700 leading-relaxed text-right">
                {selectedProject.descriptionAr}
              </p>
            </div>

            {/* English Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" style={{ color: "#176d6a" }} />
                Project Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-left">
                {selectedProject.descriptionEn}
              </p>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
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
            <div className="bg-white rounded-xl shadow-lg p-6">
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
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5" style={{ color: "#176d6a" }} />
                أعضاء الفريق
              </h3>
              <div className="space-y-3">
                {selectedProject.teamMembers
                  .split(/[\\-]/)
                  .map((member, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg flex items-start"
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex-shrink-0" />
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
                    {new Date(selectedProject.startTime).toLocaleDateString(
                      "ar-EG"
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">تاريخ الانتهاء:</span>
                  <span>
                    {new Date(
                      selectedProject.completionTime
                    ).toLocaleDateString("ar-EG")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">البريد الإلكتروني:</span>
                  <span className="text-teal-600">{selectedProject.email}</span>
                </div>
              </div>
            </div>

            {/* Document Link */}
            <div className="bg-white rounded-xl shadow-lg p-6">
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
