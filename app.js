'use strict';

const PROJECTS = {
  'one-gms': {
    title: 'One GMS', kind: 'Enterprise product · Frontend engineering', image: 'one-gms.webp',
    intro: 'An organization-management platform bringing employee information, attendance, leave management and role-based workspaces into a coherent product experience.',
    challenge: 'Workflows spanned different departments and needed consistent, easy-to-follow interfaces connected to backend services.',
    contribution: 'Developed and refactored React views for admin and employee workflows; integrated REST endpoints through reusable Axios services; implemented validation states and supported Cloudinary configuration and deployment readiness.',
    stack: ['React', 'Vite', 'JavaScript', 'Axios', 'React Router', 'FastAPI', 'PostgreSQL', 'Cloudinary'],
    source: 'https://github.com/Yasar75/ONE_GMS', sourceLabel: 'Public repository'
  },
  'wms': {
    title: 'Welding Management System', kind: 'Operations platform · Frontend & reporting', image: 'wms.webp',
    intro: 'A production-oriented internal system for welding work orders, inspections, operational records and reporting workflows.',
    challenge: 'Operational status, inspection activity and report workflows needed clear presentation to support day-to-day coordination.',
    contribution: 'Owned selected React frontend workflows, validation and report views; supported backend requirements for the Reports Module and configured Cloudinary for asset and document handling.',
    stack: ['React', 'JavaScript', 'Bootstrap', 'Axios', 'REST APIs', 'Reports', 'Cloudinary'],
    source: null
  },
  'pms': {
    title: 'Project Monitoring System', kind: 'Enterprise dashboard · Full-stack workflows', image: 'pms.webp',
    intro: 'A monitoring solution bringing project progress, delivery information, resources and reporting into a centralized view.',
    challenge: 'Different teams needed visibility into ongoing and upcoming work without navigating scattered reports or manual status updates.',
    contribution: 'Implemented monitoring and dashboard interfaces, connected Axpert APIs, supported resource and delivery workflows, and worked across UI, data queries and troubleshooting.',
    stack: ['ASP.NET', 'C#', 'JavaScript', 'jQuery', 'Bootstrap', 'Axpert API', 'SQL'],
    source: 'https://github.com/Yasar75/PMS', sourceLabel: 'View project repository'
  },
  'onboarding': {
    title: 'Recruitment & Onboarding', kind: 'Backend platform · Workflow architecture', image: 'onboarding.webp',
    intro: 'Recruitment and onboarding services supporting candidate registration, role-specific access, interview scheduling, offers and joining processes.',
    challenge: 'Hiring operations need a connected data model and reliable APIs to move candidates through multiple stages and document workflows.',
    contribution: 'Developed ASP.NET Core APIs for authentication, recruitment operations, metadata, interview management and offer/joining letters; implemented PostgreSQL-backed validations and email communication support.',
    stack: ['ASP.NET Core', 'C#', 'PostgreSQL', 'REST APIs', 'Swagger/OpenAPI', 'SMTP', 'Bootstrap'],
    source: 'https://github.com/Yasar75/OnboadingSystem', sourceLabel: 'View project repository'
  },
  'khatushyam': {
    title: 'Khatushyamji Registration', kind: 'Registration application · Web Forms', image: 'khatushyam.webp',
    intro: 'A responsive visitor-registration workflow connecting front-end form interactions to Axpert-backed data services.',
    challenge: 'The flow needed clear field validation, dependable data submission and consistent behavior across mobile and desktop views.',
    contribution: 'Built the Web Forms and jQuery interface, connected ASMX services with Axpert endpoints, handled input validation, duplicate registration scenarios and update flows.',
    stack: ['ASP.NET Web Forms', 'C#', 'ASMX', 'jQuery', 'Bootstrap 5', 'Axpert APIs'],
    source: 'https://github.com/Yasar75/Khatushyamji_Temple', sourceLabel: 'View project repository'
  },
  'audioviz': {
    title: 'AudioViz / LED Visualizer', kind: 'Personal experiment · Desktop & hardware', image: 'audioviz.webp',
    intro: 'An experimental Windows desktop controller that maps spatial audio output to LED lighting patterns driven by an ESP32.',
    challenge: 'Turning continuously changing audio spatial data into smooth, tunable and visually legible lighting across left, center and right LED zones.',
    contribution: 'Explored WPF controls for sensitivity, smoothness and brightness, UDP-based device communication, per-zone LED mapping and WS2812B firmware configuration.',
    stack: ['C#', 'WPF', 'ESP32', 'WS2812B', 'UDP', 'Audio processing'],
    source: 'https://github.com/Yasar75/AudioViz', sourceLabel: 'View project repository'
  },
  'chatroom': {
    title: 'Chatroom API', kind: 'Backend experiment · Real-time messaging', image: 'chatroom.webp',
    intro: 'A real-time messaging backend exploring authenticated private conversations and predictable API behavior.',
    challenge: 'Private messaging needs authenticated connections, ordered message access and consistent request handling at different traffic levels.',
    contribution: 'Built SignalR messaging flows, JWT-based access controls, pagination, private messaging endpoints and rate-limiting behavior in ASP.NET Core.',
    stack: ['ASP.NET Core', 'C#', 'SignalR', 'JWT', 'EF Core', 'SQLite'],
    source: 'https://github.com/Yasar75/ChatroomAPI', sourceLabel: 'View project repository'
  }
};

const qs = (selector, context=document) => context.querySelector(selector);
const qsa = (selector, context=document) => [...context.querySelectorAll(selector)];
const menuButton = qs('.menu-toggle');
const mobileNav = qs('#mobile-nav');

function setMenu(isOpen){
  menuButton?.setAttribute('aria-expanded',String(isOpen));
  menuButton?.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');
  if(mobileNav) mobileNav.hidden=!isOpen;
  const use = qs('use',menuButton);
  if(use) use.setAttribute('href',isOpen?'#ico-close':'#ico-menu');
}
menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
qsa('#mobile-nav a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
window.addEventListener('resize',()=>{if(window.innerWidth>850) setMenu(false)});

const filters=qsa('[data-filter]');
const cards=qsa('.project-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;
  filters.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
  cards.forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category});
}));

const dialog=qs('#case-dialog');
const dialogContent=qs('#dialog-content');
const dialogClose=qs('#dialog-close');
let previousFocus=null;
function makeParagraph(label,paragraph){
  const wrap=document.createElement('div');
  const title=document.createElement('strong');title.textContent=label;
  const desc=document.createElement('p');desc.textContent=paragraph;
  wrap.append(title,desc);return wrap;
}
function openProject(id){
  const p=PROJECTS[id];if(!p||!dialog||!dialogContent)return;
  previousFocus=document.activeElement;
  dialogContent.replaceChildren();
  const img=document.createElement('img');img.className='dialog-art';img.src=`assets/${p.image}`;img.alt=`Concept interface illustration for ${p.title}`;
  const caption=document.createElement('p');caption.className='dialog-caption';caption.textContent='Interface illustration with sample content — not a production screenshot.';
  const kicker=document.createElement('div');kicker.className='dialog-kicker';kicker.textContent=p.kind;
  const title=document.createElement('h2');title.id='case-title';title.textContent=p.title;
  const intro=document.createElement('p');intro.className='dialog-intro';intro.textContent=p.intro;
  const data=document.createElement('div');data.className='dialog-data';data.append(makeParagraph('The challenge',p.challenge),makeParagraph('My contribution',p.contribution));
  const stackTitle=document.createElement('h3');stackTitle.className='dialog-label';stackTitle.textContent='Technology stack';
  const stack=document.createElement('div');stack.className='dialog-chips';p.stack.forEach(x=>{const s=document.createElement('span');s.textContent=x;stack.append(s)});
  const actions=document.createElement('div');actions.className='dialog-links';
  if(p.source){const source=document.createElement('a');source.href=p.source;source.target='_blank';source.rel='noopener noreferrer';source.textContent=p.sourceLabel||'View source code';source.innerHTML+= ' <svg aria-hidden="true"><use href="#ico-up-right"></use></svg>';actions.append(source)}
  dialogContent.append(img,caption,kicker,title,intro,data,stackTitle,stack,actions);
  dialog.showModal();
}
qsa('.project-open').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
dialogClose?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog?.addEventListener('close',()=>{previousFocus?.focus?.();dialogContent?.replaceChildren()});
qs('#year').textContent=String(new Date().getFullYear());