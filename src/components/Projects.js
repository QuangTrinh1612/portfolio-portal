import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";

const Projects = () => {
  const works = [
    {
      stack: ["Azure", "Power BI", "Python"],
      description: "This Python-based project provides an object-oriented interface for interacting with Microsoft Power BI REST APIs. It supports various operations such as managing workspaces, datasets, reports, dashboards, and more. The project is designed with modularity and maintainability in mind, featuring components like authentication, session handling, and entity-specific modules.",
      title: "Power BI API Toolkit",
      github: "https://github.com/QuangTrinh1612/powerbi-api",
      url: "https://github.com/QuangTrinh1612/powerbi-api",
      image: "img/PowerBIAPI.jpg",
      index: 0,
    },
    {
      stack: ["dbt", "Airflow", "Python", "SAP", "Oracle Fusion"],
      description:
        "This project demonstrates how to build a data pipeline using dbt for data modeling and Apache Airflow for orchestration. The pipeline includes building dbt models and orchestrating them through Airflow to automate data processing and transformation tasks. It also includes the templates for SAP and Oracle Fusion Data Model to construct bronze, silver, gold until semantic layers",
      title: "ERP Analytics Framework",
      github: "https://github.com/QuangTrinh1612/erp-analytics-platform",
      url: "hhttps://github.com/QuangTrinh1612/erp-analytics-platform",
      image: "img/PowerBIAPI.jpg",
      index: 1,
    },
  ];
  return (
    <div className="projects">
      <h1 className="section__title">
        <Translate>Recent Projects</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;