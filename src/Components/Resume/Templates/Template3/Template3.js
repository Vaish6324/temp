import React, { forwardRef } from "react";
import styles from "./Template3.module.css";

const Template3 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          {/* Name & Title (Left Side) */}
          <div className={styles.nameTitle}>
            <h1>{info.basicInfo.name || "Your Name"}</h1>
            <p className={styles.title}>{info.basicInfo.title || "Your Position"}</p>
          </div>

          {/* Contact Information (Right Side) */}
          <div className={styles.contactInfo}>
            <ul>
              {info.basicInfo.email && <li>✉️ {info.basicInfo.email}</li>}
              {info.basicInfo.phone && <li>📞 {info.basicInfo.phone}</li>}
              {info.basicInfo.linkedin && (
                <li>
                  🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
              )}
              {info.basicInfo.github && (
                <li>
                  🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a>
                </li>
              )}
            </ul>
          </div>
        </header>

        {/* Summary */}
        <section>
          <div className={styles.sectionTitle}>Summary <span className={styles.line}></span></div>
          <p>{info.summary}</p>
        </section>

        {/* Experience */}
        <section>
          <div className={styles.sectionTitle}>Experience <span className={styles.line}></span></div>
          {info.workExperience.map((exp, index) => (
            <div key={index}>
              <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
              <ul>
                {exp.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <div className={styles.sectionTitle}>Education <span className={styles.line}></span></div>
          {info.education.map((edu, index) => (
            <p key={index}>
              <strong>{edu.title}</strong> - {edu.college} <br /> ({edu.startDate} - {edu.endDate})
            </p>
          ))}
        </section>

        {/* Skills */}
        <section className={styles.skillsSection}>
          <div className={styles.sectionTitle}>Skills <span className={styles.line}></span></div>
          <ul className={styles.skillList}>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <div className={styles.sectionTitle}>Achievements <span className={styles.line}></span></div>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Projects (Fixed Section) */}
        <section>
          <div className={styles.sectionTitle}>Projects <span className={styles.line}></span></div>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <h4>{project.title}</h4>
              
              {project.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.github}
                  </a>
                </p>
              )}

              {project.link && (
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                </p>
              )}

              {project.points?.length > 0 && (
                <div>
                  <strong>Description:</strong>
                  <ul>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
});

export default Template3;
