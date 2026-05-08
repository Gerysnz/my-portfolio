import React from 'react';

const ProjectCard = ({ num, title, description, tags, badge, badgeType = 'muted', link }) => (
  <div className="proj-item">
    <span className="proj-num">{num}</span>
    <div className="proj-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="proj-tags-inline">
        {tags.map((t, i) => (
          <span className="ptag" key={i}>{t}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
          Ver proyecto →
        </a>
      )}
    </div>
    {badge && <span className={`proj-badge proj-badge--${badgeType}`}>{badge}</span>}
  </div>
);

export default ProjectCard;