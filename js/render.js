/**
 * Render Script
 * Renders the content from DATA into the HTML structure.
 */

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel();
    renderSkills();
    renderProjects();
    renderExperience();
    renderAwards();
    renderCertifications();
    renderReviews();
});

/* --- CAROUSEL RENDERER --- */
function renderCarousel() {
    const track = document.getElementById('track');
    if (!track) return;
    
    track.innerHTML = DATA.carousel.map((item, index) => `
        <div class="carousel-card ${item.className} ${index === 0 ? 'active' : ''}">
            <div class="carousel-card-inner">
                <div class="carousel-text-col">
                    <img src="${item.logoSmall}" alt="${item.id} 프로젝트 로고" class="carousel-logo-small" width="100" height="50" />
                    <div class="carousel-slogan">${item.slogan}</div>
                    <div class="carousel-detail">${item.detail}</div>

                    <div class="carousel-meta-grid">
                        <div class="meta-item">
                            <div class="meta-label">ROLE.</div>
                            ${item.role.map(r => `<div class="meta-value">${r}</div>`).join('')}
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">PERIOD.</div>
                            <div class="meta-value">${item.period}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">TOOL.</div>
                            <div class="meta-value">${item.tool.join('<br />')}</div>
                        </div>
                    </div>
                </div>

                <div class="carousel-image-col">
                    <img src="${item.mockup}" 
                         alt="${item.id} 서비스 목업 화면" 
                         class="carousel-mockup" 
                         width="600" 
                         height="400" />
                </div>
            </div>
        </div>
    `).join('');
}

/* --- SKILLS RENDERER --- */
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = DATA.skills.map(category => `
        <div class="skill-category">
            <h3 class="skill-cat-title">${category.category}</h3>
            <div class="skill-grid">
                ${category.items.map(skill => `
                    <div class="tech-chip">
                        <img src="${skill.icon}" alt="${skill.name} 개발 역량 아이콘" width="20" height="20" /> ${skill.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* --- PROJECTS RENDERER --- */
function renderProjects() {
    const container = document.getElementById('project-list');
    if (!container) return;

    container.innerHTML = DATA.projects.map(project => `
        <div class="project-impact-card reveal">
            <div class="project-impact-header">
                <div class="project-header-left">
                    <img src="${project.logo}" class="project-impact-logo ${project.logoInvert ? 'logo-invert' : ''}" alt="${project.title} 프로젝트 대표 로고" width="52" height="52" />
                    <div class="project-impact-title-group">
                        <p class="project-impact-title">${project.title}</p>
                        <span class="project-impact-subtitle">${project.subtitle}</span>
                    </div>
                </div>
                <a href="${project.link}" class="project-view-cta">View More →</a>
            </div>
            
            <div class="project-impact-tags">
                ${project.tags.map(tag => `<span class="project-tech-chip">${tag}</span>`).join('')}
            </div>
            
            <details class="project-impact-details">
                <summary class="project-impact-summary">주요 담당 파트 내용</summary>
                <div class="project-impact-body">
                    <ul class="project-impact-list">
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </details>
        </div>
    `).join('');
}

/* --- EXPERIENCE RENDERER --- */
function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = DATA.experience.map(exp => `
        <div class="experience-item reveal ${exp.delay || ''}">
            <span class="experience-date">${exp.period}</span>
            <h3 class="experience-title">${exp.title}</h3>
            <p class="text-desc">${exp.desc}</p>
            ${exp.subList ? `
                <ul class="sub-list">
                    ${exp.subList.map(item => `<li>${item}</li>`).join('')}
                </ul>
            ` : ''}
            ${exp.infoBox ? `
                <div class="info-box">
                    <strong>${exp.infoBox.title}</strong>
                    <p>${exp.infoBox.desc}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
}

/* --- AWARDS RENDERER --- */
function renderAwards() {
    const container = document.getElementById('awards-list');
    if (!container) return;

    container.innerHTML = DATA.awards.map(award => `
        <div class="record-item reveal ${award.delay || ''}">
            <div class="record-date">${award.date}</div>
            <div class="record-content">
                <div class="record-title">${award.title}</div>
                <div class="record-sub"><a href="${award.link}">${award.sub}</a></div>
            </div>
            <div class="record-badge award">${award.rank}</div>
        </div>
    `).join('');
}

/* --- CERTIFICATIONS RENDERER --- */
function renderCertifications() {
    const container = document.getElementById('certifications-list');
    if (!container) return;

    container.innerHTML = DATA.certifications.map(cert => `
        <div class="record-item reveal ${cert.delay || ''}">
            <div class="record-date">${cert.date}</div>
            <div class="record-content">
                <div class="record-title">${cert.title}</div>
                <div class="record-sub">${cert.sub}</div>
            </div>
        </div>
    `).join('');
}

/* --- REVIEWS RENDERER --- */
function renderReviews() {
    const container = document.getElementById('review-grid');
    if (!container) return;

    container.innerHTML = DATA.reviews.map(review => `
        <div class="review-card reveal ${review.hidden ? 'review-hidden' : ''} ${review.delay || ''}" data-review-id="${review.id}">
            <p class="review-text">${review.summary}</p>
            <div class="review-meta">
                <span class="review-author">${review.author}</span>
                <span class="review-project">${review.project}</span>
            </div>
        </div>
    `).join('');
    
    initializeReviewModal();
    applyProjectColors();
}

/* --- MODAL LOGIC & COLORS --- */
function initializeReviewModal() {
    const modal = document.getElementById('review-modal');
    const modalBody = document.getElementById('modal-body');
    
    document.querySelectorAll('.review-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-review-id');
            const data = DATA.reviews.find(r => r.id == id);
            if (data) {
                modalBody.innerHTML = data.fullContent;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

function applyProjectColors() {
    const projectColors = {
        "spico": "#42D596",
        "lufin": "#3b82f6",
        "docshund": "#B97E65",
        "everymatch": "#f1654c",
        "42seoul": "#0f172a"
    };

    document.querySelectorAll('.review-project').forEach(el => {
        const projectName = el.innerText.trim().toLowerCase();
        if (projectColors[projectName]) {
            el.style.color = projectColors[projectName];
        }
    });
}
