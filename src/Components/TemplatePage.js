import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TemplatePage.css";
const templates = [
  {
    id: 1,
    title: "Template 1",
    image:
      "https://cdn.enhancv.com/predefined-examples/DuL0GzrjhjZHr0mwbwgPitMJ3Z20hVmYHQciz6rm/image.png",
    withPhoto: true,
    columns: 1,
  },
  {
    id: 2,
    title: "Template 2",
    image:
      "https://www.myperfectresume.com/wp-content/uploads/2024/03/aeronautical-engineer-resume-format.svg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 3,
    title: "Template 3",
    image:
      "https://cdn-images.zety.com/pages/resume_formats_template_nanica.png",
    withPhoto: true,
    columns: 2,
  },
  {
    id: 4,
    title: "Template 4",
    image:
      "https://images.squarespace-cdn.com/content/v1/5a0a3c9a8fd4d276810a8a9e/1698864127374-OJCFKLMY3BXCXFUO8WK6/Resume-Template-10-pdf.png",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 5,
    title: "Template 5",
    image:
      "https://www.hubspot.com/hs-fs/hubfs/resume-templates-word_24.webp?width=415&height=536&name=resume-templates-word_24.webp",
    withPhoto: true,
    columns: 1,
  },
  {
    id: 6,
    title: "Template 6",
    image:
      "https://cdn.enhancv.com/predefined-examples/DuL0GzrjhjZHr0mwbwgPitMJ3Z20hVmYHQciz6rm/image.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 7,
    title: "Template 7",
    image:
      "https://resumekraft.com/wp-content/uploads/2021/03/Application-Specialist-Resume.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 8,
    title: "Template 8",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738127771/NextStepCv/yjonyxqykpzdy3xqhuh9.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 9,
    title: "Template 9",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738128263/NextStepCv/nv8fxy3jptakvhdlprhx.png",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 10,
    title: "Template 10",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738135561/NextStepCv/sq0itbfkprxe8zbfv52o.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 11,
    title: "Template 11",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738319708/NextStepCv/n94ierpzbmdyo7hl6cpc.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 12,
    title: "Template 12",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738403354/NextStepCv/template12.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 13,
    title: "Template 13",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738405902/NextStepCv/template13.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 14,
    title: "Template 14",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738552039/NextStepCv/template14.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 15,
    title: "Template 15",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738579536/NextStepCv/template15.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 16,
    title: "Template 16",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738579536/NextStepCv/template16.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 17,
    title: "Template 17",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738650434/NextStepCv/template17.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 18,
    title: "Template 18",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738579536/NextStepCv/template18.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 19,
    title: "Template 19",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738834239/NextStepCv/gkqzvwbfyrlehwvyzqdf.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 20,
    title: "Template 20",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1738834239/NextStepCv/yir6fnzwktjbz8ixgiva.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 21,
    title: "Template 21",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739106777/NextStepCv/iyag7r6btx7ddsrqknuj.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 22,
    title: "Template 22",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739106778/NextStepCv/noxkyfvirntwbujm2aon.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 23,
    title: "Template 23",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739106777/NextStepCv/mlpranwzjn0pgnhmnzsl.jpg",
    withPhoto: false,
    columns: 1,
  },
  {
    id: 24,
    title: "Template 24",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739109590/NextStepCv/mzuniofyiy9cl6qbsle3.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 25,
    title: "Template 25",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739630477/Resume-template/mu1av8fnrfoqndx1yhoy.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 26,
    title: "Template 26",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739625687/Resume-template/hpn2l7vbpahd8xwyllku.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 27,
    title: "Template 27",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739627838/Resume-template/tmnwmvotsslipt4aui2a.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 28,
    title: "Template 28",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739541845/Resume-template/dsestdnlmr0c3hdswc61.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 29,
    title: "Template 29",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739610499/Resume-template/iarwnjnzoyeyjjzqptet.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 30,
    title: "Template 30",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739612041/Resume-template/ilzgddc6jdbyjdbyxygr.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 31,
    title: "Template 31",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739544990/Resume-template/iwncf990fjmiw5tcux28.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 32,
    title: "Template 32",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739545726/Resume-template/cxjjgbn7bbjc63adwxae.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 33,
    title: "Template 33",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739547155/Resume-template/ru65ujdjwnj8watd2de9.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 34,
    title: "Template 34",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739554459/Resume-template/rnadkppslplvy3bpbgyq.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 35,
    title: "Template 35",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739613111/Resume-template/ltxffdzcxjb5pwqlnaxm.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 36,
    title: "Template 36",
    image:
      "https://res.cloudinary.com/dcbtvmkmb/image/upload/v1739636794/Resume-template/uvvb1sweto2cgklk0rkn.png",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 37,
    title: "Template 37",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 51,
    title: "Template 51",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 52,
    title: "Template 52",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 53,
    title: "Template 53",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 54,
    title: "Template 54",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
  {
    id: 55,
    title: "Template 55",
    image:
      "https://res.cloudinary.com/dajopw7zz/image/upload/v1739804921/NextStepCv/template37.jpg",
    withPhoto: false,
    columns: 2,
  },
];

const colors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#9b59b6",
  "#f39c12",
  "#1abc9c",
  "#8e44ad",
  "#d35400",
];

const TemplatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#3498db");
  const [filters, setFilters] = useState({ withPhoto: false, columns: null });
  const navigate = useNavigate();

  document.documentElement.style.setProperty("--theme-color", selectedColor);

  const handleTemplateClick = (id) => setSelectedTemplate(id);
  const handleColorClick = (color) => setSelectedColor(color);

  const handleFilterChange = (filterType) => {
    setFilters((prev) => ({ ...prev, [filterType]: !prev[filterType] }));
  };

  const handleColumnFilterChange = (columns) => {
    setFilters((prev) => ({
      ...prev,
      columns: prev.columns === columns ? null : columns,
    }));
  };

  const clearFilters = () => setFilters({ withPhoto: false, columns: null });

  const filteredTemplates = templates.filter((template) => {
    if (filters.withPhoto && !template.withPhoto) return false;
    if (filters.columns && filters.columns !== template.columns) return false;
    return true;
  });

  const handleChooseTemplate = () => {
    if (selectedTemplate) {
      navigate("/resume", { state: { templateId: selectedTemplate } });
    } else {
      alert("Please select a template first.");
    }
  };

  return (
    <div className="template-page">
      <div className="filters-section">
        <h2>Color</h2>
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="color-circle"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
              role="button"
              tabIndex="0"
              aria-label={`Select color ${color}`}
              onKeyDown={(e) => e.key === "Enter" && handleColorClick(color)}
            />
          ))}
        </div>

        <h2>Filters</h2>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={filters.columns === 1} 
              onChange={() => handleColumnFilterChange(1)}
            />
            1 Column
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.columns === 2}
              onChange={() => handleColumnFilterChange(2)}
            />
            2 Columns
          </label>
        </div>

        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="main-content">
        <h1>Popular templates for students</h1>
        <p>You can always change your template later.</p>

        <div className="template-container">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                className={`template-card ${
                  selectedTemplate === template.id ? "active" : ""
                }`}
                onClick={() => handleTemplateClick(template.id)}
                role="button"
                tabIndex="0"
                aria-label={`Select template ${template.title}`}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleTemplateClick(template.id)
                }
              >
                <img src={template.image} alt={template.title} />
                <p>{template.title}</p>
              </div>
            ))
          ) : (
            <p className="no-templates-message">
              No templates match the selected filters.
            </p>
          )}
        </div>

        <div className="action-buttons">
          <button className="choose-later">Choose Later</button>
          <button className="choose-template" onClick={handleChooseTemplate}>
            Choose Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
