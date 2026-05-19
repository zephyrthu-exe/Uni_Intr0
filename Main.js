const categories = [
    { id: 'engineering', label: 'Engineering', icon: 'fa-users-gear' },
    { id: 'it', label: 'IT', icon: 'fa-code' },
    { id: 'polytechnic', label: 'Polytechnic', icon: 'fa-gears' },
    { id: 'maritime', label: 'Maritime', icon: 'fa-ship' },
    { id: 'aviation', label: 'Aviation', icon: 'fa-plane-up' },
    { id: 'art', label: 'Art', icon: 'fa-graduation-cap' },
    { id: 'medicine', label: 'Medicine', icon: 'fa-staff-snake' },
    { id: 'medtech', label: 'MedTech', icon: 'fa-laptop-medical' },
    { id: 'pharmacy', label: 'Pharmacy', icon: 'fa-pills' },
    { id: 'nursing', label: 'Nursing', icon: 'fa-user-nurse' },
    { id: 'yezin', label: 'Yezin Universities', icon: 'fa-building-columns' },
    { id: 'economics', label: 'Economics', icon: 'fa-chart-line' },
    { id: 'education', label: 'Education', icon: 'fa-user-graduate' },
    { id: 'language', label: 'Foreign Language', icon: 'fa-language' },
    { id: 'management', label: 'Management College', icon: 'fa-people-group' }
];

const universities = [
    { id: 'ytu', category: 'engineering', name: 'Yangon Technological University', short: 'YTU', majors: ['Civil Engineering', 'Architecture', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Computer Engineering and Information Technology', 'Mechatronic Engineering', 'Chemical Engineering', 'Textile Engineering', 'Mining Engineering', 'Petroleum Engineering', 'Metallurgical Engineering and Materials Science'] },
    { id: 'mtu', category: 'engineering', name: 'Mandalay Technological University', short: 'MTU', majors: ['Civil Engineering', 'Architecture', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Computer Engineering and Information Technology', 'Mechatronic Engineering', 'Chemical Engineering'] },
    { id: 'wytu', category: 'engineering', name: 'West Yangon Technological University', short: 'WYTU', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering', 'Information Technology'] },
    { id: 'tu-pyay', category: 'engineering', name: 'Technological University Pyay', short: 'TU Pyay', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering'] },
    { id: 'tu-magway', category: 'engineering', name: 'Technological University Magway', short: 'TU Magway', majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Power Engineering', 'Electronic Engineering'] },
    { id: 'utycc', category: 'engineering', name: 'University of Technology - Yadanabon Cybercity', short: 'UTYCC', majors: ['Information Technology', 'Computer Engineering', 'Electronic Engineering'] },
    { id: 'uit', category: 'it', name: 'University of Information Technology', short: 'UIT', majors: ['Computer Science', 'Computer Technology', 'Information Science'] },
    { id: 'ucsy', category: 'it', name: 'University of Computer Studies Yangon', short: 'UCSY', majors: ['Computer Science', 'Computer Technology'] },
    { id: 'ucsmgy', category: 'it', name: 'University of Computer Studies Magway', short: 'UCSMGY', majors: ['Computer Science', 'Computer Technology'] },
    { id: 'miit', category: 'it', name: 'Myanmar Institute of Information Technology', short: 'MIIT', majors: ['Computer Science', 'Information Technology', 'Software Engineering'] },
    { id: 'nspu', category: 'polytechnic', name: 'Naypyitaw State Polytechnic University', short: 'NSPU', majors: ['Polytechnic and applied technology programs'] },
    { id: 'mmu', category: 'maritime', name: 'Myanmar Maritime University', short: 'MMU', majors: ['Marine Engineering', 'Nautical Science', 'Port and Harbour Engineering'] },
    { id: 'maeu', category: 'aviation', name: 'Myanmar Aerospace Engineering University', short: 'MAEU', majors: ['Aerospace Engineering', 'Avionics', 'Propulsion and Aircraft Systems'] },
    { id: 'yu', category: 'art', name: 'Yangon University', short: 'YU', majors: ['Arts', 'Science', 'Humanities', 'Social Sciences'] },
    { id: 'um1', category: 'medicine', name: 'University of Medicine 1', short: 'UM1', majors: ['Medicine and Surgery'] },
    { id: 'um2', category: 'medicine', name: 'University of Medicine 2', short: 'UM2', majors: ['Medicine and Surgery'] },
    { id: 'ummdy', category: 'medicine', name: 'University of Medicine Mandalay', short: 'UMMDY', majors: ['Medicine and Surgery'] },
    { id: 'ummgy', category: 'medicine', name: 'University of Medicine Magway', short: 'UMMGY', majors: ['Medicine and Surgery'] },
    { id: 'udm-yangon', category: 'medicine', name: 'University of Dental Medicine Yangon', short: 'UDM-Yangon', majors: ['Dental Medicine'] },
    { id: 'uch', category: 'medicine', name: 'University of Community Health', short: 'UCH', majors: ['Community Health'] },
    { id: 'uomtygn', category: 'medtech', name: 'University of Medical Technology Yangon', short: 'UOMTYGN', majors: ['Medical Laboratory Technology', 'Medical Imaging Technology'] },
    { id: 'uopygn', category: 'pharmacy', name: 'University of Pharmacy Yangon', short: 'UOPYGN', majors: ['Pharmacy'] },
    { id: 'uonygn', category: 'nursing', name: 'University of Nursing Yangon', short: 'UONYGN', majors: ['Nursing'] },
    { id: 'yau', category: 'yezin', name: 'Yezin Agricultural University', short: 'YAU', majors: ['Agriculture', 'Agronomy', 'Plant Science'] },
    { id: 'ufes', category: 'yezin', name: 'University of Forestry and Environmental Science', short: 'UFES', majors: ['Forestry', 'Environmental Science'] },
    { id: 'uvs', category: 'yezin', name: 'University of Veterinary Science', short: 'UVS', majors: ['Veterinary Science'] },
    { id: 'yueco', category: 'economics', name: 'Yangon University of Economics', short: 'YUECO', majors: ['Economics', 'Statistics', 'Commerce', 'Public Administration'] },
    { id: 'yuoe', category: 'education', name: 'Yangon University of Education', short: 'YUoE', majors: ['Education'] },
    { id: 'yufl', category: 'language', name: 'Yangon University of Foreign Language', short: 'YUFL', majors: ['English', 'Chinese', 'Japanese', 'Korean', 'French', 'German', 'Russian', 'Thai'] },
    { id: 'nmdc', category: 'management', name: 'National Management Degree College', short: 'NMDC', majors: ['Management', 'Business Administration'] }
];

const tabs = [
    { id: 'history', label: 'History' },
    { id: 'majors', label: 'Available Majors' },
    { id: 'cutoff', label: 'Cutoff Scores' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'why', label: 'Why' }
];

let currentCategory = null;
let currentUniversity = null;
let currentTab = 'history';

const views = {
    category: document.getElementById('categoryView'),
    list: document.getElementById('listView'),
    detail: document.getElementById('detailView')
};

const categoryGrid = document.getElementById('categoryGrid');
const universityList = document.getElementById('universityList');
const listTitle = document.getElementById('listTitle');
const detailTitle = document.getElementById('detailTitle');
const detailImage = document.getElementById('detailImage');
const detailTabs = document.getElementById('detailTabs');
const detailPanel = document.getElementById('detailPanel');
const backToCategories = document.getElementById('backToCategories');
const backToList = document.getElementById('backToList');
const homeLink = document.getElementById('Home');
const pageShell = document.getElementById('pageShell');

function showView(name) {
    Object.entries(views).forEach(([key, element]) => {
        element.classList.toggle('is-active', key === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCategory(id) {
    return categories.find((category) => category.id === id);
}

function getUniversity(id) {
    return universities.find((university) => university.id === id);
}

function renderCategories() {
    categoryGrid.innerHTML = categories.map((category) => `
        <button class="category-card" type="button" data-category-id="${category.id}">
            <i class="fa-solid ${category.icon}" aria-hidden="true"></i>
            <span class="category-card-title">${category.label}</span>
        </button>
    `).join('');
}

function renderUniversityList(categoryId) {
    currentCategory = categoryId;
    const category = getCategory(categoryId);
    const filtered = universities.filter((university) => university.category === categoryId);

    listTitle.textContent = category ? category.label + ' Universities' : 'Universities List';
    universityList.innerHTML = filtered.length
        ? filtered.map((university) => `
            <button class="university-row" type="button" data-university-id="${university.id}">
                <span class="university-name">${university.name}</span>
                <span class="short-badge">${university.short}</span>
                <i class="fa-solid fa-arrow-right row-arrow" aria-hidden="true"></i>
            </button>
        `).join('')
        : '<p class="empty-state">No universities have been added to this category yet.</p>';

    showView('list');
}

function renderDetail(universityId) {
    currentUniversity = getUniversity(universityId);
    currentTab = 'history';

    if (!currentUniversity) {
        return;
    }

    detailTitle.textContent = currentUniversity.name;
    renderImageSlot();
    renderTabs();
    renderPanel();
    showView('detail');
}

function renderImageSlot() {
    const imageSrc = currentUniversity.image || '';
    const imageAlt = currentUniversity.imageAlt || `${currentUniversity.name} campus image`;

    detailImage.innerHTML = imageSrc
        ? `
            <figure class="university-image-frame">
                <img src="${imageSrc}" alt="${imageAlt}" loading="lazy">
            </figure>
        `
        : `
            <div class="university-image-placeholder" role="img" aria-label="Image placeholder for ${currentUniversity.name}">
                <div class="image-placeholder-label">Campus Image</div>
                <i class="fa-solid fa-image" aria-hidden="true"></i>
                <span>${currentUniversity.short}</span>
                <small>Add image path in Main.js: image: 'images/${currentUniversity.id}.jpg'</small>
            </div>
        `;
}
function renderTabs() {
    detailTabs.innerHTML = tabs.map((tab) => {
        const label = tab.id === 'why' ? `Why ${currentUniversity.short} ?` : tab.label;
        const isActive = tab.id === currentTab;
        return `
            <button class="detail-tab${isActive ? ' is-active' : ''}" type="button" role="tab" aria-selected="${isActive}" data-tab-id="${tab.id}">
                ${label}
            </button>
        `;
    }).join('');
}

function renderPanel() {
    const university = currentUniversity;
    const majorItems = university.majors.map((major) => `<li>${major}</li>`).join('');
    const category = getCategory(university.category);

    const content = {
        history: `
            <h2>History</h2>
            <p>${university.name} (${university.short}) is listed in the ${category.label} category. This section is ready for the university history content you want to publish.</p>
            <p>Keep this page concise, factual, and easy for students to scan before adding longer stories or senior notes.</p>
        `,
        majors: `
            <h2>Available Majors</h2>
            <ul>${majorItems}</ul>
        `,
        cutoff: `
            <h2>Cutoff Scores</h2>
            <p>Cutoff score data has not been added yet. Add year, subject combination, minimum score, and source when the data is confirmed.</p>
        `,
        achievements: `
            <h2>Achievements</h2>
            <p>Achievement content has not been added yet. Add verified competitions, accreditations, research highlights, and student outcomes here.</p>
        `,
        why: `
            <h2>Why ${university.short} ?</h2>
            <p>${university.short} may be a good choice for students interested in ${category.label.toLowerCase()} programs and related career paths.</p>
            <p>Use this section for practical reasons: strengths, learning environment, opportunities, and what kind of student fits this university.</p>
        `
    };

    detailPanel.innerHTML = content[currentTab];
    detailPanel.focus({ preventScroll: true });
}

categoryGrid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-category-id]');
    if (!card) return;
    renderUniversityList(card.dataset.categoryId);
});

universityList.addEventListener('click', (event) => {
    const row = event.target.closest('[data-university-id]');
    if (!row) return;
    renderDetail(row.dataset.universityId);
});

detailTabs.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab-id]');
    if (!tab) return;
    currentTab = tab.dataset.tabId;
    renderTabs();
    renderPanel();
});

backToCategories.addEventListener('click', () => {
    currentCategory = null;
    showView('category');
});

backToList.addEventListener('click', () => {
    if (currentCategory) {
        renderUniversityList(currentCategory);
        return;
    }
    showView('category');
});

window.addEventListener('pageshow', () => {
    pageShell.classList.remove('animate');
});

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    pageShell.classList.remove('animate');
    void pageShell.offsetWidth;
    pageShell.classList.add('animate');
});

pageShell.addEventListener('animationend', (event) => {
    if (event.animationName === 'fadeOut') {
        window.location.href = homeLink.getAttribute('href');
    }
});

renderCategories();
