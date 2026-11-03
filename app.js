/* Project data is editorial content, intentionally easy to update.
   Public links point to actual repositories; professional case studies avoid private code. */
const projects = [
  {
    id: 'khatushyamji', title: 'Khatushyamji Temple Portal', label: 'GOVERNMENT / WEB APPLICATION', kind: 'PUBLIC REPOSITORY',
    filters: ['fullstack', 'frontend', 'backend'], visual: 'teal', preview: 'form', code: 'KJ',
    description: 'A responsive visitor-registration experience with validated inputs, custom web services, and Axpert API integration for temple workflows.',
    long: 'A public-facing registration solution designed for the Khatushyamji temple project. The work centered on a mobile-friendly experience and dependable submission of registration data to an existing application platform.',
    contributions: ['Built responsive registration UI with field validation and user-friendly feedback.', 'Integrated ASP.NET Web Forms and custom ASMX services with Axpert endpoints.', 'Supported registration and data handling flows across desktop, tablet, and mobile.'],
    tags: ['ASP.NET', 'C#', 'jQuery', 'Bootstrap', 'Axpert API'],
    github: 'https://github.com/Yasar75/Khatushyamji_Temple'
  },
  {
    id: 'pms', title: 'Project Monitoring System', label: 'ENTERPRISE / DASHBOARDS', kind: 'PUBLIC REPOSITORY',
    filters: ['fullstack', 'frontend'], visual: 'purple', preview: 'dashboard', code: 'PMS',
    description: 'Project tracking dashboards and resource visibility built around organizational workflows, reporting, and Axpert-powered data integration.',
    long: 'A monitoring experience for tracking ongoing and upcoming projects, with dashboards and associated reporting views. Developed inside the Axpert workflow ecosystem with custom HTML interfaces backed by its APIs.',
    contributions: ['Designed primary dashboard structures and project-oriented interface flows.', 'Connected UI modules to Axpert APIs and business data.', 'Supported management views, reporting workflows, and UI refinements.'],
    tags: ['JavaScript', 'Bootstrap', 'Dashboard UI', 'Axpert API'],
    github: 'https://github.com/Yasar75/PMS'
  },
  {
    id: 'onboarding', title: 'Recruitment & Onboarding', label: 'BACKEND / PEOPLE OPERATIONS', kind: 'PUBLIC REPOSITORY',
    filters: ['fullstack', 'backend'], visual: 'blue', preview: 'kanban', code: 'HR',
    description: 'A recruitment and employee onboarding platform with authentication, role-based workflows, interviews, offer letters, and PostgreSQL-backed APIs.',
    long: 'A workflow-driven onboarding application covering recruitment and employee entry points. The backend provides structured APIs for candidates, interviews, authentication, role permissions, and document-driven processes.',
    contributions: ['Implemented APIs for signup, login, recruitment processes, and interview scheduling.', 'Developed PostgreSQL-backed CRUD and validation modules.', 'Supported role-based access, offer and joining document workflows, and email communication.'],
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'REST API', 'Auth'],
    github: 'https://github.com/Yasar75/OnboadingSystem'
  },
  {
    id: 'employees', title: 'Employee Management System', label: 'FULL STACK / INTERNAL TOOLS', kind: 'PUBLIC REPOSITORY',
    filters: ['fullstack', 'frontend', 'backend'], visual: 'orange', preview: 'people', code: 'EMS',
    description: 'Employee data management using ASP.NET Core MVC, Entity Framework, PostgreSQL, React, and report generation.',
    long: 'An organizational management application with a .NET backend, relational persistence, API endpoints, reporting support, and a React-powered interface.',
    contributions: ['Built and integrated REST APIs with ASP.NET Core MVC and Entity Framework.', 'Used PostgreSQL and LINQ for data access and employee workflows.', 'Implemented frontend screens with React and reporting features using FastReport.'],
    tags: ['ASP.NET Core', 'EF Core', 'React', 'PostgreSQL', 'FastReport'],
    github: 'https://github.com/Yasar75/Employee_Management_System'
  },
  {
    id: 'chatroom', title: 'Real-time Chatroom API', label: 'BACKEND / REAL-TIME', kind: 'PUBLIC REPOSITORY',
    filters: ['backend'], visual: 'rose', preview: 'chat', code: 'CHAT',
    description: 'A .NET API experiment exploring real-time communication, protected messaging, pagination, and practical backend safeguards.',
    long: 'A backend-focused project exploring the structure and behavior of a chat service, including real-time communication and the supporting pieces needed for secure, scalable application flows.',
    contributions: ['Worked with ASP.NET Core Web API and SignalR for real-time messaging.', 'Implemented JWT-based access patterns and private message flows.', 'Explored pagination, input validation, and rate-limiting mechanisms.'],
    tags: ['.NET', 'SignalR', 'JWT', 'Web API'],
    github: 'https://github.com/Yasar75/ChatroomAPI'
  },
  {
    id: 'audioviz', title: 'AudioViz — LED Visualizer', label: 'PERSONAL / HARDWARE EXPERIMENT', kind: 'PUBLIC REPOSITORY',
    filters: ['iot', 'frontend'], visual: 'black', preview: 'leds', code: 'AV',
    description: 'An experimental audio-reactive LED system connecting desktop controls, UDP streaming, ESP32 hardware, and WS2812B lighting.',
    long: 'A personal software-and-hardware prototype to translate spatial audio activity into visual patterns across LED zones. The system pairs desktop controls with an ESP32-driven lighting setup.',
    contributions: ['Explored C# / WPF control interfaces and UDP-based communication.', 'Developed audio visualization concepts for left, center, and right LED zones.', 'Prototyped brightness, sensitivity, smoothness, and color-pattern controls for WS2812B LEDs.'],
    tags: ['C#', 'WPF', 'ESP32', 'UDP', 'WS2812B'],
    github: 'https://github.com/Yasar75/AudioViz'
  },
  {
    id: 'onegms', title: 'One GMS Workspace', label: 'PRODUCT / OPERATIONS', kind: 'SELECTED PROFESSIONAL WORK',
    filters: ['frontend', 'fullstack'], visual: 'green', preview: 'table', code: 'GMS',
    description: 'React-based operations dashboards for employee records, attendance, leave management, and integrated workflows.',
    long: 'Frontend contributions to an organization management web product across admin and employee-facing workflows, with integration into existing backend services.',
    contributions: ['Developed and refactored React-based dashboard and workflow screens.', 'Integrated API-backed employee, attendance, leave, and metadata views.', 'Supported Cloudinary setup, configuration, and frontend deployment readiness.'],
    tags: ['React', 'Vite', 'FastAPI', 'Axios', 'Cloudinary'],
    github: null
  },
  {
    id: 'wms', title: 'Welding Management System', label: 'ENTERPRISE / INDUSTRIAL', kind: 'SELECTED PROFESSIONAL WORK',
    filters: ['frontend', 'fullstack'], visual: 'yellow', preview: 'dashboard', code: 'WMS',
    description: 'Workflow UI and reporting experiences for welding operations, inspection tracking, coordination, and project status.',
    long: 'Frontend work for a welding operations platform that organizes production and inspection workflows, with particular attention to reporting, user feedback, and reliable interfaces.',
    contributions: ['Built workflow screens, report views, status displays, and validations.', 'Supported Reports Module backend data and output coordination.', 'Assisted with media/file storage configuration, report improvements, and release readiness.'],
    tags: ['React', 'JavaScript', 'REST API', 'Reports', 'Cloudinary'],
    github: null
  }
];

const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const safe = (value) => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

function previewContent(type) {
  const bar = `<div class="preview-bar"><i class="preview-dot"></i><i class="preview-dot"></i><i class="preview-dot"></i><span>workspace / ${type}</span></div>`;
  let content = '';
  if(type === 'form') content = '<div class="preview-heading"></div><div class="preview-row"><div class="preview-input"></div><div class="preview-input"></div></div><div class="preview-row"><div class="preview-input"></div></div><div class="preview-row"><div class="preview-input small"></div><div class="preview-input"></div></div><div class="preview-cta"></div>';
  if(type === 'dashboard') content = '<div class="preview-heading"></div><div class="preview-bar-chart"><i style="height:43%"></i><i style="height:65%"></i><i style="height:51%"></i><i style="height:83%"></i><i style="height:70%"></i><i style="height:92%"></i></div><div class="preview-mini-row"><b></b><b></b></div><div class="preview-mini-row"><b></b><b></b></div>';
  if(type === 'kanban') content = '<div class="preview-heading"></div><div class="preview-kanban"><div class="preview-kanban-col"><span>Applied</span><div class="preview-kanban-item"></div><div class="preview-kanban-item"></div></div><div class="preview-kanban-col"><span>Interview</span><div class="preview-kanban-item"></div></div><div class="preview-kanban-col"><span>Offer</span><div class="preview-kanban-item"></div><div class="preview-kanban-item"></div></div></div>';
  if(type === 'people') content = '<div class="preview-heading"></div><div class="preview-people">'+Array.from({length:6},(_,i)=>`<div class="preview-person"><span class="preview-avatar"></span><i></i></div>`).join('')+'</div>';
  if(type === 'chat') content = '<div class="preview-chat"><div class="chat-bubble"></div><div class="chat-bubble mine"></div><div class="chat-bubble"></div></div>';
  if(type === 'leds') content = '<div class="preview-heading"></div><div class="preview-leds">'+Array.from({length:25},(_,i)=>`<i style="--led-height:${16+Math.round(Math.abs(Math.sin(i*0.65)*77))}px;--led-color:${['#9eecc8','#94c4ed','#ceafd3','#f2c288'][Math.floor(i/6.5)]}"></i>`).join('')+'</div>';
  if(type === 'table') content = '<div class="preview-heading"></div><div class="preview-rows">'+Array.from({length:5},()=>'<div class="preview-table-row"><i></i><i></i><i></i><i></i></div>').join('')+'</div>';
  if(type === 'code') content = '<div class="preview-code-lines"><span>const</span> result = <em>await</em> api.fetch();<br />if (result.ok) {<br />&nbsp; process(result.data);<br />&nbsp; <em>return</em> { status: "ready" };<br />}</div>';
  return `<div class="preview-window">${bar}<div class="preview-body">${content}</div></div>`;
}
function projectCard(p, i) {
  return `<article class="project-card" data-categories="${p.filters.join(' ')}">
    <div class="project-visual visual-${p.visual}" aria-hidden="true"><span class="visual-index">PROJECT / ${String(i+1).padStart(2,'0')}</span><span class="visual-type">${safe(p.code)}</span>${previewContent(p.preview)}<span class="visual-big-label">${safe(p.code)}</span></div>
    <div class="project-card-body"><div class="project-head"><span class="project-kind">${safe(p.label)}</span><span class="project-code-label">${p.github ? 'OPEN SOURCE' : 'CASE STUDY'}</span></div>
    <h3>${safe(p.title)}</h3><p class="project-description">${safe(p.description)}</p><div class="project-tags">${p.tags.slice(0,4).map(t=>`<span>${safe(t)}</span>`).join('')}</div>
    <div class="project-links"><button class="project-detail-btn" data-project="${p.id}" aria-label="Read case study for ${safe(p.title)}" type="button">View case study ${icon('arrow-right')}</button>${p.github ? `<a class="project-link" target="_blank" rel="noopener noreferrer" href="${p.github}">GitHub ${icon('arrow-up-right')}</a>` : '<span class="project-private">Professional work</span>'}</div></div></article>`;
}

const grid = document.getElementById('project-grid');
grid.innerHTML = projects.map(projectCard).join('');

document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
  const filter = btn.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b => {const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  const visible = projects.filter(p => filter==='all' || p.filters.includes(filter));
  grid.innerHTML = visible.map(p => projectCard(p,projects.indexOf(p))).join('');
  document.getElementById('project-count').textContent = String(projects.length).padStart(2,'0');
}));

const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
grid.addEventListener('click',event => {
  const trigger=event.target.closest('[data-project]'); if(!trigger) return;
  const p=projects.find(item=>item.id===trigger.dataset.project); if(!p) return;
  dialogContent.innerHTML = `<div class="dialog-inner"><span class="dialog-eyebrow">${safe(p.label)} / ${p.github?'PUBLIC REPO':'PROFESSIONAL CASE STUDY'}</span><h2 id="dialog-title">${safe(p.title)}</h2><p class="dialog-lead">${safe(p.long)}</p><h3 class="dialog-section-label">MY CONTRIBUTIONS</h3><ul class="dialog-points">${p.contributions.map(s=>`<li>${safe(s)}</li>`).join('')}</ul><h3 class="dialog-section-label">TECHNOLOGY STACK</h3><div class="dialog-stack">${p.tags.map(t=>`<span>${safe(t)}</span>`).join('')}</div>${p.github?`<a class="dialog-action" href="${p.github}" target="_blank" rel="noopener noreferrer">Explore source on GitHub ${icon('external')}</a>`:''}</div>`;
  if(typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open','');
});
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close()});

const themeButton=document.querySelector('.theme-toggle');
const themeIcon=themeButton.querySelector('use');
function setTheme(theme) {document.documentElement.dataset.theme=theme;themeIcon.setAttribute('href',theme==='dark'?'#i-sun':'#i-moon');themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);try{localStorage.setItem('yasar-portfolio-theme',theme)}catch(e){}}
try{setTheme(localStorage.getItem('yasar-portfolio-theme')==='light'?'light':'dark')}catch(e){setTheme('dark')}
themeButton.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

const menuButton=document.querySelector('.menu-toggle');const menu=document.getElementById('mobile-menu');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');menuButton.querySelector('use').setAttribute('href','#i-menu')}
menuButton.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuButton.querySelector('use').setAttribute('href',open?'#i-close':'#i-menu')});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu()});

const toast=document.getElementById('toast');let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2200)}
document.getElementById('copy-email').addEventListener('click',async()=>{const email='Yasarreza456@gmail.com';try{if(!navigator.clipboard?.writeText)throw new Error('clipboard-unavailable');await navigator.clipboard.writeText(email);showToast('Email copied to clipboard')}catch(e){showToast('Email: '+email)}});
document.getElementById('current-year').textContent=new Date().getFullYear();