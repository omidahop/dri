// ==================== APPLICATION CONSTANTS ====================
const APP_CONFIG = {
    version: '2.2.0',
    dbName: 'VibrateDataDB',
    dbVersion: 2,
    
    // Equipment data
    equipments: [
        { id: 'GB-cp48A', name: 'گیربکس کمپرسور 48A', code: 'GB-cp 48A', icon: 'fas fa-cog', color: '#8b5cf6' },
        { id: 'CP-cp48A', name: 'کمپرسور 48A', code: 'CP-cp 48A', icon: 'fas fa-compress', color: '#06b6d4' },
        { id: 'GB-cp48B', name: 'گیربکس کمپرسور 48B', code: 'GB-cp 48B', icon: 'fas fa-cog', color: '#8b5cf6' },
        { id: 'CP-cp48B', name: 'کمپرسور 48B', code: 'CP-cp 48B', icon: 'fas fa-compress', color: '#06b6d4' },
        { id: 'GB-cp51', name: 'گیربکس کمپرسور 51', code: 'GB-cp 51', icon: 'fas fa-cog', color: '#8b5cf6' },
        { id: 'CP-cp51', name: 'کمپرسور 51', code: 'CP-cp 51', icon: 'fas fa-compress', color: '#06b6d4' },
        { id: 'GB-cp71', name: 'گیربکس کمپرسور 71', code: 'GB-cp 71', icon: 'fas fa-cog', color: '#8b5cf6' },
        { id: 'CP-cp71', name: 'کمپرسور 71', code: 'CP-cp 71', icon: 'fas fa-compress', color: '#06b6d4' },
        { id: 'CP-cpSGC', name: 'کمپرسور سیل گس', code: 'CP-cp SGC', icon: 'fas fa-compress', color: '#06b6d4' },
        { id: 'FN-fnESF', name: 'فن استک', code: 'FN-fn ESF', icon: 'fas fa-fan', color: '#10b981' },
        { id: 'FN-fnAUX', name: 'فن اگزیلاری', code: 'FN-fn AUX', icon: 'fas fa-fan', color: '#10b981' },
        { id: 'FN-fnMAB', name: 'فن هوای اصلی', code: 'FN-fn MAB', icon: 'fas fa-fan', color: '#10b981' }
    ],
    
    // Parameter data
    parameters: [
        { id: 'V1', name: 'سرعت عمودی متصل', code: 'V1', icon: 'fas fa-arrow-up', color: '#ec4899', type: 'velocity', category: 'connected' },
        { id: 'GV1', name: 'شتاب عمودی متصل', code: 'GV1', icon: 'fas fa-arrow-up', color: '#f59e0b', type: 'acceleration', category: 'connected' },
        { id: 'H1', name: 'سرعت افقی متصل', code: 'H1', icon: 'fas fa-arrow-right', color: '#ec4899', type: 'velocity', category: 'connected' },
        { id: 'GH1', name: 'شتاب افقی متصل', code: 'GH1', icon: 'fas fa-arrow-right', color: '#f59e0b', type: 'acceleration', category: 'connected' },
        { id: 'A1', name: 'سرعت محوری متصل', code: 'A1', icon: 'fas fa-arrows-alt', color: '#ec4899', type: 'velocity', category: 'connected' },
        { id: 'GA1', name: 'شتاب محوری متصل', code: 'GA1', icon: 'fas fa-arrows-alt', color: '#f59e0b', type: 'acceleration', category: 'connected' },
        { id: 'V2', name: 'سرعت عمودی آزاد', code: 'V2', icon: 'fas fa-arrow-up', color: '#6366f1', type: 'velocity', category: 'free' },
        { id: 'GV2', name: 'شتاب عمودی آزاد', code: 'GV2', icon: 'fas fa-arrow-up', color: '#8b5cf6', type: 'acceleration', category: 'free' },
        { id: 'H2', name: 'سرعت افقی آزاد', code: 'H2', icon: 'fas fa-arrow-right', color: '#6366f1', type: 'velocity', category: 'free' },
        { id: 'GH2', name: 'شتاب افقی آزاد', code: 'GH2', icon: 'fas fa-arrow-right', color: '#8b5cf6', type: 'acceleration', category: 'free' },
        { id: 'A2', name: 'سرعت محوری آزاد', code: 'A2', icon: 'fas fa-arrows-alt', color: '#6366f1', type: 'velocity', category: 'free' },
        { id: 'GA2', name: 'شتاب محوری آزاد', code: 'GA2', icon: 'fas fa-arrows-alt', color: '#8b5cf6', type: 'acceleration', category: 'free' }
    ],
    
    // Units
    units: [
        { id: 'DRI1', name: 'واحد احیا مستقیم 1', code: 'DRI 1', color: '#3b82f6' },
        { id: 'DRI2', name: 'واحد احیا مستقیم 2', code: 'DRI 2', color: '#ef4444' }
    ],

    // Random colors for slideshow values
    randomColors: [
        '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', 
        '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1',
        '#14b8a6', '#f43f5e', '#a855f7', '#22d3ee', '#eab308',
        '#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6'
    ]
};

// ==================== DEXIE DATABASE SETUP ====================
const db = new Dexie(APP_CONFIG.dbName);

db.version(APP_CONFIG.dbVersion).stores({
    vibrateData: '++id, unit, equipment, date, parameters, timestamp, userName, [unit+equipment+date]',
    settings: '++id, key, value',
    users: '++id, name, role, avatar, createdAt'
});

// ==================== GLOBAL VARIABLES ====================
let currentSettings = {
    theme: 'light',
    primaryColor: '#2563eb',
    dri1Color: '#3b82f6',
    dri2Color: '#ef4444',
    // Equipment priority for slideshow (1-24)
    equipmentPriority: {},
    // Parameter priority for slideshow (1-12)
    parameterPriority: {},
    // Parameter mode: 'velocity-first' or 'custom'
    parameterMode: 'velocity-first',
    // Analysis settings
    analysisThreshold: 20, // percentage
    analysisTimeRange: 7, // days
    analysisComparisonDays: 1 // how many days back to compare
};

let currentUser = {
    name: 'کاربر میهمان',
    role: 'اپراتور تجهیزات',
    avatar: null
};

let dataEntryState = {
    mode: 'new', // 'new' or 'edit'
    selectedUnit: null,
    selectedDate: null,
    currentEquipmentIndex: 0,
    currentParameterIndex: 0,
    currentData: {},
    dateData: {},
    // Edit mode specific
    editSelectedUnit: null,
    editSelectedDate: null,
    editSelectedEquipment: null,
    editSelectedParameter: null,
    editCurrentValue: null
};

let slideshowState = {
    isRunning: false,
    isPaused: false,
    currentDate: null,
    currentEquipmentIndex: 0,
    currentParameterIndex: 0,
    interval: null,
    speed: 3000,
    data: {},
    isFullscreen: false,
    currentValueColor: '#3b82f6'
};

let chartInstance = null;

// ==================== UTILITY FUNCTIONS ====================
function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR');
}

function getRandomColor() {
    return APP_CONFIG.randomColors[Math.floor(Math.random() * APP_CONFIG.randomColors.length)];
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: var(--shadow-lg);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'error') {
        notification.style.background = 'var(--error-color)';
    } else if (type === 'warning') {
        notification.style.background = 'var(--warning-color)';
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'check-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function validateValue(value) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= 0 && num <= 20;
}

function getEquipmentByPriority() {
    if (Object.keys(currentSettings.equipmentPriority).length > 0) {
        return Object.entries(currentSettings.equipmentPriority)
            .sort(([,a], [,b]) => a - b)
            .map(([id]) => {
                // Handle both single equipment and unit-specific equipment
                const baseId = id.replace('_DRI1', '').replace('_DRI2', '');
                const equipment = APP_CONFIG.equipments.find(e => e.id === baseId);
                if (equipment) {
                    return {
                        ...equipment,
                        unit: id.includes('_DRI1') ? 'DRI1' : id.includes('_DRI2') ? 'DRI2' : null,
                        priorityId: id
                    };
                }
                return null;
            })
            .filter(Boolean);
    }
    
    return APP_CONFIG.equipments;
}

function getParametersByPriority() {
    if (currentSettings.parameterMode === 'velocity-first') {
        const velocityParams = APP_CONFIG.parameters.filter(p => p.type === 'velocity');
        const accelerationParams = APP_CONFIG.parameters.filter(p => p.type === 'acceleration');
        return [...velocityParams, ...accelerationParams];
    } else if (currentSettings.parameterMode === 'custom' && Object.keys(currentSettings.parameterPriority).length > 0) {
        return Object.entries(currentSettings.parameterPriority)
            .sort(([,a], [,b]) => a - b)
            .map(([id]) => APP_CONFIG.parameters.find(p => p.id === id))
            .filter(Boolean);
    }
    
    return APP_CONFIG.parameters;
}

function initializeDefaultPriorities() {
    if (Object.keys(currentSettings.equipmentPriority).length === 0) {
        // Initialize 24 equipment priorities (12 equipment × 2 units)
        let priority = 1;
        ['DRI1', 'DRI2'].forEach(unit => {
            APP_CONFIG.equipments.forEach(equipment => {
                currentSettings.equipmentPriority[`${equipment.id}_${unit}`] = priority++;
            });
        });
    }
    
    if (Object.keys(currentSettings.parameterPriority).length === 0) {
        APP_CONFIG.parameters.forEach((parameter, index) => {
            currentSettings.parameterPriority[parameter.id] = index + 1;
        });
    }
}

// ==================== DEBUG FUNCTIONS ====================
function debugDataEntryState() {
    console.log('=== DEBUG DATA ENTRY STATE ===');
    console.log('Selected Unit:', dataEntryState.selectedUnit);
    console.log('Selected Date:', dataEntryState.selectedDate);
    console.log('Current Equipment Index:', dataEntryState.currentEquipmentIndex);
    console.log('Current Parameter Index:', dataEntryState.currentParameterIndex);
    console.log('Date Data:', dataEntryState.dateData);
    console.log('LocalStorage keys:', Object.keys(localStorage).filter(k => k.includes('dateData')));
    console.log('===============================');
}

// For testing - call this in console
window.debugDataEntryState = debugDataEntryState;

// ==================== CACHE MANAGEMENT ====================
async function clearPreviousDaysCache() {
    try {
        const today = getCurrentDate();
        
        // Clear localStorage cache
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.includes('dateData') && !key.includes(today)) {
                keysToRemove.push(key);
            }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        // Clear internal cache if not working on today's data
        if (dataEntryState.selectedDate !== today) {
            dataEntryState.dateData = {};
            dataEntryState.currentData = {};
            dataEntryState.currentEquipmentIndex = 0;
            dataEntryState.currentParameterIndex = 0;
        }
        
        showNotification('کش روزهای قبل با موفقیت پاک شد', 'success');
        
        // Refresh the current view if we're in data entry
        if (dataEntryState.selectedUnit && dataEntryState.selectedDate) {
            await loadDateData();
            updateCurrentDisplay();
        }
        
    } catch (error) {
        console.error('Error clearing previous days cache:', error);
        showNotification('خطا در پاک کردن کش روزهای قبل', 'error');
    }
}

// ==================== DATABASE FUNCTIONS ====================
async function saveDataToDB(data) {
    try {
        // Add current user name to the data
        data.userName = currentUser.name;
        await db.vibrateData.put(data);
        return true;
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
}

async function getDataFromDB(filters = {}) {
    try {
        let collection = db.vibrateData;
        
        if (filters.unit && filters.equipment && filters.date) {
            collection = collection.where('[unit+equipment+date]').equals([filters.unit, filters.equipment, filters.date]);
        } else if (filters.unit) {
            collection = collection.where('unit').equals(filters.unit);
        } else if (filters.date) {
            collection = collection.where('date').equals(filters.date);
        }
        
        let results = await collection.toArray();
        
        if (filters.equipment && !filters.unit) {
            results = results.filter(r => r.equipment === filters.equipment);
        }
        if (filters.dateFrom) {
            results = results.filter(r => r.date >= filters.dateFrom);
        }
        if (filters.dateTo) {
            results = results.filter(r => r.date <= filters.dateTo);
        }
        
        return results;
    } catch (error) {
        console.error('Error getting data:', error);
        throw error;
    }
}

async function getLastUserFromDB() {
    try {
        const result = await db.vibrateData.orderBy('timestamp').last();
        return result ? result.userName : null;
    } catch (error) {
        console.error('Error getting last user:', error);
        return null;
    }
}

async function saveSettingsToDB(settings) {
    try {
        await db.settings.put({ key: 'appSettings', value: settings });
        return true;
    } catch (error) {
        console.error('Error saving settings:', error);
        throw error;
    }
}

async function getSettingsFromDB() {
    try {
        const result = await db.settings.where('key').equals('appSettings').first();
        return result ? result.value : null;
    } catch (error) {
        console.error('Error getting settings:', error);
        throw error;
    }
}

async function saveUserToDB(user) {
    try {
        await db.users.put({ ...user, createdAt: new Date() });
        return true;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

async function getUserFromDB() {
    try {
        const result = await db.users.orderBy('createdAt').last();
        return result || null;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
}

// ==================== THEME FUNCTIONS ====================
function toggleTheme() {
    currentSettings.theme = currentSettings.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    updateThemeIcon();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentSettings.theme);
    
    const root = document.documentElement;
    root.style.setProperty('--primary-color', currentSettings.primaryColor);
    root.style.setProperty('--dri1-color', currentSettings.dri1Color);
    root.style.setProperty('--dri2-color', currentSettings.dri2Color);
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = currentSettings.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ==================== NAVIGATION FUNCTIONS ====================
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    switch(sectionId) {
        case 'data-entry':
            initDataEntry();
            break;
        case 'view-data':
            initViewData();
            break;
        case 'charts':
            initCharts();
            break;
        case 'analysis':
            initAnalysis();
            break;
        case 'slideshow':
            initSlideshow();
            break;
        case 'database':
            initDatabase();
            break;
        case 'settings':
            initSettings();
            break;
    }
}

// ==================== USER MANAGEMENT FUNCTIONS ====================
function showUserModal() {
    document.getElementById('userNameInput').value = currentUser.name === 'کاربر میهمان' ? '' : currentUser.name;
    document.getElementById('userRole').value = currentUser.role;
    showModal('userModal');
}

async function saveUser() {
    const name = document.getElementById('userNameInput').value.trim();
    const role = document.getElementById('userRole').value;
    
    if (!name) {
        showNotification('لطفاً نام کاربری را وارد کنید', 'error');
        return;
    }
    
    currentUser.name = name;
    currentUser.role = role;
    
    try {
        await saveUserToDB(currentUser);
        updateUserDisplay();
        closeModal('userModal');
        showNotification('اطلاعات کاربر ذخیره شد', 'success');
    } catch (error) {
        showNotification('خطا در ذخیره اطلاعات کاربر', 'error');
    }
}

function updateUserDisplay() {
    // Update main user display
    document.getElementById('userName').textContent = currentUser.name;
    
    // Update user displays in view sections
    const userDisplayElements = [
        'currentUserDisplay',
        'currentUserDisplayCharts',
        'currentUserDisplayAnalysis'
    ];
    
    userDisplayElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = currentUser.name;
        }
    });
    
    const avatar = document.getElementById('userAvatar');
    if (currentUser.name !== 'کاربر میهمان') {
        avatar.textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        avatar.innerHTML = '<i class="fas fa-user"></i>';
    }
}
async function clearAllCache() {
    try {
        console.log('Starting complete cache clear...');
        
        // 1. Clear localStorage
        console.log('LocalStorage before clear:', Object.keys(localStorage));
        localStorage.clear();
        console.log('LocalStorage cleared');
        
        // 2. Clear sessionStorage
        sessionStorage.clear();
        console.log('SessionStorage cleared');
        
        // 3. Clear IndexedDB completely
        try {
            // Close current database connection
            if (db.isOpen()) {
                db.close();
            }
            
            // Delete the entire database
            await Dexie.delete(APP_CONFIG.dbName);
            console.log('IndexedDB database deleted');
            
            // Recreate database
            const newDb = new Dexie(APP_CONFIG.dbName);
            newDb.version(APP_CONFIG.dbVersion).stores({
                vibrateData: '++id, unit, equipment, date, parameters, timestamp, userName, [unit+equipment+date]',
                settings: '++id, key, value',
                users: '++id, name, role, avatar, createdAt'
            });
            
            await newDb.open();
            console.log('New IndexedDB database created');
            
            // Update global db reference
            window.db = newDb;
            
        } catch (dbError) {
            console.error('Error clearing IndexedDB:', dbError);
        }
        
        // 4. Clear Service Worker cache if exists
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(cacheName => {
                    console.log('Deleting cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
            console.log('All caches cleared');
        }
        
        // 5. Clear application state
        dataEntryState = {
            mode: 'new',
            selectedUnit: null,
            selectedDate: null,
            currentEquipmentIndex: 0,
            currentParameterIndex: 0,
            currentData: {},
            dateData: {},
            editSelectedUnit: null,
            editSelectedDate: null,
            editSelectedEquipment: null,
            editSelectedParameter: null,
            editCurrentValue: null
        };
        
        // 6. Reset settings to default
        currentSettings = {
            theme: 'light',
            primaryColor: '#2563eb',
            dri1Color: '#3b82f6',
            dri2Color: '#ef4444',
            equipmentPriority: {},
            parameterPriority: {},
            parameterMode: 'velocity-first',
            analysisThreshold: 20,
            analysisTimeRange: 7,
            analysisComparisonDays: 1
        };
        
        // 7. Reset user to default
        currentUser = {
            name: 'کاربر میهمان',
            role: 'اپراتور تجهیزات',
            avatar: null
        };
        
        console.log('All cache and data cleared successfully');
        
        // 8. Force page reload to ensure clean state
        showNotification('تمام داده‌ها و کش پاک شد. صفحه بازنشانی می‌شود...', 'success');
        
        setTimeout(() => {
            window.location.reload(true); // Force reload from server
        }, 2000);
        
        return true;
        
    } catch (error) {
        console.error('Error in clearAllCache:', error);
        showNotification('خطا در پاک کردن کش', 'error');
        return false;
    }
}
async function clearDateSpecificCache() {
    try {
        const today = getCurrentDate();
        console.log('Clearing cache for dates other than:', today);
        
        // 1. Clear localStorage date-specific keys
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                // Remove any keys that contain date patterns but not today's date
                if ((key.includes('dateData') || 
                     key.includes('cache') || 
                     key.includes('entry')) && 
                     !key.includes(today)) {
                    keysToRemove.push(key);
                }
            }
        }
        
        console.log('Removing localStorage keys:', keysToRemove);
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        // 2. Clear old data from IndexedDB 
        try {
            const allData = await db.vibrateData.where('date').below(today).toArray();
            console.log('Found old data entries:', allData.length);
            
            // Optional: Keep data but clear from memory cache
            // If you want to delete old data from DB:
            // await db.vibrateData.where('date').below(today).delete();
            
        } catch (dbError) {
            console.error('Error clearing old DB data:', dbError);
        }
        
        // 3. Reset application state
        dataEntryState.dateData = {};
        dataEntryState.currentData = {};
        dataEntryState.currentEquipmentIndex = 0;
        dataEntryState.currentParameterIndex = 0;
        
        // 4. Reset any active selections if not today
        if (dataEntryState.selectedDate !== today) {
            dataEntryState.selectedUnit = null;
            dataEntryState.selectedDate = null;
        }
        
        showNotification('کش روزهای قبل پاک شد', 'success');
        
        // 5. Refresh current view
        if (dataEntryState.selectedUnit && dataEntryState.selectedDate) {
            await loadDateData();
            updateCurrentDisplay();
        }
        
        // 6. Reset UI
        resetDataEntryState();
        
        return true;
        
    } catch (error) {
        console.error('Error clearing date-specific cache:', error);
        showNotification('خطا در پاک کردن کش', 'error');
        return false;
    }
}
async function resetApplicationCompletely() {
    if (!confirm('آیا می‌خواهید تمام داده‌ها، تنظیمات و کش را پاک کنید؟ این عمل قابل بازگشت نیست!')) {
        return;
    }
    
    try {
        // 1. Clear all storage
        await clearAllCache();
        
        // 2. Clear all cookies related to this domain
        document.cookie.split(";").forEach(function(c) { 
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
        });
        
        // 3. Clear browser cache programmatically (if possible)
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.unregister();
                console.log('Service worker unregistered');
            }
        }
        
        // 4. Force hard reload
        window.location.href = window.location.href.split('?')[0] + '?nocache=' + Date.now();
        
    } catch (error) {
        console.error('Error in complete reset:', error);
        // Fallback: force reload
        window.location.reload(true);
    }
}

// ==================== DATA ENTRY FUNCTIONS ====================
function switchDataEntryMode(mode) {
    dataEntryState.mode = mode;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${mode}EntryTab`).classList.add('active');
    
    // Toggle sections
    if (mode === 'new') {
        document.getElementById('newEntryMode').classList.remove('d-none');
        document.getElementById('editMode').classList.add('d-none');
    } else {
        document.getElementById('newEntryMode').classList.add('d-none');
        document.getElementById('editMode').classList.remove('d-none');
    }
    
    // Reset states
    resetDataEntryState();
}

function resetDataEntryState() {
    // Reset unit selections
    document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.equipment-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.parameter-card').forEach(card => card.classList.remove('selected'));
    
    // Hide sections
    document.getElementById('entryHeader').classList.add('d-none');
    document.getElementById('inputArea').classList.add('d-none');
    document.getElementById('newEntryControls').classList.add('d-none');
    document.getElementById('editEquipmentSection').classList.add('d-none');
    document.getElementById('editParameterSection').classList.add('d-none');
    document.getElementById('editInputArea').classList.add('d-none');
    document.getElementById('editControls').classList.add('d-none');
    
    // Reset state
    dataEntryState.selectedUnit = null;
    dataEntryState.selectedDate = null;
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
    dataEntryState.dateData = {};
    dataEntryState.currentData = {};
    dataEntryState.editSelectedUnit = null;
    dataEntryState.editSelectedDate = null;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    dataEntryState.editCurrentValue = null;
    
    // Reset date inputs
    document.getElementById('entryDateInput').value = getCurrentDate();
    document.getElementById('editDateInput').value = getCurrentDate();
}

async function setNextIncompletePosition() {
    const equipments = APP_CONFIG.equipments;
    const parameters = APP_CONFIG.parameters;
    
    console.log('Setting next incomplete position...');
    
    // Find first incomplete equipment
    for (let i = 0; i < equipments.length; i++) {
        const equipment = equipments[i];
        const equipmentData = dataEntryState.dateData[equipment.id];
        
        if (!equipmentData) {
            // Equipment not started
            dataEntryState.currentEquipmentIndex = i;
            dataEntryState.currentParameterIndex = 0;
            console.log(`Equipment ${equipment.name} not started`);
            return;
        }
        
        // Check if equipment is complete - all parameters must have valid values
        const validParams = parameters.filter(param => 
            equipmentData[param.id] !== undefined && 
            equipmentData[param.id] !== null && 
            equipmentData[param.id] !== '' &&
            !isNaN(equipmentData[param.id])
        );
        
        if (validParams.length < parameters.length) {
            // Equipment incomplete, find next parameter
            dataEntryState.currentEquipmentIndex = i;
            dataEntryState.currentParameterIndex = validParams.length;
            console.log(`Equipment ${equipment.name} incomplete: ${validParams.length}/${parameters.length}`);
            return;
        }
        
        console.log(`Equipment ${equipment.name} completed`);
    }
    
    // All equipment completed
    console.log('All equipment completed');
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
}

function showEntryInterface(unitId) {
    console.log('Showing entry interface for unit:', unitId);
    
    // Update unit button styles
    document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.unit-btn.${unitId.toLowerCase()}`).classList.add('selected');
    
    // Show entry interface
    const entryHeader = document.getElementById('entryHeader');
    entryHeader.classList.remove('d-none');
    entryHeader.className = `data-entry-header ${unitId.toLowerCase()}`;
    
    document.getElementById('inputArea').classList.remove('d-none');
    document.getElementById('newEntryControls').classList.remove('d-none');
    
    // Update current display
    updateCurrentDisplay();
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('dataInput').focus();
    }, 100);
}

async function selectUnit(unitId) {
    console.log('Selecting unit:', unitId, 'for date:', document.getElementById('entryDateInput').value);
    
    // Force complete state reset
    dataEntryState = {
        ...dataEntryState,
        selectedUnit: null,
        selectedDate: null,
        currentEquipmentIndex: 0,
        currentParameterIndex: 0,
        dateData: {},
        currentData: {}
    };
    
    const selectedDate = document.getElementById('entryDateInput').value;
    
    if (!selectedDate) {
        showNotification('لطفاً تاریخ را انتخاب کنید', 'error');
        return;
    }
    
    try {
        console.log('Forced state reset completed');
        
        // Set new values
        dataEntryState.selectedUnit = unitId;
        dataEntryState.selectedDate = selectedDate;
        
        // Clear ANY cached data for this combination
        const possibleCacheKeys = [
            `dateData_${unitId}_${selectedDate}`,
            `data_${unitId}_${selectedDate}`,
            `cache_${unitId}_${selectedDate}`,
            `entry_${unitId}_${selectedDate}`
        ];
        
        possibleCacheKeys.forEach(key => {
            localStorage.removeItem(key);
            sessionStorage.removeItem(key);
        });
        
        console.log('Cleared all possible cache keys');
        
        // Get fresh data from database ONLY
        const dateData = await getDataFromDB({ 
            unit: unitId, 
            date: selectedDate 
        });
        
        console.log('Fresh data from DB:', dateData);
        
        // Check completion with strict validation
        const equipmentIds = APP_CONFIG.equipments.map(e => e.id);
        let allCompleted = true;
        let completionReport = {};
        
        for (const equipmentId of equipmentIds) {
            const equipmentData = dateData.find(d => d.equipment === equipmentId);
            
            if (!equipmentData) {
                allCompleted = false;
                completionReport[equipmentId] = 'missing';
                continue;
            }
            
            // Very strict parameter validation
            const parameterValidation = {};
            let equipmentComplete = true;
            
            for (const param of APP_CONFIG.parameters) {
                const value = equipmentData.parameters[param.id];
                const isValid = value !== undefined && 
                              value !== null && 
                              value !== '' && 
                              !isNaN(value) &&
                              value >= 0 && 
                              value <= 20;
                
                parameterValidation[param.id] = isValid;
                if (!isValid) {
                    equipmentComplete = false;
                }
            }
            
            completionReport[equipmentId] = {
                complete: equipmentComplete,
                parameters: parameterValidation
            };
            
            if (!equipmentComplete) {
                allCompleted = false;
            }
        }
        
        console.log('Detailed completion report:', completionReport);
        
        if (allCompleted && dateData.length === equipmentIds.length) {
            console.log('All equipment completed - switching to edit mode');
            showNotification('تمام تجهیزات این واحد برای این تاریخ تکمیل شده. به حالت ویرایش منتقل می‌شوید.', 'info');
            switchDataEntryMode('edit');
            document.getElementById('editDateInput').value = selectedDate;
            selectEditUnit(unitId);
            return;
        }
        
        console.log('Not all equipment completed - continuing with new entry');
        
        // Load fresh data
        await loadDateData();
        showEntryInterface(unitId);
        
    } catch (error) {
        console.error('Error selecting unit:', error);
        showNotification('خطا در انتخاب واحد', 'error');
    }
}

async function selectEditUnit(unitId) {
    dataEntryState.editSelectedUnit = unitId;
    dataEntryState.editSelectedDate = document.getElementById('editDateInput').value;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    
    if (!dataEntryState.editSelectedDate) {
        showNotification('لطفاً تاریخ را انتخاب کنید', 'error');
        return;
    }
    
    // Update unit button styles
    document.querySelectorAll('#editMode .unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`#editMode .unit-btn.${unitId.toLowerCase()}`).classList.add('selected');
    
    // Show equipment selection
    document.getElementById('editEquipmentSection').classList.remove('d-none');
    
    // Render equipment cards
    renderEditEquipmentCards(unitId);
    
    // Hide parameter and input sections
    document.getElementById('editParameterSection').classList.add('d-none');
    document.getElementById('editInputArea').classList.add('d-none');
    document.getElementById('editControls').classList.add('d-none');
}

function renderEditEquipmentCards(unitId) {
    const container = document.getElementById('editEquipmentGrid');
    container.innerHTML = '';
    
    APP_CONFIG.equipments.forEach(equipment => {
        const card = document.createElement('div');
        card.className = `equipment-card ${unitId.toLowerCase()}-style`;
        card.onclick = () => selectEditEquipment(equipment.id);
        
        card.innerHTML = `
            <div class="equipment-header">
                <div class="equipment-icon">
                    <i class="${equipment.icon}"></i>
                </div>
                <div class="equipment-info">
                    <h3>${equipment.name}</h3>
                    <p>${equipment.code}</p>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

async function selectEditEquipment(equipmentId) {
    dataEntryState.editSelectedEquipment = equipmentId;
    dataEntryState.editSelectedParameter = null;
    
    // Update equipment card styles
    document.querySelectorAll('#editEquipmentGrid .equipment-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.equipment-card').classList.add('selected');
    
    // Show parameter selection
    document.getElementById('editParameterSection').classList.remove('d-none');
    
    // Render parameter cards
    renderEditParameterCards();
    
    // Hide input section
    document.getElementById('editInputArea').classList.add('d-none');
    document.getElementById('editControls').classList.add('d-none');
}

function renderEditParameterCards() {
    const container = document.getElementById('editParameterGrid');
    container.innerHTML = '';
    
    APP_CONFIG.parameters.forEach(parameter => {
        const card = document.createElement('div');
        card.className = `parameter-card ${dataEntryState.editSelectedUnit.toLowerCase()}-style`;
        card.onclick = () => selectEditParameter(parameter.id);
        
        card.innerHTML = `
            <div class="parameter-icon">
                <i class="${parameter.icon}"></i>
            </div>
            <div class="parameter-name">${parameter.name}</div>
            <div class="parameter-code">${parameter.code}</div>
        `;
        
        container.appendChild(card);
    });
}

async function selectEditParameter(parameterId) {
    dataEntryState.editSelectedParameter = parameterId;
    
    // Update parameter card styles
    document.querySelectorAll('#editParameterGrid .parameter-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.parameter-card').classList.add('selected');
    
    // Get current value
    try {
        const data = await getDataFromDB({
            unit: dataEntryState.editSelectedUnit,
            equipment: dataEntryState.editSelectedEquipment,
            date: dataEntryState.editSelectedDate
        });
        
        let currentValue = '--';
        if (data.length > 0 && data[0].parameters[parameterId] !== undefined) {
            currentValue = data[0].parameters[parameterId];
        }
        
        dataEntryState.editCurrentValue = currentValue;
        
        // Show input section
        document.getElementById('editInputArea').classList.remove('d-none');
        document.getElementById('editControls').classList.remove('d-none');
        
        // Update display
        document.getElementById('currentValue').textContent = currentValue;
        document.getElementById('editDataInput').value = currentValue === '--' ? '' : currentValue;
        document.getElementById('editDataInput').focus();
        
    } catch (error) {
        console.error('Error getting current value:', error);
        showNotification('خطا در دریافت مقدار فعلی', 'error');
    }
}

async function saveEditedData() {
    const value = document.getElementById('editDataInput').value.trim();
    
    if (!value || !validateValue(value)) {
        showNotification('لطفاً مقدار صحیح (0-20) وارد کنید', 'error');
        return;
    }
    
    try {
        // Get existing data
        const existingData = await getDataFromDB({
            unit: dataEntryState.editSelectedUnit,
            equipment: dataEntryState.editSelectedEquipment,
            date: dataEntryState.editSelectedDate
        });
        
        let dataToSave;
        if (existingData.length > 0) {
            // Update existing record
            dataToSave = {
                ...existingData[0],
                parameters: {
                    ...existingData[0].parameters,
                    [dataEntryState.editSelectedParameter]: parseFloat(value)
                },
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        } else {
            // Create new record
            dataToSave = {
                unit: dataEntryState.editSelectedUnit,
                equipment: dataEntryState.editSelectedEquipment,
                date: dataEntryState.editSelectedDate,
                parameters: {
                    [dataEntryState.editSelectedParameter]: parseFloat(value)
                },
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        }
        
        await saveDataToDB(dataToSave);
        showNotification('داده با موفقیت ویرایش شد', 'success');
        
        // Update current value display
        dataEntryState.editCurrentValue = parseFloat(value);
        document.getElementById('currentValue').textContent = parseFloat(value);
        
    } catch (error) {
        console.error('Error saving edited data:', error);
        showNotification('خطا در ذخیره داده', 'error');
    }
}

function cancelEdit() {
    // Reset edit selections
    dataEntryState.editSelectedUnit = null;
    dataEntryState.editSelectedDate = null;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    dataEntryState.editCurrentValue = null;
    
    // Hide sections
    document.getElementById('editEquipmentSection').classList.add('d-none');
    document.getElementById('editParameterSection').classList.add('d-none');
    document.getElementById('editInputArea').classList.add('d-none');
    document.getElementById('editControls').classList.add('d-none');
    
    // Reset selections
    document.querySelectorAll('#editMode .unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('#editEquipmentGrid .equipment-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('#editParameterGrid .parameter-card').forEach(card => card.classList.remove('selected'));
}

async function loadDateData() {
    try {
        console.log('Loading data for:', dataEntryState.selectedUnit, dataEntryState.selectedDate);
        
        // Clear previous cache
        dataEntryState.dateData = {};
        
        // Load data specific to selected date
        const data = await getDataFromDB({ 
            unit: dataEntryState.selectedUnit, 
            date: dataEntryState.selectedDate 
        });
        
        console.log('Raw data from DB:', data);
        
        // Organize data
        data.forEach(item => {
            console.log(`Processing equipment: ${item.equipment}`, item.parameters);
            dataEntryState.dateData[item.equipment] = { ...item.parameters };
        });
        
        console.log('Organized dateData:', dataEntryState.dateData);
        
        // Set indices for next incomplete equipment
        await setNextIncompletePosition();
        
        console.log('Set position:', {
            equipmentIndex: dataEntryState.currentEquipmentIndex,
            parameterIndex: dataEntryState.currentParameterIndex
        });
        
    } catch (error) {
        console.error('Error loading date data:', error);
    }
}

function updateCurrentDisplay() {
    const equipments = APP_CONFIG.equipments;
    const parameters = APP_CONFIG.parameters;
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    const currentParameter = parameters[dataEntryState.currentParameterIndex];
    
    if (!currentEquipment || !currentParameter) return;
    
    // Update display
    const unitInfo = APP_CONFIG.units.find(u => u.id === dataEntryState.selectedUnit);
    document.getElementById('currentUnit').textContent = unitInfo.name;
    document.getElementById('currentDate').textContent = formatDate(dataEntryState.selectedDate);
    
    const equipmentElement = document.getElementById('currentEquipment');
    equipmentElement.innerHTML = `
        <i class="${currentEquipment.icon}" style="color: ${currentEquipment.color}"></i>
        ${currentEquipment.name}
    `;
    
    const parameterElement = document.getElementById('currentParameter');
    parameterElement.innerHTML = `
        <i class="${currentParameter.icon}" style="color: ${currentParameter.color}"></i>
        ${currentParameter.name} (${currentParameter.code})
    `;
    
    // Update progress
    const totalParams = equipments.length * parameters.length;
    const currentProgress = (dataEntryState.currentEquipmentIndex * parameters.length) + dataEntryState.currentParameterIndex;
    const progressPercent = Math.round((currentProgress / totalParams) * 100);
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
    
    // Check if value exists
    const existingValue = dataEntryState.dateData[currentEquipment.id]?.[currentParameter.id];
    if (existingValue !== undefined) {
        document.getElementById('dataInput').value = existingValue;
    } else {
        document.getElementById('dataInput').value = '';
    }
}

function handleDataInput() {
    const input = document.getElementById('dataInput');
    const value = input.value.trim();
    
    if (!value || !validateValue(value)) {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        showNotification('لطفاً مقدار صحیح (0-20) وارد کنید', 'error');
        return;
    }
    
    // Save current value
    const equipments = APP_CONFIG.equipments;
    const parameters = APP_CONFIG.parameters;
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    const currentParameter = parameters[dataEntryState.currentParameterIndex];
    
    if (!dataEntryState.dateData[currentEquipment.id]) {
        dataEntryState.dateData[currentEquipment.id] = {};
    }
    dataEntryState.dateData[currentEquipment.id][currentParameter.id] = parseFloat(value);
    
    console.log('Saved value:', value, 'for', currentEquipment.name, currentParameter.name);
    
    // Move to next parameter
    dataEntryState.currentParameterIndex++;
    
    if (dataEntryState.currentParameterIndex >= parameters.length) {
        // Save equipment data
        saveEquipmentData(currentEquipment.id);
        
        // Move to next equipment
        dataEntryState.currentParameterIndex = 0;
        dataEntryState.currentEquipmentIndex++;
        
        if (dataEntryState.currentEquipmentIndex >= equipments.length) {
            // All equipment completed
            showNotification('تمام تجهیزات تکمیل شد!', 'success');
            dataEntryState.currentEquipmentIndex = 0;
            // Switch to edit mode
            setTimeout(() => {
                switchDataEntryMode('edit');
                document.getElementById('editDateInput').value = dataEntryState.selectedDate;
                showNotification('اکنون می‌توانید داده‌ها را ویرایش کنید', 'info');
            }, 1000);
            return;
        }
    }
    
    updateCurrentDisplay();
    input.focus();
}

async function saveEquipmentData(equipmentId) {
    const data = {
        unit: dataEntryState.selectedUnit,
        equipment: equipmentId,
        date: dataEntryState.selectedDate,
        parameters: dataEntryState.dateData[equipmentId],
        timestamp: new Date().toISOString(),
        userName: currentUser.name
    };
    
    try {
        await saveDataToDB(data);
        console.log('Equipment data saved:', data);
        showNotification('داده‌های تجهیز ذخیره شد', 'success');
    } catch (error) {
        console.error('Error saving equipment data:', error);
        showNotification('خطا در ذخیره داده‌ها', 'error');
    }
}

function saveCurrentData() {
    const input = document.getElementById('dataInput');
    const value = input.value.trim();
    
    if (value && validateValue(value)) {
        handleDataInput();
    } else {
        showNotification('لطفاً مقدار صحیح وارد کنید', 'error');
    }
}

function resetEntry() {
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
    updateCurrentDisplay();
    document.getElementById('dataInput').focus();
}

function initDataEntry() {
    // Remove previous event listeners by cloning elements
    const entryDateInput = document.getElementById('entryDateInput');
    const editDateInput = document.getElementById('editDateInput');
    
    // Clone elements to remove all event listeners
    const newEntryDateInput = entryDateInput.cloneNode(true);
    const newEditDateInput = editDateInput.cloneNode(true);
    
    entryDateInput.parentNode.replaceChild(newEntryDateInput, entryDateInput);
    editDateInput.parentNode.replaceChild(newEditDateInput, editDateInput);
    
    // Set default date to today
    newEntryDateInput.value = getCurrentDate();
    newEditDateInput.value = getCurrentDate();
    
    // Setup input event listeners
    const input = document.getElementById('dataInput');
    if (input) {
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        newInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleDataInput();
            }
        });
        
        newInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value && !validateValue(value)) {
                e.target.style.borderColor = 'var(--error-color)';
            } else {
                e.target.style.borderColor = 'var(--border-color)';
            }
        });
    }
    
    // Setup edit input event listener
    const editInput = document.getElementById('editDataInput');
    if (editInput) {
        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEditedData();
            }
        });
        
        editInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value && !validateValue(value)) {
                e.target.style.borderColor = 'var(--error-color)';
            } else {
                e.target.style.borderColor = 'var(--border-color)';
            }
        });
    }
    
    // Add new event listener for date change
    newEntryDateInput.addEventListener('change', async (e) => {
        console.log('Date changed to:', e.target.value);
        
        if (dataEntryState.selectedUnit) {
            // Clear current cache
            dataEntryState.dateData = {};
            dataEntryState.currentData = {};
            dataEntryState.currentEquipmentIndex = 0;
            dataEntryState.currentParameterIndex = 0;
            
            // Reload data
            dataEntryState.selectedDate = e.target.value;
            await loadDateData();
            updateCurrentDisplay();
            
            console.log('Data reloaded for new date');
        }
    });
    
    // Similar for edit date  
    newEditDateInput.addEventListener('change', (e) => {
        console.log('Edit date changed to:', e.target.value);
        
        if (dataEntryState.editSelectedUnit) {
            // Reset edit selections when date changes
            dataEntryState.editSelectedEquipment = null;
            dataEntryState.editSelectedParameter = null;
            dataEntryState.editCurrentValue = null;
            
            // Hide sections
            document.getElementById('editParameterSection').classList.add('d-none');
            document.getElementById('editInputArea').classList.add('d-none');
            document.getElementById('editControls').classList.add('d-none');
            
            // Reset selections
            document.querySelectorAll('#editEquipmentGrid .equipment-card').forEach(card => card.classList.remove('selected'));
            document.querySelectorAll('#editParameterGrid .parameter-card').forEach(card => card.classList.remove('selected'));
        }
    });
}

// ==================== VIEW DATA FUNCTIONS ====================
async function initViewData() {
    await loadViewFilters();
    await loadViewData();
    updateUserDisplay();
}

async function loadViewFilters() {
    // Load equipment options
    const equipmentSelect = document.getElementById('viewEquipment');
    equipmentSelect.innerHTML = '<option value="">همه تجهیزات</option>';
    
    APP_CONFIG.equipments.forEach(equipment => {
        const option = document.createElement('option');
        option.value = equipment.id;
        option.textContent = equipment.name;
        equipmentSelect.appendChild(option);
    });
    
    // Set default date to today
    document.getElementById('viewDate').value = getCurrentDate();
    
    // Add event listeners
    document.getElementById('viewUnit').addEventListener('change', loadViewData);
    document.getElementById('viewDate').addEventListener('change', loadViewData);
    document.getElementById('viewEquipment').addEventListener('change', loadViewData);
}

async function loadViewData() {
    const unit = document.getElementById('viewUnit').value;
    const date = document.getElementById('viewDate').value;
    const equipment = document.getElementById('viewEquipment').value;
    
    const filters = {};
    if (unit) filters.unit = unit;
    if (date) filters.date = date;
    if (equipment) filters.equipment = equipment;
    
    try {
        const data = await getDataFromDB(filters);
        
        if (unit === '') {
            // Show both units in separate tables
            renderSeparateUnitTables(data, date);
        } else {
            // Show single table
            renderDataTable(data, unit);
        }
    } catch (error) {
        console.error('Error loading view data:', error);
        showNotification('خطا در بارگذاری داده‌ها', 'error');
    }
}

function renderSeparateUnitTables(data, date) {
    const container = document.getElementById('dataTablesContainer');
    container.innerHTML = '';
    
    ['DRI1', 'DRI2'].forEach(unitId => {
        const unitData = data.filter(d => d.unit === unitId);
        const unitInfo = APP_CONFIG.units.find(u => u.id === unitId);
        
        // Create table container
        const tableContainer = document.createElement('div');
        tableContainer.className = `table-container mobile-scroll table-${unitId.toLowerCase()}`;
        
        // Add title with user info
        const title = document.createElement('div');
        title.className = `table-title ${unitId.toLowerCase()}`;
        title.innerHTML = `
            <div class="d-flex justify-between align-center">
                <span>${unitInfo.name} - ${date ? formatDate(date) : 'همه تاریخ‌ها'}</span>
                <span style="font-size: 0.9rem;">کاربر: ${currentUser.name}</span>
            </div>
        `;
        tableContainer.appendChild(title);
        
        // Create table
        const table = document.createElement('table');
        table.className = 'table';
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>پارامتر</th>';
        
        const equipments = [...new Set(unitData.map(d => d.equipment))].sort();
        equipments.forEach(equipmentId => {
            const equipment = APP_CONFIG.equipments.find(e => e.id === equipmentId);
            const th = document.createElement('th');
            th.textContent = equipment ? equipment.name : equipmentId;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        
        if (unitData.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="${equipments.length + 1}" class="text-center">داده‌ای موجود نیست</td>`;
            tbody.appendChild(row);
        } else {
            const parameters = APP_CONFIG.parameters;
            parameters.forEach(parameter => {
                const row = document.createElement('tr');
                
                // Parameter name cell
                const paramCell = document.createElement('td');
                paramCell.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                        <span>${parameter.name}</span>
                        <small style="opacity: 0.7;">(${parameter.code})</small>
                    </div>
                `;
                row.appendChild(paramCell);
                
                // Data cells
                equipments.forEach(equipmentId => {
                    const td = document.createElement('td');
                    const equipmentData = unitData.find(d => d.equipment === equipmentId);
                    const value = equipmentData?.parameters?.[parameter.id];
                    
                    if (value !== undefined) {
                        td.textContent = value;
                        td.style.fontWeight = '600';
                    } else {
                        td.textContent = '--';
                        td.style.opacity = '0.5';
                    }
                    
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            });
        }
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);
    });
}

function renderDataTable(data, selectedUnit) {
    const container = document.getElementById('dataTablesContainer');
    container.innerHTML = '';
    
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container mobile-scroll';
    
    if (selectedUnit) {
        tableContainer.classList.add(`table-${selectedUnit.toLowerCase()}`);
    }
    
    const table = document.createElement('table');
    table.className = 'table';
    
    // Create header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>پارامتر</th>';
    
    if (data.length === 0) {
        const tbody = document.createElement('tbody');
        tbody.innerHTML = '<tr><td colspan="100%" class="text-center">داده‌ای موجود نیست</td></tr>';
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);
        return;
    }
    
    // Get unique equipments from data
    const equipments = [...new Set(data.map(d => d.equipment))].sort();
    
    equipments.forEach(equipmentId => {
        const equipment = APP_CONFIG.equipments.find(e => e.id === equipmentId);
        const th = document.createElement('th');
        th.textContent = equipment ? equipment.name : equipmentId;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    const tbody = document.createElement('tbody');
    const parameters = APP_CONFIG.parameters;
    
    parameters.forEach(parameter => {
        const row = document.createElement('tr');
        
        // Parameter name cell
        const paramCell = document.createElement('td');
        paramCell.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                <span>${parameter.name}</span>
                <small style="opacity: 0.7;">(${parameter.code})</small>
            </div>
        `;
        row.appendChild(paramCell);
        
        // Data cells
        equipments.forEach(equipmentId => {
            const td = document.createElement('td');
            const equipmentData = data.find(d => d.equipment === equipmentId);
            const value = equipmentData?.parameters?.[parameter.id];
            
            if (value !== undefined) {
                td.textContent = value;
                td.style.fontWeight = '600';
            } else {
                td.textContent = '--';
                td.style.opacity = '0.5';
            }
            
            row.appendChild(td);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    container.appendChild(tableContainer);
}

function printTable() {
    const selectedUnit = document.getElementById('viewUnit').value;
    const selectedDate = document.getElementById('viewDate').value;
    
    let unitName = 'همه واحدها';
    if (selectedUnit) {
        const unit = APP_CONFIG.units.find(u => u.id === selectedUnit);
        unitName = unit ? unit.name : selectedUnit;
    }
    
    const printWindow = window.open('', '', 'width=800,height=600');
    
    const tablesContainer = document.getElementById('dataTablesContainer');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>گزارش داده‌های ویبره</title>
                <style>
                    body { font-family: 'Vazirmatn', sans-serif; direction: rtl; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .info { margin-bottom: 10px; color: #666; }
                    .table-title { background: #f0f0f0; padding: 10px; font-weight: bold; margin-bottom: 10px; }
                    .table-title.dri1 { background: #3b82f6; color: white; }
                    .table-title.dri2 { background: #ef4444; color: white; }
                    .user-info { text-align: left; font-size: 0.9rem; margin-top: 10px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>گزارش داده‌های ویبره تجهیزات</h2>
                    <div class="info">واحد: ${unitName}</div>
                    <div class="info">تاریخ: ${selectedDate ? formatDate(selectedDate) : 'همه تاریخ‌ها'}</div>
                    <div class="user-info">کاربر: ${currentUser.name}</div>
                </div>
                ${tablesContainer.innerHTML}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// ==================== CHARTS FUNCTIONS ====================
async function initCharts() {
    await loadChartFilters();
    initChartParameters();
    updateUserDisplay();
    updateChartContainerSize();
}

async function loadChartFilters() {
    // Load equipment options
    const equipmentSelect = document.getElementById('chartEquipment');
    equipmentSelect.innerHTML = '';
    
    APP_CONFIG.equipments.forEach(equipment => {
        const option = document.createElement('option');
        option.value = equipment.id;
        option.textContent = equipment.name;
        equipmentSelect.appendChild(option);
    });
    
    // Set default dates
    const today = getCurrentDate();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    document.getElementById('chartDateFrom').value = weekAgo.toISOString().split('T')[0];
    document.getElementById('chartDateTo').value = today;
    
    // Add event listeners
    document.getElementById('chartUnit').addEventListener('change', updateChart);
    document.getElementById('chartEquipment').addEventListener('change', updateChart);
    document.getElementById('chartDateFrom').addEventListener('change', updateChart);
    document.getElementById('chartDateTo').addEventListener('change', updateChart);
}

function initChartParameters() {
    const container = document.getElementById('chartParameters');
    container.innerHTML = '';
    
    const parameters = APP_CONFIG.parameters;
    parameters.forEach(parameter => {
        const div = document.createElement('div');
        div.className = 'parameter-item';
        div.innerHTML = `
            <label style="display: flex ; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" value="${parameter.id}" onchange="updateChart()">
                <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                <span>${parameter.name}</span>
            </label>
        `;
        container.appendChild(div);
    });
}

function updateChartContainerSize() {
    const chartContainer = document.getElementById('chartContainerMain');
    const isFullscreen = document.getElementById('charts').classList.contains('fullscreen');
    
    if (isFullscreen) {
        // Fullscreen: 90% width and height
        chartContainer.style.width = '90%';
        chartContainer.style.height = '90vh';
        chartContainer.style.margin = '0 auto';
    } else {
        // Normal: 80% width and height
        chartContainer.style.width = '80%';
        chartContainer.style.height = '80vh';
        chartContainer.style.margin = '0 auto';
    }
}

async function updateChart() {
    const unit = document.getElementById('chartUnit').value;
    const equipment = document.getElementById('chartEquipment').value;
    const dateFrom = document.getElementById('chartDateFrom').value;
    const dateTo = document.getElementById('chartDateTo').value;
    
    const selectedParameters = [];
    document.querySelectorAll('#chartParameters input[type="checkbox"]:checked').forEach(cb => {
        selectedParameters.push(cb.value);
    });
    
    if (!equipment || selectedParameters.length === 0) {
        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
        return;
    }
    
    try {
        const data = await getDataFromDB({
            unit,
            equipment,
            dateFrom,
            dateTo
        });
        
        renderChart(data, selectedParameters);
    } catch (error) {
        console.error('Error loading chart data:', error);
        showNotification('خطا در بارگذاری داده‌های نمودار', 'error');
    }
}

function renderChart(data, selectedParameters) {
    const ctx = document.getElementById('mainChart').getContext('2d');
    
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    // Prepare data
    const dates = [...new Set(data.map(d => d.date))].sort();
    const datasets = [];
    
    selectedParameters.forEach((paramId, index) => {
        const parameter = APP_CONFIG.parameters.find(p => p.id === paramId);
        const values = dates.map(date => {
            const item = data.find(d => d.date === date);
            return item?.parameters?.[paramId] || null;
        });
        
        datasets.push({
            label: parameter.name,
            data: values,
            borderColor: parameter.color,
            backgroundColor: parameter.color + '20',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        });
    });
    
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(date => formatDate(date)),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        font: {
                            family: 'Vazirmatn'
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'تاریخ'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'مقدار'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

function printChart() {
    const canvas = document.getElementById('mainChart');
    const printWindow = window.open('', '', 'width=800,height=600');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>نمودار داده‌های ویبره</title>
                <style>
                    body { font-family: 'Vazirmatn', sans-serif; direction: rtl; text-align: center; }
                    .header { margin-bottom: 20px; }
                    img { max-width: 100%; height: auto; }
                    .user-info { text-align: left; font-size: 0.9rem; margin-top: 10px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>نمودار داده‌های ویبره</h2>
                    <p>تجهیز: ${document.getElementById('chartEquipment').selectedOptions[0]?.textContent}</p>
                    <div class="user-info">کاربر: ${currentUser.name}</div>
                </div>
                <img src="${canvas.toDataURL()}" alt="نمودار">
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// ==================== ANALYSIS FUNCTIONS ====================
async function initAnalysis() {
    updateUserDisplay();
    await loadAnalysisData();
}

async function loadAnalysisData() {
    try {
        const anomalies = await findAnomalies();
        renderAnalysisCards(anomalies);
    } catch (error) {
        console.error('Error loading analysis data:', error);
        showNotification('خطا در بارگذاری داده‌های آنالیز', 'error');
    }
}

async function findAnomalies() {
    const anomalies = [];
    const today = new Date();
    const timeRangeEnd = new Date(today);
    
    // Calculate date range based on settings
    const timeRangeStart = new Date(today);
    timeRangeStart.setDate(timeRangeStart.getDate() - currentSettings.analysisTimeRange);
    
    const comparisonDate = new Date(today);
    comparisonDate.setDate(comparisonDate.getDate() - currentSettings.analysisComparisonDays);
    
    // Get all data for the time range
    const allData = await getDataFromDB({
        dateFrom: timeRangeStart.toISOString().split('T')[0],
        dateTo: timeRangeEnd.toISOString().split('T')[0]
    });
    
    // Group data by unit, equipment, and parameter
    const dataGroups = {};
    allData.forEach(item => {
        const key = `${item.unit}_${item.equipment}`;
        if (!dataGroups[key]) {
            dataGroups[key] = {};
        }
        dataGroups[key][item.date] = item.parameters;
    });
    
    // Check for anomalies in each group
    for (const [groupKey, dateData] of Object.entries(dataGroups)) {
        const [unit, equipment] = groupKey.split('_');
        const dates = Object.keys(dateData).sort();
        
        if (dates.length < 2) continue; // Need at least 2 data points
        
        for (const parameterId of Object.keys(APP_CONFIG.parameters.reduce((acc, p) => ({ ...acc, [p.id]: true }), {}))) {
            const values = dates.map(date => dateData[date]?.[parameterId]).filter(v => v !== undefined);
            
            if (values.length < 2) continue;
            
            // Compare latest value with comparison value
            const latestValue = values[values.length - 1];
            const comparisonValue = values[values.length - 2]; // Previous value
            
            if (comparisonValue === 0) continue; // Avoid division by zero
            
            const increasePercentage = ((latestValue - comparisonValue) / comparisonValue) * 100;
            
            // Check if increase is above threshold
            if (increasePercentage >= currentSettings.analysisThreshold) {
                const parameter = APP_CONFIG.parameters.find(p => p.id === parameterId);
                const equipmentInfo = APP_CONFIG.equipments.find(e => e.id === equipment);
                const unitInfo = APP_CONFIG.units.find(u => u.id === unit);
                
                anomalies.push({
                    unit,
                    unitName: unitInfo?.name || unit,
                    equipment,
                    equipmentName: equipmentInfo?.name || equipment,
                    parameter: parameterId,
                    parameterName: parameter?.name || parameterId,
                    parameterIcon: parameter?.icon || 'fas fa-chart-line',
                    parameterColor: parameter?.color || '#666',
                    currentValue: latestValue,
                    previousValue: comparisonValue,
                    increasePercentage: Math.round(increasePercentage * 100) / 100,
                    increaseAmount: Math.round((latestValue - comparisonValue) * 100) / 100,
                    latestDate: dates[dates.length - 1]
                });
            }
        }
    }
    
    // Sort anomalies by increase percentage (highest first)
    return anomalies.sort((a, b) => b.increasePercentage - a.increasePercentage);
}

function renderAnalysisCards(anomalies) {
    const container = document.getElementById('analysisCardsContainer');
    container.innerHTML = '';
    
    if (anomalies.length === 0) {
        container.innerHTML = `
            <div class="text-center p-5">
                <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                <h3 class="mt-3">هیچ افزایش غیرعادی‌ای یافت نشد</h3>
                <p class="text-secondary">تمام پارامترها در محدوده طبیعی قرار دارند</p>
            </div>
        `;
        return;
    }
    
    anomalies.forEach(anomaly => {
        const card = document.createElement('div');
        card.className = `analysis-card ${anomaly.unit.toLowerCase()}-style`;
        card.onclick = () => navigateToChart(anomaly.unit, anomaly.equipment);
        
        card.innerHTML = `
            <div class="analysis-card-header">
                <div class="analysis-icon">
                    <i class="${anomaly.parameterIcon}" style="color: ${anomaly.parameterColor}"></i>
                </div>
                <div class="analysis-severity ${getSeverityClass(anomaly.increasePercentage)}">
                    ${getSeverityText(anomaly.increasePercentage)}
                </div>
            </div>
            <div class="analysis-card-body">
                <h4 class="analysis-title">${anomaly.parameterName}</h4>
                <div class="analysis-equipment">
                    <strong>${anomaly.equipmentName}</strong> - ${anomaly.unitName}
                </div>
                <div class="analysis-values">
                    <div class="analysis-value-item">
                        <span class="analysis-label">مقدار فعلی:</span>
                        <span class="analysis-value analysis-current">${anomaly.currentValue}</span>
                    </div>
                    <div class="analysis-value-item">
                        <span class="analysis-label">مقدار قبلی:</span>
                        <span class="analysis-value">${anomaly.previousValue}</span>
                    </div>
                    <div class="analysis-value-item">
                        <span class="analysis-label">میزان افزایش:</span>
                        <span class="analysis-value analysis-increase">+${anomaly.increaseAmount}</span>
                    </div>
                    <div class="analysis-value-item">
                        <span class="analysis-label">درصد افزایش:</span>
                        <span class="analysis-value analysis-percentage">+${anomaly.increasePercentage}%</span>
                    </div>
                </div>
                <div class="analysis-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(anomaly.latestDate)}
                </div>
            </div>
            <div class="analysis-card-footer">
                <span class="analysis-action-hint">
                    <i class="fas fa-chart-line"></i>
                    برای مشاهده نمودار کلیک کنید
                </span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function getSeverityClass(percentage) {
    if (percentage >= 50) return 'severity-critical';
    if (percentage >= 30) return 'severity-high';
    if (percentage >= 20) return 'severity-medium';
    return 'severity-low';
}

function getSeverityText(percentage) {
    if (percentage >= 50) return 'بحرانی';
    if (percentage >= 30) return 'بالا';
    if (percentage >= 20) return 'متوسط';
    return 'پایین';
}

function navigateToChart(unit, equipment) {
    // Switch to charts section
    document.querySelector('.nav-tab[onclick*="charts"]').click();
    
    // Set chart filters
    setTimeout(() => {
        document.getElementById('chartUnit').value = unit;
        document.getElementById('chartEquipment').value = equipment;
        
        // Select all parameters for better analysis
        document.querySelectorAll('#chartParameters input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        
        // Set date range to last 30 days
        const today = getCurrentDate();
        const monthAgo = new Date();
        monthAgo.setDate(monthAgo.getDate() - 30);
        
        document.getElementById('chartDateFrom').value = monthAgo.toISOString().split('T')[0];
        document.getElementById('chartDateTo').value = today;
        
        // Update chart
        updateChart();
        
        showNotification(`نمودار ${equipment} در واحد ${unit} نمایش داده شد`, 'success');
    }, 300);
}

function refreshAnalysis() {
    showNotification('در حال به‌روزرسانی آنالیز...', 'info');
    setTimeout(() => {
        loadAnalysisData();
    }, 500);
}

// ==================== SLIDESHOW FUNCTIONS ====================
function initSlideshow() {
    document.getElementById('slideshowDate').value = getCurrentDate();
    document.getElementById('slideshowSpeed').addEventListener('change', updateSlideshowSpeed);
}

function updateSlideshowSpeed() {
    const speed = parseInt(document.getElementById('slideshowSpeed').value);
    slideshowState.speed = speed * 1000;
    
    if (slideshowState.isRunning && !slideshowState.isPaused) {
        clearInterval(slideshowState.interval);
        startSlideshowInterval();
    }
}

async function startSlideshow() {
    const date = document.getElementById('slideshowDate').value;
    
    if (!date) {
        showNotification('لطفاً تاریخ را انتخاب کنید', 'error');
        return;
    }
    
    try {
        // Get all data for the date
        const allData = await getDataFromDB({ date });
        
        if (allData.length === 0) {
            showNotification('داده‌ای برای این تاریخ موجود نیست', 'error');
            return;
        }
        
        // Organize data by equipment priority
        const equipmentsByPriority = getEquipmentByPriority();
        
        slideshowState.data = {};
        allData.forEach(item => {
            const key = `${item.equipment}_${item.unit}`;
            slideshowState.data[key] = item.parameters;
        });
        
        slideshowState.isRunning = true;
        slideshowState.isPaused = false;
        slideshowState.currentDate = date;
        slideshowState.currentEquipmentIndex = 0;
        slideshowState.currentParameterIndex = 0;
        
        startSlideshowInterval();
        
        showNotification('اسلایدشو شروع شد', 'success');
    } catch (error) {
        console.error('Error starting slideshow:', error);
        showNotification('خطا در شروع اسلایدشو', 'error');
    }
}

function startSlideshowInterval() {
    slideshowState.interval = setInterval(() => {
        showNextSlide();
    }, slideshowState.speed);
    
    // Show first slide immediately
    showNextSlide();
}

function showNextSlide() {
    const equipmentsByPriority = getEquipmentByPriority();
    const parameters = getParametersByPriority();
    
    if (slideshowState.currentEquipmentIndex >= equipmentsByPriority.length) {
        stopSlideshow();
        return;
    }
    
    const currentEquipment = equipmentsByPriority[slideshowState.currentEquipmentIndex];
    const currentParameter = parameters[slideshowState.currentParameterIndex];
    
    // Get data key
    const dataKey = `${currentEquipment.id}_${currentEquipment.unit || 'DRI1'}`;
    
    // Generate random color for the value
    slideshowState.currentValueColor = getRandomColor();
    
    // Update display
    updateSlideshowDisplay(currentEquipment, currentParameter, dataKey);
    
    // Move to next parameter
    slideshowState.currentParameterIndex++;
    
    if (slideshowState.currentParameterIndex >= parameters.length) {
        // Equipment finished, ask for next
        clearInterval(slideshowState.interval);
        slideshowState.currentParameterIndex = 0;
        slideshowState.currentEquipmentIndex++;
        
        if (slideshowState.currentEquipmentIndex < equipmentsByPriority.length) {
            showEquipmentConfirmation();
        } else {
            stopSlideshow();
        }
    }
}

function updateSlideshowDisplay(equipment, parameter, dataKey) {
    const value = slideshowState.data[dataKey]?.[parameter.id];
    
    // Update normal display
    document.getElementById('slideshowEquipmentName').textContent = equipment.name;
    document.getElementById('slideshowParameterName').textContent = `${parameter.name} (${parameter.code})`;
    const valueElement = document.getElementById('slideshowValue');
    valueElement.textContent = value !== undefined ? value : '--';
    valueElement.style.color = slideshowState.currentValueColor;
    
    // Update fullscreen display if active
    if (slideshowState.isFullscreen) {
        document.getElementById('slideshowEquipmentNameFS').textContent = equipment.name;
        document.getElementById('slideshowParameterNameFS').textContent = `${parameter.name} (${parameter.code})`;
        const valueFSElement = document.getElementById('slideshowValueFS');
        valueFSElement.textContent = value !== undefined ? value : '--';
        valueFSElement.style.color = slideshowState.currentValueColor;
    }
}

function showEquipmentConfirmation() {
    const equipmentsByPriority = getEquipmentByPriority();
    const nextEquipment = equipmentsByPriority[slideshowState.currentEquipmentIndex];
    
    if (slideshowState.isFullscreen) {
        // Show fullscreen modal
        document.getElementById('slideshowFullscreenMessage').textContent = 
            `آیا به تجهیز ${nextEquipment.name} بروم؟`;
        document.getElementById('slideshowFullscreenModal').classList.remove('d-none');
    } else {
        // Show normal modal
        document.getElementById('slideshowMessage').textContent = 
            `آیا به تجهیز ${nextEquipment.name} بروم؟`;
        document.getElementById('slideshowModal').classList.add('active');
    }
}

function confirmNextEquipment() {
    closeModal('slideshowModal');
    
    if (slideshowState.isRunning) {
        startSlideshowInterval();
    }
}

function confirmNextEquipmentFullscreen() {
    document.getElementById('slideshowFullscreenModal').classList.add('d-none');
    
    if (slideshowState.isRunning) {
        startSlideshowInterval();
    }
}

function stopSlideshowFromFullscreen() {
    document.getElementById('slideshowFullscreenModal').classList.add('d-none');
    stopSlideshow();
}

function pauseSlideshow() {
    if (slideshowState.isRunning) {
        slideshowState.isPaused = true;
        clearInterval(slideshowState.interval);
        showNotification('اسلایدشو متوقف شد', 'warning');
    }
}

function resumeSlideshow() {
    if (slideshowState.isRunning && slideshowState.isPaused) {
        slideshowState.isPaused = false;
        startSlideshowInterval();
        showNotification('اسلایدشو ادامه یافت', 'success');
    }
}

function stopSlideshow() {
    slideshowState.isRunning = false;
    slideshowState.isPaused = false;
    clearInterval(slideshowState.interval);
    
    // Reset colors
    const valueElement = document.getElementById('slideshowValue');
    const valueFSElement = document.getElementById('slideshowValueFS');
    valueElement.style.color = 'var(--primary-color)';
    valueFSElement.style.color = 'var(--primary-color)';
    
    document.getElementById('slideshowEquipmentName').textContent = 'اسلایدشو متوقف شد';
    document.getElementById('slideshowParameterName').textContent = '';
    document.getElementById('slideshowValue').textContent = '--';
    
    if (slideshowState.isFullscreen) {
        document.getElementById('slideshowEquipmentNameFS').textContent = 'اسلایدشو متوقف شد';
        document.getElementById('slideshowParameterNameFS').textContent = '';
        document.getElementById('slideshowValueFS').textContent = '--';
    }
    
    closeModal('slideshowModal');
    document.getElementById('slideshowFullscreenModal').classList.add('d-none');
    showNotification('اسلایدشو پایان یافت', 'info');
}

function toggleSlideshowFullscreen() {
    if (slideshowState.isFullscreen) {
        exitSlideshowFullscreen();
    } else {
        enterSlideshowFullscreen();
    }
}

function enterSlideshowFullscreen() {
    slideshowState.isFullscreen = true;
    document.getElementById('slideshowFullscreen').classList.remove('d-none');
    
    // Copy current values to fullscreen
    document.getElementById('slideshowEquipmentNameFS').textContent = 
        document.getElementById('slideshowEquipmentName').textContent;
    document.getElementById('slideshowParameterNameFS').textContent = 
        document.getElementById('slideshowParameterName').textContent;
    const valueFSElement = document.getElementById('slideshowValueFS');
    const valueElement = document.getElementById('slideshowValue');
    valueFSElement.textContent = valueElement.textContent;
    valueFSElement.style.color = valueElement.style.color;
}

function exitSlideshowFullscreen() {
    slideshowState.isFullscreen = false;
    document.getElementById('slideshowFullscreen').classList.add('d-none');
    document.getElementById('slideshowFullscreenModal').classList.add('d-none');
}

// ==================== DATABASE FUNCTIONS ====================
async function initDatabase() {
    await updateDatabaseStats();
}

async function updateDatabaseStats() {
    try {
        const allData = await db.vibrateData.toArray();
        const uniqueDates = [...new Set(allData.map(d => d.date))];
        
        document.getElementById('totalDays').textContent = uniqueDates.length;
        document.getElementById('totalRecords').textContent = allData.length;
        
        // Calculate database size (approximate)
        const dataSize = JSON.stringify(allData).length;
        const sizeKB = Math.round(dataSize / 1024);
        document.getElementById('dbSize').textContent = `${sizeKB} KB`;
        
        // Last update
        const lastRecord = allData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
        if (lastRecord) {
            document.getElementById('lastUpdate').textContent = 
                formatDate(lastRecord.timestamp.split('T')[0]);
        }

        // Last user who entered data
        const lastUser = await getLastUserFromDB();
        document.getElementById('lastUser').textContent = lastUser || 'نامشخص';
        
    } catch (error) {
        console.error('Error updating database stats:', error);
    }
}

async function exportData(format) {
    try {
        const allData = await db.vibrateData.toArray();
        
        if (format === 'csv') {
            exportToCSV(allData);
        }
        
        showNotification('داده‌ها با موفقیت خروجی گرفته شد', 'success');
    } catch (error) {
        console.error('Error exporting data:', error);
        showNotification('خطا در خروجی گرفتن', 'error');
    }
}

function exportToCSV(data) {
    const headers = ['واحد', 'تجهیز', 'تاریخ', 'زمان', 'کاربر'];
    const parameters = APP_CONFIG.parameters;
    parameters.forEach(param => {
        headers.push(param.name);
    });
    
    const rows = [headers];
    
    data.forEach(item => {
        const row = [
            item.unit,
            APP_CONFIG.equipments.find(e => e.id === item.equipment)?.name || item.equipment,
            item.date,
            item.timestamp.split('T')[1].split('.')[0],
            item.userName || 'نامشخص'
        ];
        
        parameters.forEach(param => {
            row.push(item.parameters[param.id] || '');
        });
        
        rows.push(row);
    });
    
    const csvContent = rows.map(row => row.join(',')).join('\n');
    downloadFile(csvContent, 'vibrate-data.csv', 'text/csv');
}

async function exportSettings() {
    try {
        const settingsData = JSON.stringify(currentSettings, null, 2);
        downloadFile(settingsData, 'vibrate-settings.json', 'application/json');
        showNotification('تنظیمات با موفقیت خروجی گرفته شد', 'success');
    } catch (error) {
        console.error('Error exporting settings:', error);
        showNotification('خطا در خروجی گرفتن تنظیمات', 'error');
    }
}

function downloadFile(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

async function importData() {
    const fileInput = document.getElementById('importFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showNotification('لطفاً فایل را انتخاب کنید', 'error');
        return;
    }
    
    try {
        const csvText = await file.text();
        const parsedData = Papa.parse(csvText, { header: true });
        
        if (parsedData.errors.length > 0) {
            throw new Error('فایل CSV معیوب است');
        }
        
        await processImportedData(parsedData.data);
        showNotification('داده‌ها با موفقیت وارد شد', 'success');
        await updateDatabaseStats();
    } catch (error) {
        console.error('Error importing data:', error);
        showNotification('خطا در وارد کردن داده‌ها', 'error');
    }
}

async function processImportedData(csvData) {
    const parameters = APP_CONFIG.parameters;
    
    for (const row of csvData) {
        if (!row.واحد || !row.تجهیز || !row.تاریخ) continue;
        
        const unit = row.واحد;
        const equipmentName = row.تجهیز;
        const date = row.تاریخ;
        const userName = row.کاربر || 'نامشخص';
        
        // Find equipment by name
        const equipment = APP_CONFIG.equipments.find(e => e.name === equipmentName);
        if (!equipment) continue;
        
        // Check if data already exists
        const existingData = await getDataFromDB({
            unit,
            equipment: equipment.id,
            date
        });
        
        if (existingData.length > 0) {
            console.warn(`Data already exists for ${unit}-${equipment.id}-${date}`);
            continue;
        }
        
        // Extract parameters
        const params = {};
        parameters.forEach(param => {
            if (row[param.name]) {
                params[param.id] = parseFloat(row[param.name]);
            }
        });
        
        // Save to database
        const dataItem = {
            unit,
            equipment: equipment.id,
            date,
            parameters: params,
            timestamp: new Date().toISOString(),
            userName
        };
        
        await saveDataToDB(dataItem);
    }
}

async function mergeDatabase() {
    const fileInput = document.getElementById('mergeFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showNotification('لطفاً فایل دیتابیس را انتخاب کنید', 'error');
        return;
    }
    
    try {
        const csvText = await file.text();
        const parsedData = Papa.parse(csvText, { header: true });
        
        if (parsedData.errors.length > 0) {
            throw new Error('فایل CSV معیوب است');
        }
        
        let mergedCount = 0;
        let skippedCount = 0;
        
        for (const row of parsedData.data) {
            if (!row.واحد || !row.تجهیز || !row.تاریخ) continue;
            
            const unit = row.واحد;
            const equipmentName = row.تجهیز;
            const date = row.تاریخ;
            const userName = row.کاربر || 'نامشخص';
            
            // Find equipment by name
            const equipment = APP_CONFIG.equipments.find(e => e.name === equipmentName);
            if (!equipment) continue;
            
            // Check if data already exists
            const existingData = await getDataFromDB({
                unit,
                equipment: equipment.id,
                date
            });
            
            if (existingData.length > 0) {
                skippedCount++;
                continue;
            }
            
            // Extract parameters
            const params = {};
            APP_CONFIG.parameters.forEach(param => {
                if (row[param.name]) {
                    params[param.id] = parseFloat(row[param.name]);
                }
            });
            
            // Save to database
            const dataItem = {
                unit,
                equipment: equipment.id,
                date,
                parameters: params,
                timestamp: new Date().toISOString(),
                userName
            };
            
            await saveDataToDB(dataItem);
            mergedCount++;
        }
        
        showNotification(`${mergedCount} رکورد ادغام شد، ${skippedCount} رکورد تکراری نادیده گرفته شد`, 'success');
        await updateDatabaseStats();
    } catch (error) {
        console.error('Error merging database:', error);
        showNotification('خطا در ادغام دیتابیس', 'error');
    }
}

async function importSettings() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    
    fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        try {
            const settingsText = await file.text();
            const importedSettings = JSON.parse(settingsText);
            
            // Validate settings structure
            if (validateSettings(importedSettings)) {
                currentSettings = { ...currentSettings, ...importedSettings };
                await saveSettingsToDB(currentSettings);
                applyTheme();
                showNotification('تنظیمات با موفقیت وارد شد', 'success');
                initSettings(); // Refresh settings display
            } else {
                throw new Error('فایل تنظیمات معیوب است');
            }
        } catch (error) {
            console.error('Error importing settings:', error);
            showNotification('خطا در وارد کردن تنظیمات', 'error');
        }
    };
    
    fileInput.click();
}

function validateSettings(settings) {
    const requiredKeys = ['theme', 'primaryColor', 'equipmentPriority', 'parameterPriority'];
    return requiredKeys.every(key => settings.hasOwnProperty(key));
}

// ==================== SETTINGS FUNCTIONS ====================
async function initSettings() {
    // Load current settings into form
    document.getElementById('themeSelect').value = currentSettings.theme;
    document.getElementById('primaryColor').value = currentSettings.primaryColor;
    document.getElementById('dri1Color').value = currentSettings.dri1Color;
    document.getElementById('dri2Color').value = currentSettings.dri2Color;
    
    // Load analysis settings
    document.getElementById('analysisThreshold').value = currentSettings.analysisThreshold;
    document.getElementById('analysisTimeRange').value = currentSettings.analysisTimeRange;
    document.getElementById('analysisComparisonDays').value = currentSettings.analysisComparisonDays;
    
    // Update analysis display
    document.getElementById('thresholdDisplay').textContent = `${currentSettings.analysisThreshold}%`;
    document.getElementById('timeRangeDisplay').textContent = `${currentSettings.analysisTimeRange} روز`;
    document.getElementById('comparisonDisplay').textContent = `${currentSettings.analysisComparisonDays} روز قبل`;
    
    // Initialize priority settings
    initEquipmentPriority();
    initParameterPriority();
    
    // Add event listeners
    document.getElementById('themeSelect').addEventListener('change', (e) => {
        currentSettings.theme = e.target.value;
        applyTheme();
        updateThemeIcon();
    });
    
    document.getElementById('primaryColor').addEventListener('change', (e) => {
        currentSettings.primaryColor = e.target.value;
        applyTheme();
    });
    
    document.getElementById('dri1Color').addEventListener('change', (e) => {
        currentSettings.dri1Color = e.target.value;
        applyTheme();
    });
    
    document.getElementById('dri2Color').addEventListener('change', (e) => {
        currentSettings.dri2Color = e.target.value;
        applyTheme();
    });
    
    // Analysis settings event listeners
    document.getElementById('analysisThreshold').addEventListener('change', (e) => {
        currentSettings.analysisThreshold = parseFloat(e.target.value);
        document.getElementById('thresholdDisplay').textContent = `${currentSettings.analysisThreshold}%`;
    });
    
    document.getElementById('analysisTimeRange').addEventListener('change', (e) => {
        currentSettings.analysisTimeRange = parseInt(e.target.value);
        document.getElementById('timeRangeDisplay').textContent = `${currentSettings.analysisTimeRange} روز`;
    });
    
    document.getElementById('analysisComparisonDays').addEventListener('change', (e) => {
        currentSettings.analysisComparisonDays = parseInt(e.target.value);
        document.getElementById('comparisonDisplay').textContent = `${currentSettings.analysisComparisonDays} روز قبل`;
    });
}

function initEquipmentPriority() {
    const container = document.getElementById('equipmentPriority');
    container.innerHTML = '';
    
    // Create 24 equipment entries (12 equipment × 2 units)
    const equipmentEntries = [];
    
    ['DRI1', 'DRI2'].forEach(unit => {
        APP_CONFIG.equipments.forEach(equipment => {
            const priorityKey = `${equipment.id}_${unit}`;
            const priority = currentSettings.equipmentPriority[priorityKey] || 1;
            
            equipmentEntries.push({
                id: priorityKey,
                name: equipment.name,
                unit: unit,
                priority: priority
            });
        });
    });
    
    // Sort by priority
    equipmentEntries.sort((a, b) => a.priority - b.priority);
    
    equipmentEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'priority-item';
        item.innerHTML = `
            <div class="priority-number">${entry.priority}</div>
            <div class="priority-info">
                <div class="priority-name">${entry.name}</div>
                <small>${entry.unit}</small>
            </div>
            <input type="number" class="priority-input" 
                   min="1" max="24" value="${entry.priority}"
                   onchange="updateEquipmentPriority('${entry.id}', this.value)">
        `;
        
        container.appendChild(item);
    });
}

function initParameterPriority() {
    const container = document.getElementById('parameterPriority');
    container.innerHTML = '';
    
    // Set parameter mode
    const modeOptions = document.querySelectorAll('.mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        if (input.value === currentSettings.parameterMode) {
            option.classList.add('selected');
            input.checked = true;
        }
    });
    
    // Create parameter priority items
    if (currentSettings.parameterMode === 'custom') {
        APP_CONFIG.parameters.forEach(parameter => {
            const priority = currentSettings.parameterPriority[parameter.id] || 1;
            
            const item = document.createElement('div');
            item.className = 'priority-item';
            item.innerHTML = `
                <div class="priority-number">${priority}</div>
                <div class="priority-info">
                    <div class="priority-name">${parameter.name}</div>
                    <small>${parameter.code}</small>
                </div>
                <input type="number" class="priority-input" 
                       min="1" max="12" value="${priority}"
                       onchange="updateParameterPriority('${parameter.id}', this.value)">
            `;
            
            container.appendChild(item);
        });
    } else {
        // Show velocity-first mode explanation
        const info = document.createElement('div');
        info.className = 'text-center';
        info.innerHTML = `
            <p>در حالت "ابتدا سرعت، سپس شتاب":</p>
            <p>ابتدا تمام پارامترهای سرعت، سپس تمام پارامترهای شتاب نمایش داده می‌شود.</p>
        `;
        container.appendChild(info);
    }
}

function setParameterMode(mode) {
    currentSettings.parameterMode = mode;
    
    // Update UI
    const modeOptions = document.querySelectorAll('.mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        input.checked = false;
    });
    
    const selectedOption = document.querySelector(`.mode-option input[value="${mode}"]`).parentElement;
    selectedOption.classList.add('selected');
    selectedOption.querySelector('input').checked = true;
    
    // Refresh parameter priority display
    initParameterPriority();
}

function updateEquipmentPriority(equipmentId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 24) {
        currentSettings.equipmentPriority[equipmentId] = numPriority;
        
        // Update display
        const priorityNumber = document.querySelector(`input[onchange*="${equipmentId}"]`)
            .parentElement.querySelector('.priority-number');
        priorityNumber.textContent = numPriority;
    }
}

function updateParameterPriority(parameterId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 12) {
        currentSettings.parameterPriority[parameterId] = numPriority;
        
        // Update display
        const priorityNumber = document.querySelector(`input[onchange*="${parameterId}"]`)
            .parentElement.querySelector('.priority-number');
        priorityNumber.textContent = numPriority;
    }
}

async function saveSettings() {
    try {
        await saveSettingsToDB(currentSettings);
        showNotification('تنظیمات با موفقیت ذخیره شد', 'success');
    } catch (error) {
        console.error('Error saving settings:', error);
        showNotification('خطا در ذخیره تنظیمات', 'error');
    }
}

function resetSettings() {
    currentSettings = {
        theme: 'light',
        primaryColor: '#2563eb',
        dri1Color: '#3b82f6',
        dri2Color: '#ef4444',
        equipmentPriority: {},
        parameterPriority: {},
        parameterMode: 'velocity-first',
        analysisThreshold: 20,
        analysisTimeRange: 7,
        analysisComparisonDays: 1
    };
    
    initializeDefaultPriorities();
    applyTheme();
    initSettings();
    showNotification('تنظیمات به حالت اولیه بازگردانده شد', 'info');
}

// ==================== FULLSCREEN FUNCTIONS ====================
function toggleFullscreen(sectionId) {
    const section = document.getElementById(sectionId);
    const isFullscreen = section.classList.contains('fullscreen');
    
    if (isFullscreen) {
        exitFullscreen(sectionId);
    } else {
        enterFullscreen(sectionId);
    }
}

function enterFullscreen(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add('fullscreen');
    
    // Add fullscreen header
    const header = document.createElement('div');
    header.className = 'fullscreen-header';
    header.innerHTML = `
        <h2 class="fullscreen-title">
            ${section.querySelector('.card-title').textContent}
        </h2>
        <button class="fullscreen-close" onclick="exitFullscreen('${sectionId}')">
            <i class="fas fa-times"></i>
            خروج از تمام صفحه
        </button>
    `;
    
    section.insertBefore(header, section.firstChild);
    
    // Hide main header
    document.querySelector('.header').style.display = 'none';
    
    // Update chart size if this is charts section
    if (sectionId === 'charts') {
        updateChartContainerSize();
        if (chartInstance) {
            chartInstance.resize();
        }
    }
}

function exitFullscreen(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.remove('fullscreen');
    
    // Remove fullscreen header
    const header = section.querySelector('.fullscreen-header');
    if (header) {
        header.remove();
    }
    
    // Show main header
    document.querySelector('.header').style.display = 'block';
    
    // Update chart size if this is charts section
    if (sectionId === 'charts') {
        updateChartContainerSize();
        if (chartInstance) {
            chartInstance.resize();
        }
    }
}

// ==================== MODAL FUNCTIONS ====================
function showModal(modalId, message) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    if (message) {
        const messageElement = modal.querySelector('#confirmMessage, #slideshowMessage');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

let confirmCallback = null;

function showConfirmModal(message, callback) {
    showModal('confirmModal', message);
    confirmCallback = callback;
}

function confirmAction() {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    closeModal('confirmModal');
}

// ==================== INITIALIZATION ====================
async function initApp() {
    try {
        // Initialize database
        await db.open();
        
        // Load settings
        const savedSettings = await getSettingsFromDB();
        if (savedSettings) {
            currentSettings = { ...currentSettings, ...savedSettings };
        }
        
        // Load user
        const savedUser = await getUserFromDB();
        if (savedUser) {
            currentUser = savedUser;
        }
        
        // Initialize default priorities if not set
        initializeDefaultPriorities();
        
        // Apply theme
        applyTheme();
        updateThemeIcon();
        updateUserDisplay();
        
        // Initialize default section
        initDataEntry();
        
        // Add global event listeners
        addGlobalEventListeners();
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
        showNotification('خطا در راه‌اندازی برنامه', 'error');
    }
}

function addGlobalEventListeners() {
    // Close modals on outside click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
            
            // Also close slideshow fullscreen
            if (slideshowState.isFullscreen) {
                exitSlideshowFullscreen();
            }
        }
    });
    
    // Handle window resize for charts
    window.addEventListener('resize', () => {
        if (chartInstance) {
            chartInstance.resize();
        }
    });
}

// ==================== START APPLICATION ====================
document.addEventListener('DOMContentLoaded', initApp);