import React from 'react';

function Certificate() {
  const certifications = [
    {
        title: 'Azure Solution Architect',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/QuangTrinh-7488/D6981DA93CF4C707?sharingId=400C38FC59E3A3D0',
        image: 'img/certificate/azure-solutions-architect-expert-600x600-1.png',
    },
    {
        title: 'Databricks DE Professional',
        url: 'https://credentials.databricks.com/8ff047d3-83a2-4f7b-bc0e-793638d84bc9#gs.dz2bv3',
        image: 'img/certificate/databricks-de-prof.png',
    },
    {
        title: 'AWS Data Engineer',
        url: 'https://www.credly.com/badges/7f6e80a7-0864-466e-ae2e-ca7d70d02816',
        image: 'img/certificate/aws-de.png',
    },
    {
        title: 'Azure CosmosDB Specialty',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/QuangTrinh-7488/DBC56622DFB526A0?sharingId=400C38FC59E3A3D0',
        image: 'img/certificate/cosmosdb-cert.png',
    },
    {
        title: 'Azure Data Engineer',
        url: 'https://learn.microsoft.com/en-us/users/quangtrinh-7488/credentials/703bde3c0d783678',
        image: 'img/certificate/azure-de.png',
    },
    {
        title: 'Azure Administrator',
        url: 'https://learn.microsoft.com/en-us/users/quangtrinh-7488/credentials/64622b5bdb05185d',
        image: 'img/certificate/azure-admin.png',
    },
    {
        title: 'Fabrics Analytics Engineer',
        url: 'https://learn.microsoft.com/en-us/users/quangtrinh-7488/credentials/334acff5abe5dccc',
        image: 'img/certificate/azure-fabrics.png',
    },
    {
        title: 'Azure Enterprise Data Analyst',
        url: 'https://learn.microsoft.com/en-us/users/quangtrinh-7488/credentials/e270ce249dc5dd57',
        image: 'img/certificate/azure-da-enterprise.png',
    },
    {
        title: 'Python Certificate',
        url: 'https://verify.openedg.org/?id=nFgN.9UhN.fHWv',
        image: 'img/certificate/python-associate.png',
    },
    {
        title: 'DAG Authoring for Apache Airflow',
        url: 'https://www.credly.com/badges/4e53393d-cd13-4ce9-88f2-7d2a75ac1723',
        image: 'img/certificate/airflow.png'
    },
  ];

  return (
    <section className="certifications_section">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">My professional credentials</span>
      
      <div className="certifications__grid container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification__card">
            <img
              src={cert.image}
              alt={`${cert.title} Badge`}
              className="certification__image"
            />
            <h3 className="certification__title">{cert.title}</h3>
            <a
              href={cert.url}
              className="certification__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;