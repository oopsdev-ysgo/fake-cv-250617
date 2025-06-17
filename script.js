
import { resumeData } from './data/resumeData.js';

// --- STATE MANAGEMENT ---
const state = {
    currentLanguage: 'kor',
};

// --- DOM SELECTORS ---
const DOMElements = {
    navbar: document.getElementById('navbar-container'),
    summary: document.getElementById('summary-container'),
    contents: document.getElementById('contents-container'),
    footer: document.getElementById('footer-container'),
    modal: document.getElementById('modal-container'),
    root: document.documentElement,
};

// --- ICON SVGs ---
// 아이콘을 SVG 코드로 직접 관리하여 파일 의존성을 줄입니다.
const ICONS = {
    email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.23.18 2.3.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
    linkedin: `<svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-12 5v10h4V13c0-1.11.22-2.78 2-2.78s1.78 1.67 1.78 2.78V18h4v-5.5c0-3.07-1.66-4.5-3.5-4.5-1.72 0-2.5 1.03-2.93 1.79H10.5V8H7m-1-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z"/></svg>`,
    blog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
};

// --- UTILS ---
/**
 * 현재 언어에 맞는 텍스트를 반환하는 함수
 * @param {object} localizedString - { kor: '...', eng: '...' } 형태의 객체
 * @returns {string} 현재 언어의 텍스트
 */
const t = (localizedString) => {
    return localizedString[state.currentLanguage] || localizedString['eng'];
};

// --- RENDER FUNCTIONS ---
const renderNavbar = () => {
    const { name } = resumeData;
    const menuItems = {
        kor: ["소개", "학력", "경력", "프로젝트", "기술", "연구", "수상/자격증"],
        eng: ["Intro", "Education", "Experience", "Projects", "Skills", "Research", "Awards"],
    };
    const menuLinks = ["introduction", "education", "experience", "projects", "skills", "research", "awards"];

    DOMElements.navbar.innerHTML = `
        <div class="navbar-content">
            <a href="#" class="navbar-title">${name}</a>
            <ul class="navbar-menu">
                ${menuItems[state.currentLanguage].map((item, i) => `
                    <li class="navbar-menu-item"><a href="#${menuLinks[i]}">${item}</a></li>
                `).join('')}
            </ul>
            <button class="lang-toggle">${state.currentLanguage === 'kor' ? 'ENG' : 'KOR'}</button>
        </div>
    `;
};

const renderSummary = () => {
    const { name, profileImage, tagline, contact, links, keywords, qualificationSummary } = resumeData;
    const localizedText = {
        contactTitle: { kor: "연락처", eng: "Contact" },
        linksTitle: { kor: "외부 링크", eng: "Links" },
        keywordsTitle: { kor: "주요 키워드", eng: "Keywords" },
        qualificationTitle: { kor: "주요 자격증", eng: "Qualification" },
        contactBtn: { kor: "연락하기", eng: "Contact Me" },
    }

    DOMElements.summary.innerHTML = `
        <div class="summary-panel">
            <div class="profile-section">
                <img src="${profileImage}" alt="Profile Picture">
                <h1 class="name">${name}</h1>
                <p class="tagline">${t(tagline)}</p>
            </div>
            <hr class="summary-divider">
            <div class="contact-info">
                <h3 class="summary-heading">${t(localizedText.contactTitle)}</h3>
                <ul>
                    <li>${ICONS.email}<span>${contact.email}</span></li>
                    <li>${ICONS.phone}<span>${contact.phone}</span></li>
                    <li>${ICONS.location}<span>${t(contact.location)}</span></li>
                </ul>
            </div>
            <hr class="summary-divider">
            <div class="external-links">
                <h3 class="summary-heading">${t(localizedText.linksTitle)}</h3>
                <ul>
                    <li>${ICONS.github}<a href="${links.github}" target="_blank">GitHub</a></li>
                    <li>${ICONS.linkedin}<a href="${links.linkedin}" target="_blank">LinkedIn</a></li>
                    <li>${ICONS.blog}<a href="${links.blog}" target="_blank">Blog</a></li>
                </ul>
            </div>
            <hr class="summary-divider">
            <div class="keywords">
                <h3 class="summary-heading">${t(localizedText.keywordsTitle)}</h3>
                <div class="tags">
                    ${keywords.map(keyword => `<span class="tag">${keyword}</span>`).join('')}
                </div>
            </div>
            <hr class="summary-divider">
            <div class="qualification">
                <h3 class="summary-heading">${t(localizedText.qualificationTitle)}</h3>
                <p>${t(qualificationSummary)}</p>
            </div>
            <button class="contact-cta-btn" data-modal="contact">${t(localizedText.contactBtn)}</button>
        </div>
    `;
};

const renderContents = () => {
    const { introduction, education, experience, projects, skills, research, awards } = resumeData;
    const localizedText = {
        intro: { kor: "소개", eng: "Introduction" },
        selfIntro: { kor: "자기소개", eng: "About Me" },
        goal: { kor: "목표", eng: "My Goal" },
        education: { kor: "학력", eng: "Education" },
        experience: { kor: "경력", eng: "Experience" },
        projects: { kor: "프로젝트", eng: "Projects" },
        skills: { kor: "기술", eng: "Skills" },
        research: { kor: "연구", eng: "Research" },
        awards: { kor: "수상 및 자격증", eng: "Awards & Certs" },
        viewProject: { kor: "프로젝트 보기", eng: "View Project" },
        viewPaper: { kor: "논문 보기", eng: "View Paper" },
    };

    DOMElements.contents.innerHTML = `
        <section id="introduction" class="content-section">
            <h2 class="section-title">${t(localizedText.intro)}</h2>
            <div class="introduction">
                <h3 class="subsection-title">${t(localizedText.selfIntro)}</h3>
                <p>${t(introduction.intro)}</p>
                <h3 class="subsection-title">${t(localizedText.goal)}</h3>
                <p>${t(introduction.goal)}</p>
            </div>
        </section>

        <section id="education" class="content-section">
            <h2 class="section-title">${t(localizedText.education)}</h2>
            <div class="timeline">
                ${education.map(edu => `
                    <div class="timeline-item">
                        <h3 class="degree">${t(edu.degree)}</h3>
                        <p class="institution">${t(edu.institution)}</p>
                        <p class="period">${edu.period}</p>
                        <p class="description">${t(edu.description)}</p>
                    </div>
                `).join('')}
            </div>
        </section>
        
        <section id="experience" class="content-section">
            <h2 class="section-title">${t(localizedText.experience)}</h2>
            <div class="experience-list">
                ${experience.map(exp => `
                    <div class="experience-card">
                        <h3 class="position">${t(exp.position)}</h3>
                        <div class="company-period">
                            <span class="company">${exp.company}</span>
                            <span class="period">${exp.period}</span>
                        </div>
                        <ul class="tasks">
                            ${exp.tasks.map(task => `<li>${t(task)}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="projects" class="content-section">
            <h2 class="section-title">${t(localizedText.projects)}</h2>
            <div class="projects-grid">
                ${projects.map(proj => `
                    <div class="project-card" data-modal="project" data-id="${proj.id}">
                        <img src="${proj.image}" alt="${t(proj.title)}">
                        <div class="project-card-content">
                            <h3 class="title">${t(proj.title)}</h3>
                            <p class="description">${t(proj.description)}</p>
                            <div class="project-card-tags">
                                ${proj.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="skills" class="content-section">
            <h2 class="section-title">${t(localizedText.skills)}</h2>
            <div class="skills-list">
                ${skills.map(skillCat => `
                    <div class="skill-category">
                        <h3 class="category-title">${t(skillCat.category)}</h3>
                        ${skillCat.list.map(skill => `
                            <div class="skill-item">
                                <span class="name">${skill.name}</span>
                                <div class="level-bar">
                                    <div class="level-fill" style="width: ${skill.level}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="research" class="content-section">
            <h2 class="section-title">${t(localizedText.research)}</h2>
            <div class="list-container">
                <ul>
                    ${research.map(res => `
                        <li>
                            <div class="list-item-main">
                                <p class="title">${t(res.title)}</p>
                                <p class="issuer">${t(res.venue)}</p>
                            </div>
                            <div class="list-item-side">
                                <span class="date">${res.date}</span>
                                <a href="${res.link}" target="_blank" class="link-btn">${t(localizedText.viewPaper)}</a>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </section>

        <section id="awards" class="content-section">
            <h2 class="section-title">${t(localizedText.awards)}</h2>
            <div class="list-container">
                <ul>
                    ${awards.map(award => `
                        <li>
                            <div class="list-item-main">
                                <p class="title">${t(award.name)}</p>
                                <p class="issuer">${t(award.issuer) || award.issuer}</p>
                            </div>
                            <div class="list-item-side">
                                <span class="date">${award.date}</span>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </section>
    `;
};

const renderFooter = () => {
    DOMElements.footer.innerHTML = `<p>${t(resumeData.footerText)}</p>`;
};

// --- MODAL FUNCTIONS ---
const openModal = (modalType, id) => {
    const localizedText = {
        contactTitle: { kor: "연락처 정보", eng: "Contact Information" },
        name: { kor: "이름", eng: "Name" },
        email: { kor: "이메일", eng: "Email" },
        message: { kor: "메시지", eng: "Message" },
        send: { kor: "보내기", eng: "Send" },
        skills: { kor: "사용 기술", eng: "Skills Used" },
        period: { kor: "개발 기간", eng: "Period" },
        viewOnGithub: { kor: "GitHub에서 보기", eng: "View on GitHub" },
    };

    let modalHTML = '';
    if (modalType === 'contact') {
        modalHTML = `
            <div class="modal-content contact-form-modal">
                <button class="modal-close-btn">&times;</button>
                <h3 class="modal-title">${t(localizedText.contactTitle)}</h3>
                <form class="contact-form">
                    <label for="name">${t(localizedText.name)}</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">${t(localizedText.email)}</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">${t(localizedText.message)}</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">${t(localizedText.send)}</button>
                </form>
            </div>
        `;
    } else if (modalType === 'project' && id) {
        const project = resumeData.projects.find(p => p.id === parseInt(id));
        if (project) {
            modalHTML = `
                <div class="modal-content project-detail-modal">
                    <button class="modal-close-btn">&times;</button>
                    <h3 class="modal-title">${t(project.title)}</h3>
                    <img src="${project.image}" alt="${t(project.title)}">
                    <p class="description">${t(project.description)}</p>
                    <div class="details">
                        <div>
                            <h4>${t(localizedText.skills)}</h4>
                            <div class="tags project-card-tags">
                                ${project.skills.map(s => `<span class="tag">${s}</span>`).join('')}
                            </div>
                        </div>
                        <div>
                            <h4>${t(localizedText.period)}</h4>
                            <p>${project.period}</p>
                        </div>
                    </div>
                     <a href="${project.link}" target="_blank" class="contact-cta-btn" style="margin-top: 1.5rem;">${t(localizedText.viewOnGithub)}</a>
                </div>
            `;
        }
    }

    if(modalHTML) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = modalHTML;
        DOMElements.modal.appendChild(overlay);
        // Animate in
        setTimeout(() => overlay.classList.add('active'), 10);
    }
};

const closeModal = () => {
    const overlay = DOMElements.modal.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        // Remove from DOM after transition
        overlay.addEventListener('transitionend', () => {
            if(DOMElements.modal.contains(overlay)) {
                DOMElements.modal.removeChild(overlay);
            }
        }, { once: true });
    }
};

// --- EVENT LISTENERS & APP INITIALIZATION ---
const bindEvents = () => {
    // Language toggle
    DOMElements.navbar.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-toggle')) {
            state.currentLanguage = state.currentLanguage === 'kor' ? 'eng' : 'kor';
            DOMElements.root.lang = state.currentLanguage;
            renderAll();
        }
        if (e.target.classList.contains('navbar-title')) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Modal triggers
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('[data-modal]');
        if(target){
            const modalType = target.dataset.modal;
            const id = target.dataset.id;
            openModal(modalType, id);
        }
    });

    // Modal close
    DOMElements.modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close-btn')) {
            closeModal();
        }
    });

    // Prevent form submission (for demo)
    DOMElements.modal.addEventListener('submit', (e) => {
        if(e.target.classList.contains('contact-form')){
            e.preventDefault();
            alert('Form submitted! (Demo)');
            closeModal();
        }
    })
};

const renderAll = () => {
    renderNavbar();
    renderSummary();
    renderContents();
    renderFooter();
};

const init = () => {
    DOMElements.root.lang = state.currentLanguage;
    renderAll();
    bindEvents();
};

// --- APP START ---
document.addEventListener('DOMContentLoaded', init);
