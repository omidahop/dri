// ==================== APPLICATION CONSTANTS ====================
const APP_CONFIG = {
    version: '2.3.0',
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
    
    // Parameter data - بازه‌های صحیح با ترتیب پیش‌فرض جدید
    parameters: [
        { id: 'V1', name: 'سرعت عمودی متصل', code: 'V1', icon: 'fas fa-arrow-up', color: '#ec4899', type: 'velocity', category: 'connected', maxValue: 20, order: 1 },
        { id: 'GV1', name: 'شتاب عمودی متصل', code: 'GV1', icon: 'fas fa-arrow-up', color: '#f59e0b', type: 'acceleration', category: 'connected', maxValue: 2, order: 2 },
        { id: 'H1', name: 'سرعت افقی متصل', code: 'H1', icon: 'fas fa-arrow-right', color: '#ec4899', type: 'velocity', category: 'connected', maxValue: 20, order: 3 },
        { id: 'GH1', name: 'شتاب افقی متصل', code: 'GH1', icon: 'fas fa-arrow-right', color: '#f59e0b', type: 'acceleration', category: 'connected', maxValue: 2, order: 4 },
        { id: 'A1', name: 'سرعت محوری متصل', code: 'A1', icon: 'fas fa-arrows-alt', color: '#ec4899', type: 'velocity', category: 'connected', maxValue: 20, order: 5 },
        { id: 'GA1', name: 'شتاب محوری متصل', code: 'GA1', icon: 'fas fa-arrows-alt', color: '#f59e0b', type: 'acceleration', category: 'connected', maxValue: 2, order: 6 },
        { id: 'V2', name: 'سرعت عمودی آزاد', code: 'V2', icon: 'fas fa-arrow-up', color: '#6366f1', type: 'velocity', category: 'free', maxValue: 20, order: 7 },
        { id: 'GV2', name: 'شتاب عمودی آزاد', code: 'GV2', icon: 'fas fa-arrow-up', color: '#8b5cf6', type: 'acceleration', category: 'free', maxValue: 2, order: 8 },
        { id: 'H2', name: 'سرعت افقی آزاد', code: 'H2', icon: 'fas fa-arrow-right', color: '#6366f1', type: 'velocity', category: 'free', maxValue: 20, order: 9 },
        { id: 'GH2', name: 'شتاب افقی آزاد', code: 'GH2', icon: 'fas fa-arrow-right', color: '#8b5cf6', type: 'acceleration', category: 'free', maxValue: 2, order: 10 },
        { id: 'A2', name: 'سرعت محوری آزاد', code: 'A2', icon: 'fas fa-arrows-alt', color: '#6366f1', type: 'velocity', category: 'free', maxValue: 20, order: 11 },
        { id: 'GA2', name: 'شتاب محوری آزاد', code: 'GA2', icon: 'fas fa-arrows-alt', color: '#8b5cf6', type: 'acceleration', category: 'free', maxValue: 2, order: 12 }
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
    vibrateData: '++id, unit, equipment, date, parameters, timestamp, userName, notes, [unit+equipment+date]',
    settings: '++id, key, value',
    users: '++id, name, role, avatar, createdAt'
});

// ==================== GLOBAL VARIABLES ====================
let currentSettings = {
    theme: 'light',
    primaryColor: '#2563eb',
    dri1Color: '#3b82f6',
    dri2Color: '#ef4444',
    // Slideshow priority (existing)
    equipmentPriority: {},
    parameterPriority: {},
    parameterMode: 'default',
    // Data Entry priority (new) - مستقل از اسلایدشو و براساس واحد انتخابی
    dataEntryEquipmentPriority: {}, // فقط برای یک واحد
    dataEntryParameterPriority: {},
    dataEntryParameterMode: 'default',
    // Analysis settings
    analysisThreshold: 20,
    analysisTimeRange: 7,
    analysisComparisonDays: 1
};

let currentUser = {
    name: 'کاربر میهمان',
    role: 'اپراتور تجهیزات',
    avatar: null
};

let dataEntryState = {
    mode: 'new',
    selectedUnit: null,
    currentEquipmentIndex: 0,
    currentParameterIndex: 0,
    currentData: {},
    dateData: {},
    editSelectedUnit: null,
    editSelectedEquipment: null,
    editSelectedParameter: null,
    editCurrentValue: null,
    // جدید: یادداشت‌ها
    currentEquipmentNote: '',
    noteExpanded: false
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

// ==================== تصحیح تابع اعتبارسنجی ====================
function validateValue(value, parameterId) {
    const num = parseFloat(value);
    
    // بررسی عدد بودن
    if (isNaN(num)) return false;
    
    // بررسی منفی نبودن
    if (num < 0) return false;
    
    const parameter = APP_CONFIG.parameters.find(p => p.id === parameterId);
    if (!parameter) return false;
    
    // بررسی صحیح براساس نوع پارامتر
    const maxValue = parameter.type === 'velocity' ? 20 : 2;
    
    // بررسی اعشار مجاز (حداکثر 2 رقم اعشار)
    const decimalPlaces = (num.toString().split('.')[1] || '').length;
    if (decimalPlaces > 2) return false;
    
    return num <= maxValue;
}


function getParameterMaxValue(parameterId) {
    const parameter = APP_CONFIG.parameters.find(p => p.id === parameterId);
    if (!parameter) return 20;
    return parameter.type === 'velocity' ? 20 : 2;
}

function getParameterType(parameterId) {
    const parameter = APP_CONFIG.parameters.find(p => p.id === parameterId);
    return parameter ? parameter.type : 'velocity';
}

// ==================== تصحیح اولویت‌بندی تجهیزات برای ثبت داده ====================
function getEquipmentByPriorityForDataEntry() {
    // فقط تجهیزات واحد انتخابی
    if (!dataEntryState.selectedUnit) {
        return APP_CONFIG.equipments;
    }
    
    const unitId = dataEntryState.selectedUnit;
    
    // بررسی اولویت‌بندی سفارشی برای این واحد
    if (Object.keys(currentSettings.dataEntryEquipmentPriority).length > 0) {
        const priorityEntries = Object.entries(currentSettings.dataEntryEquipmentPriority)
            .filter(([key]) => key.includes(unitId))
            .sort(([,a], [,b]) => a - b);
        
        if (priorityEntries.length > 0) {
            return priorityEntries.map(([key]) => {
                const equipmentId = key.replace(`_${unitId}`, '');
                return APP_CONFIG.equipments.find(e => e.id === equipmentId);
            }).filter(Boolean);
        }
    }
    
    // اولویت پیش‌فرض
    return APP_CONFIG.equipments;
}

function getParametersByPriorityForDataEntry() {
    if (currentSettings.dataEntryParameterMode === 'default') {
        // ترتیب پیش‌فرض: V1, GV1, H1, GH1, A1, GA1, V2, GV2, H2, GH2, A2, GA2
        return APP_CONFIG.parameters.sort((a, b) => a.order - b.order);
    } else if (currentSettings.dataEntryParameterMode === 'velocity-first') {
        const velocityParams = APP_CONFIG.parameters.filter(p => p.type === 'velocity');
        const accelerationParams = APP_CONFIG.parameters.filter(p => p.type === 'acceleration');
        return [...velocityParams, ...accelerationParams];
    } else if (currentSettings.dataEntryParameterMode === 'custom' && Object.keys(currentSettings.dataEntryParameterPriority).length > 0) {
        return Object.entries(currentSettings.dataEntryParameterPriority)
            .sort(([,a], [,b]) => a - b)
            .map(([id]) => APP_CONFIG.parameters.find(p => p.id === id))
            .filter(Boolean);
    }
    
    return APP_CONFIG.parameters.sort((a, b) => a.order - b.order);
}

function getEquipmentByPriority() {
    if (Object.keys(currentSettings.equipmentPriority).length > 0) {
        return Object.entries(currentSettings.equipmentPriority)
            .sort(([,a], [,b]) => a - b)
            .map(([id]) => {
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
    if (currentSettings.parameterMode === 'default') {
        return APP_CONFIG.parameters.sort((a, b) => a.order - b.order);
    } else if (currentSettings.parameterMode === 'velocity-first') {
        const velocityParams = APP_CONFIG.parameters.filter(p => p.type === 'velocity');
        const accelerationParams = APP_CONFIG.parameters.filter(p => p.type === 'acceleration');
        return [...velocityParams, ...accelerationParams];
    } else if (currentSettings.parameterMode === 'custom' && Object.keys(currentSettings.parameterPriority).length > 0) {
        return Object.entries(currentSettings.parameterPriority)
            .sort(([,a], [,b]) => a - b)
            .map(([id]) => APP_CONFIG.parameters.find(p => p.id === id))
            .filter(Boolean);
    }
    
    return APP_CONFIG.parameters.sort((a, b) => a.order - b.order);
}

// ==================== تصحیح اولویت‌بندی پیش‌فرض ====================
function initializeDefaultPriorities() {
    // Slideshow priorities
    if (Object.keys(currentSettings.equipmentPriority).length === 0) {
        let priority = 1;
        ['DRI1', 'DRI2'].forEach(unit => {
            APP_CONFIG.equipments.forEach(equipment => {
                currentSettings.equipmentPriority[`${equipment.id}_${unit}`] = priority++;
            });
        });
    }
    
    if (Object.keys(currentSettings.parameterPriority).length === 0) {
        APP_CONFIG.parameters.forEach((parameter) => {
            currentSettings.parameterPriority[parameter.id] = parameter.order;
        });
    }

    // Data Entry priorities - فقط برای یک واحد
    if (Object.keys(currentSettings.dataEntryEquipmentPriority).length === 0) {
        // هیچ پیش‌فرضی تنظیم نمی‌شود، در تنظیمات کاربر تنظیم می‌کند
    }
    
    if (Object.keys(currentSettings.dataEntryParameterPriority).length === 0) {
        APP_CONFIG.parameters.forEach((parameter) => {
            currentSettings.dataEntryParameterPriority[parameter.id] = parameter.order;
        });
    }
}

// ==================== NOTE FUNCTIONS - تصحیح شده ====================
function toggleNote() {
    dataEntryState.noteExpanded = !dataEntryState.noteExpanded;
    
    const noteContent = document.getElementById('noteContent');
    const noteToggleBtn = document.getElementById('noteToggleBtn');
    const noteIcon = noteToggleBtn?.querySelector('i');
    
    if (dataEntryState.noteExpanded) {
        noteContent?.classList.add('active');
        noteToggleBtn?.classList.add('active');
        if (noteIcon) noteIcon.className = 'fas fa-chevron-up';
        
        // بارگذاری یادداشت فعلی
        loadCurrentEquipmentNote();
    } else {
        noteContent?.classList.remove('active');
        noteToggleBtn?.classList.remove('active');
        if (noteIcon) noteIcon.className = 'fas fa-sticky-note';
    }
}

async function loadCurrentEquipmentNote() {
    const equipments = getEquipmentByPriorityForDataEntry();
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    
    if (!currentEquipment || !dataEntryState.selectedUnit) return;
    
    try {
        const today = getCurrentDate();
        const data = await getDataFromDB({
            unit: dataEntryState.selectedUnit,
            equipment: currentEquipment.id,
            date: today
        });
        
        const noteTextarea = document.getElementById('noteTextarea');
        const noteStatus = document.getElementById('noteStatus');
        
        if (data.length > 0 && data[0].notes) {
            dataEntryState.currentEquipmentNote = data[0].notes;
            if (noteTextarea) noteTextarea.value = data[0].notes;
            if (noteStatus) {
                noteStatus.innerHTML = '<i class="fas fa-check-circle"></i> یادداشت موجود';
                noteStatus.classList.add('has-note');
            }
        } else {
            dataEntryState.currentEquipmentNote = '';
            if (noteTextarea) noteTextarea.value = '';
            if (noteStatus) {
                noteStatus.innerHTML = '<i class="fas fa-circle"></i> بدون یادداشت';
                noteStatus.classList.remove('has-note');
            }
        }
    } catch (error) {
        console.error('Error loading equipment note:', error);
    }
}

async function saveEquipmentNote() {
    const noteTextarea = document.getElementById('noteTextarea');
    if (!noteTextarea) return;
    
    const noteText = noteTextarea.value.trim();
    const equipments = getEquipmentByPriorityForDataEntry();
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    
    if (!currentEquipment || !dataEntryState.selectedUnit) return;
    
    try {
        const today = getCurrentDate();
        const existingData = await getDataFromDB({
            unit: dataEntryState.selectedUnit,
            equipment: currentEquipment.id,
            date: today
        });
        
        let dataToSave;
        if (existingData.length > 0) {
            // بروزرسانی یادداشت در داده موجود
            dataToSave = {
                ...existingData[0],
                notes: noteText,
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        } else {
            // ایجاد رکورد جدید با یادداشت
            const equipmentData = dataEntryState.dateData[currentEquipment.id] || {};
            dataToSave = {
                unit: dataEntryState.selectedUnit,
                equipment: currentEquipment.id,
                date: today,
                parameters: equipmentData,
                notes: noteText,
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        }
        
        await saveDataToDB(dataToSave);
        dataEntryState.currentEquipmentNote = noteText;
        
        const noteStatus = document.getElementById('noteStatus');
        if (noteStatus) {
            if (noteText) {
                noteStatus.innerHTML = '<i class="fas fa-check-circle"></i> یادداشت موجود';
                noteStatus.classList.add('has-note');
            } else {
                noteStatus.innerHTML = '<i class="fas fa-circle"></i> بدون یادداشت';
                noteStatus.classList.remove('has-note');
            }
        }
        
        showNotification('یادداشت ذخیره شد', 'success');
    } catch (error) {
        console.error('Error saving equipment note:', error);
        showNotification('خطا در ذخیره یادداشت', 'error');
    }
}

function clearEquipmentNote() {
    const noteTextarea = document.getElementById('noteTextarea');
    if (noteTextarea) {
        noteTextarea.value = '';
        dataEntryState.currentEquipmentNote = '';
    }
}

// ==================== DEBUG FUNCTIONS ====================
function debugDataEntryState() {
    console.log('=== DEBUG DATA ENTRY STATE ===');
    console.log('Selected Unit:', dataEntryState.selectedUnit);
    console.log('Current Equipment Index:', dataEntryState.currentEquipmentIndex);
    console.log('Current Parameter Index:', dataEntryState.currentParameterIndex);
    console.log('Date Data:', dataEntryState.dateData);
    console.log('===============================');
}

window.debugDataEntryState = debugDataEntryState;

// ==================== CACHE MANAGEMENT ====================
async function clearPreviousDaysCache() {
    try {
        const today = getCurrentDate();
        
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.includes('dateData') && !key.includes(today)) {
                keysToRemove.push(key);
            }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        dataEntryState.dateData = {};
        dataEntryState.currentData = {};
        dataEntryState.currentEquipmentIndex = 0;
        dataEntryState.currentParameterIndex = 0;
        
        showNotification('کش روزهای قبل با موفقیت پاک شد', 'success');
        
        if (dataEntryState.selectedUnit) {
            await loadTodayData();
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
        data.userName = currentUser.name;
        data.date = getCurrentDate();
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
        
        // بهبود: استفاده از index های مناسب
        if (filters.unit && filters.equipment && filters.date) {
            collection = collection.where('[unit+equipment+date]').equals([filters.unit, filters.equipment, filters.date]);
        } else if (filters.unit && filters.date) {
            // استفاده از index برای بهتر کردن Performance
            collection = collection.where('unit').equals(filters.unit).and(item => item.date === filters.date);
        } else if (filters.unit) {
            collection = collection.where('unit').equals(filters.unit);
        } else if (filters.date) {
            collection = collection.where('date').equals(filters.date);
        }
        
        let results = await collection.toArray();
        
        // Filter کردن client-side برای موارد پیچیده
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

// اضافه کردن error boundary برای جلوگیری از crash
window.addEventListener('error', function(event) {
    console.error('Global error caught:', event.error);
    showNotification('خطای غیرمنتظره‌ای رخ داد. لطفاً صفحه را بازنشانی کنید.', 'error');
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showNotification('خطا در پردازش. لطفاً دوباره تلاش کنید.', 'error');
    event.preventDefault();
});

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
    if (themeIcon) {
        themeIcon.className = currentSettings.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ==================== NAVIGATION FUNCTIONS ====================
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.querySelector(`.nav-tab[onclick*="${sectionId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
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
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = currentUser.name;
    }
    
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
    if (avatar) {
        if (currentUser.name !== 'کاربر میهمان') {
            avatar.textContent = currentUser.name.charAt(0).toUpperCase();
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>';
        }
    }
}

async function clearAllCache() {
    try {
        console.log('Starting complete cache clear...');
        
        localStorage.clear();
        sessionStorage.clear();
        
        try {
            if (db.isOpen()) {
                db.close();
            }
            
            await Dexie.delete(APP_CONFIG.dbName);
            
            const newDb = new Dexie(APP_CONFIG.dbName);
            newDb.version(APP_CONFIG.dbVersion).stores({
                vibrateData: '++id, unit, equipment, date, parameters, timestamp, userName, notes, [unit+equipment+date]',
                settings: '++id, key, value',
                users: '++id, name, role, avatar, createdAt'
            });
            
            await newDb.open();
            window.db = newDb;
            
        } catch (dbError) {
            console.error('Error clearing IndexedDB:', dbError);
        }
        
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.map(cacheName => caches.delete(cacheName))
            );
        }
        
        dataEntryState = {
            mode: 'new',
            selectedUnit: null,
            currentEquipmentIndex: 0,
            currentParameterIndex: 0,
            currentData: {},
            dateData: {},
            editSelectedUnit: null,
            editSelectedEquipment: null,
            editSelectedParameter: null,
            editCurrentValue: null,
            currentEquipmentNote: '',
            noteExpanded: false
        };
        
        currentSettings = {
            theme: 'light',
            primaryColor: '#2563eb',
            dri1Color: '#3b82f6',
            dri2Color: '#ef4444',
            equipmentPriority: {},
            parameterPriority: {},
            parameterMode: 'default',
            dataEntryEquipmentPriority: {},
            dataEntryParameterPriority: {},
            dataEntryParameterMode: 'default',
            analysisThreshold: 20,
            analysisTimeRange: 7,
            analysisComparisonDays: 1
        };
        
        currentUser = {
            name: 'کاربر میهمان',
            role: 'اپراتور تجهیزات',
            avatar: null
        };
        
        showNotification('تمام داده‌ها و کش پاک شد. صفحه بازنشانی می‌شود...', 'success');
        
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
        
        return true;
        
    } catch (error) {
        console.error('Error in clearAllCache:', error);
        showNotification('خطا در پاک کردن کش', 'error');
        return false;
    }
}

async function resetApplicationCompletely() {
    if (!confirm('آیا می‌خواهید تمام داده‌ها، تنظیمات و کش را پاک کنید؟ این عمل قابل بازگشت نیست!')) {
        return;
    }
    
    try {
        await clearAllCache();
        
        document.cookie.split(";").forEach(function(c) { 
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
        });
        
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.unregister();
            }
        }
        
        window.location.href = window.location.href.split('?')[0] + '?nocache=' + Date.now();
        
    } catch (error) {
        console.error('Error in complete reset:', error);
        window.location.reload(true);
    }
}

// ==================== DATA ENTRY FUNCTIONS ====================
// تصحیح تابع switchDataEntryMode
function switchDataEntryMode(mode) {
    dataEntryState.mode = mode;
    
    // تصحیح انتخاب tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const targetTab = document.getElementById(`${mode}EntryTab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // تصحیح نمایش/مخفی کردن بخش‌ها
    const newEntryMode = document.getElementById('newEntryMode');
    const editMode = document.getElementById('editMode');
    
    if (mode === 'new') {
        if (newEntryMode) newEntryMode.classList.remove('d-none');
        if (editMode) editMode.classList.add('d-none');
    } else {
        if (newEntryMode) newEntryMode.classList.add('d-none');
        if (editMode) editMode.classList.remove('d-none');
    }
    
    resetDataEntryState();
}

// تصحیح تابع resetDataEntryState
function resetDataEntryState() {
    document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.equipment-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.parameter-card').forEach(card => card.classList.remove('selected'));
    
    const elementsToHide = [
        'entryHeader', 'inputArea', 'newEntryControls',
        'editEquipmentSection', 'editParameterSection', 
        'editInputArea', 'editControls'
    ];
    
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });
    
    // تصحیح: بستن یادداشت
    dataEntryState.noteExpanded = false;
    const noteContent = document.getElementById('noteContent');
    const noteToggleBtn = document.getElementById('noteToggleBtn');
    const noteIcon = noteToggleBtn?.querySelector('i');
    
    if (noteContent) noteContent.classList.remove('active');
    if (noteToggleBtn) noteToggleBtn.classList.remove('active');
    if (noteIcon) noteIcon.className = 'fas fa-sticky-note';
    
    dataEntryState.selectedUnit = null;
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
    dataEntryState.dateData = {};
    dataEntryState.currentData = {};
    dataEntryState.editSelectedUnit = null;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    dataEntryState.editCurrentValue = null;
    dataEntryState.currentEquipmentNote = '';
}

async function setNextIncompletePosition() {
    const equipments = getEquipmentByPriorityForDataEntry();
    const parameters = getParametersByPriorityForDataEntry();
    
    for (let i = 0; i < equipments.length; i++) {
        const equipment = equipments[i];
        const equipmentData = dataEntryState.dateData[equipment.id];
        
        if (!equipmentData) {
            dataEntryState.currentEquipmentIndex = i;
            dataEntryState.currentParameterIndex = 0;
            return;
        }
        
        const validParams = parameters.filter(param => 
            equipmentData[param.id] !== undefined && 
            equipmentData[param.id] !== null && 
            equipmentData[param.id] !== '' &&
            !isNaN(equipmentData[param.id])
        );
        
        if (validParams.length < parameters.length) {
            dataEntryState.currentEquipmentIndex = i;
            dataEntryState.currentParameterIndex = validParams.length;
            return;
        }
    }
    
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
}

function showEntryInterface(unitId) {
    document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.querySelector(`.unit-btn.${unitId.toLowerCase()}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    const entryHeader = document.getElementById('entryHeader');
    if (entryHeader) {
        entryHeader.classList.remove('d-none');
        entryHeader.className = `data-entry-header ${unitId.toLowerCase()}`;
    }
    
    const elementsToShow = ['inputArea', 'newEntryControls'];
    elementsToShow.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove('d-none');
        }
    });
    
    updateCurrentDisplay();
    
    setTimeout(() => {
        const dataInput = document.getElementById('dataInput');
        if (dataInput) {
            dataInput.focus();
        }
    }, 100);
}

async function selectUnit(unitId) {
    const today = getCurrentDate();
    
    try {
        dataEntryState = {
            ...dataEntryState,
            selectedUnit: null,
            currentEquipmentIndex: 0,
            currentParameterIndex: 0,
            dateData: {},
            currentData: {},
            currentEquipmentNote: '',
            noteExpanded: false
        };
        
        dataEntryState.selectedUnit = unitId;
        
        const possibleCacheKeys = [
            `dateData_${unitId}_${today}`,
            `data_${unitId}_${today}`,
            `cache_${unitId}_${today}`,
            `entry_${unitId}_${today}`
        ];
        
        possibleCacheKeys.forEach(key => {
            localStorage.removeItem(key);
            sessionStorage.removeItem(key);
        });
        
        const dateData = await getDataFromDB({ 
            unit: unitId, 
            date: today 
        });
        
        const equipmentIds = APP_CONFIG.equipments.map(e => e.id);
        let allCompleted = true;
        
        for (const equipmentId of equipmentIds) {
            const equipmentData = dateData.find(d => d.equipment === equipmentId);
            
            if (!equipmentData) {
                allCompleted = false;
                continue;
            }
            
            let equipmentComplete = true;
            
            for (const param of APP_CONFIG.parameters) {
                const value = equipmentData.parameters[param.id];
                const isValid = value !== undefined && 
                              value !== null && 
                              value !== '' && 
                              !isNaN(value) &&
                              value >= 0 && 
                              value <= (param.type === 'velocity' ? 20 : 2);
                
                if (!isValid) {
                    equipmentComplete = false;
                    break;
                }
            }
            
            if (!equipmentComplete) {
                allCompleted = false;
            }
        }
        
        if (allCompleted && dateData.length === equipmentIds.length) {
            showNotification('تمام تجهیزات این واحد برای امروز تکمیل شده. به حالت ویرایش منتقل می‌شوید.', 'info');
            switchDataEntryMode('edit');
            selectEditUnit(unitId);
            return;
        }
        
        await loadTodayData();
        showEntryInterface(unitId);
        
    } catch (error) {
        console.error('Error selecting unit:', error);
        showNotification('خطا در انتخاب واحد', 'error');
    }
}

async function selectEditUnit(unitId) {
    dataEntryState.editSelectedUnit = unitId;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    
    document.querySelectorAll('#editMode .unit-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.querySelector(`#editMode .unit-btn.${unitId.toLowerCase()}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    const equipmentSection = document.getElementById('editEquipmentSection');
    if (equipmentSection) {
        equipmentSection.classList.remove('d-none');
    }
    
    renderEditEquipmentCards(unitId);
    
    const elementsToHide = ['editParameterSection', 'editInputArea', 'editControls'];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });
}


async function renderEditEquipmentCards(unitId) {
    const container = document.getElementById('editEquipmentGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    // تصحیح: استفاده از for loop به جای forEach
    for (const equipment of APP_CONFIG.equipments) {
        const card = document.createElement('div');
        card.className = `equipment-card ${unitId.toLowerCase()}-style`;
        card.setAttribute('data-equipment-id', equipment.id);
        
        // بررسی وجود یادداشت
        const today = getCurrentDate();
        let hasNote = false;
        try {
            const data = await getDataFromDB({
                unit: unitId,
                equipment: equipment.id,
                date: today
            });
            hasNote = data.length > 0 && data[0].notes && data[0].notes.trim() !== '';
        } catch (error) {
            console.error('Error checking note:', error);
        }
        
        card.innerHTML = `
            <div class="equipment-header">
                <div class="equipment-icon">
                    <i class="${equipment.icon}"></i>
                </div>
                <div class="equipment-info">
                    <h3>${equipment.name}</h3>
                    <p>${equipment.code}</p>
                </div>
                <div class="equipment-note-indicator">
                    ${hasNote ? '<i class="fas fa-sticky-note" style="color: var(--warning-color); font-size: 1.2rem;" title="دارای یادداشت"></i>' : ''}
                </div>
            </div>
            <div class="equipment-actions">
                <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); showEditEquipmentNote('${equipment.id}', '${unitId}')">
                    <i class="fas fa-sticky-note"></i>
                    یادداشت
                </button>
                <button class="btn btn-sm btn-primary" onclick="selectEditEquipment('${equipment.id}')">
                    <i class="fas fa-edit"></i>
                    ویرایش
                </button>
            </div>
        `;
        
        container.appendChild(card);
    }
}

// تابع جدید برای نمایش یادداشت در حالت ویرایش
async function showEditEquipmentNote(equipmentId, unitId) {
    try {
        const today = getCurrentDate();
        const data = await getDataFromDB({
            unit: unitId,
            equipment: equipmentId,
            date: today
        });
        
        const equipment = APP_CONFIG.equipments.find(e => e.id === equipmentId);
        const currentNote = (data.length > 0 && data[0].notes) ? data[0].notes : '';
        
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">یادداشت - ${equipment.name}</h3>
                    <button class="modal-close" onclick="closeEditNoteModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <textarea 
                        id="editNoteTextarea" 
                        class="note-textarea" 
                        placeholder="یادداشت مربوط به این تجهیز را اینجا بنویسید..."
                        maxlength="500">${currentNote}</textarea>
                    <div class="note-info mt-2">
                        <i class="fas fa-info-circle"></i>
                        حداکثر 500 کاراکتر
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" onclick="saveEditEquipmentNote('${equipmentId}', '${unitId}')">
                        <i class="fas fa-save"></i>
                        ذخیره
                    </button>
                    <button class="btn btn-secondary" onclick="closeEditNoteModal()">
                        <i class="fas fa-times"></i>
                        انصراف
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
    } catch (error) {
        console.error('Error showing edit note:', error);
        showNotification('خطا در نمایش یادداشت', 'error');
    }
}

async function saveEditEquipmentNote(equipmentId, unitId) {
    const textarea = document.getElementById('editNoteTextarea');
    if (!textarea) return;
    
    const noteText = textarea.value.trim();
    
    try {
        const today = getCurrentDate();
        const existingData = await getDataFromDB({
            unit: unitId,
            equipment: equipmentId,
            date: today
        });
        
        let dataToSave;
        if (existingData.length > 0) {
            dataToSave = {
                ...existingData[0],
                notes: noteText,
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        } else {
            dataToSave = {
                unit: unitId,
                equipment: equipmentId,
                date: today,
                parameters: {},
                notes: noteText,
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        }
        
        await saveDataToDB(dataToSave);
        showNotification('یادداشت ذخیره شد', 'success');
        closeEditNoteModal();
        
        // بروزرسانی کارت‌ها
        renderEditEquipmentCards(unitId);
        
    } catch (error) {
        console.error('Error saving edit note:', error);
        showNotification('خطا در ذخیره یادداشت', 'error');
    }
}

function closeEditNoteModal() {
    const modal = document.querySelector('.modal.active');
    if (modal) {
        modal.remove();
    }
}

async function selectEditEquipment(equipmentId) {
    dataEntryState.editSelectedEquipment = equipmentId;
    dataEntryState.editSelectedParameter = null;
    
    document.querySelectorAll('#editEquipmentGrid .equipment-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`#editEquipmentGrid .equipment-card[data-equipment-id="${equipmentId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    const parameterSection = document.getElementById('editParameterSection');
    if (parameterSection) {
        parameterSection.classList.remove('d-none');
    }
    
    renderEditParameterCards();
    
    const elementsToHide = ['editInputArea', 'editControls'];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });
}

function renderEditParameterCards() {
    const container = document.getElementById('editParameterGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const parameters = getParametersByPriorityForDataEntry();
    parameters.forEach(parameter => {
        const card = document.createElement('div');
        card.className = `parameter-card ${dataEntryState.editSelectedUnit.toLowerCase()}-style`;
        card.setAttribute('data-parameter-id', parameter.id);
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
    
    document.querySelectorAll('#editParameterGrid .parameter-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`#editParameterGrid .parameter-card[data-parameter-id="${parameterId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    try {
        const today = getCurrentDate();
        const data = await getDataFromDB({
            unit: dataEntryState.editSelectedUnit,
            equipment: dataEntryState.editSelectedEquipment,
            date: today
        });
        
        let currentValue = '--';
        if (data.length > 0 && data[0].parameters[parameterId] !== undefined) {
            currentValue = data[0].parameters[parameterId];
        }
        
        dataEntryState.editCurrentValue = currentValue;
        
        const elementsToShow = ['editInputArea', 'editControls'];
        elementsToShow.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.classList.remove('d-none');
            }
        });
        
        const parameter = APP_CONFIG.parameters.find(p => p.id === parameterId);
        const maxValue = parameter ? (parameter.type === 'velocity' ? 20 : 2) : 20;
        
        const currentValueElement = document.getElementById('currentValue');
        const editDataInput = document.getElementById('editDataInput');
        const editRangeInfo = document.getElementById('editRangeInfo');
        
        if (currentValueElement) {
            currentValueElement.textContent = currentValue;
        }
        
        if (editDataInput) {
            editDataInput.value = currentValue === '--' ? '' : currentValue;
            editDataInput.max = maxValue;
            editDataInput.focus();
        }
        
        if (editRangeInfo) {
            editRangeInfo.textContent = `حداکثر مقدار: ${maxValue}`;
        }
        
    } catch (error) {
        console.error('Error getting current value:', error);
        showNotification('خطا در دریافت مقدار فعلی', 'error');
    }
}

async function saveEditedData() {
    const editDataInput = document.getElementById('editDataInput');
    if (!editDataInput) return;
    
    const value = editDataInput.value.trim();
    const parameterId = dataEntryState.editSelectedParameter;
    
    if (!value || !validateValue(value, parameterId)) {
        const maxValue = getParameterMaxValue(parameterId);
        showNotification(`لطفاً مقدار صحیح (0-${maxValue}) وارد کنید`, 'error');
        return;
    }
    
    try {
        const today = getCurrentDate();
        
        const existingData = await getDataFromDB({
            unit: dataEntryState.editSelectedUnit,
            equipment: dataEntryState.editSelectedEquipment,
            date: today
        });
        
        let dataToSave;
        if (existingData.length > 0) {
            dataToSave = {
                ...existingData[0],
                parameters: {
                    ...existingData[0].parameters,
                    [parameterId]: parseFloat(value)
                },
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        } else {
            dataToSave = {
                unit: dataEntryState.editSelectedUnit,
                equipment: dataEntryState.editSelectedEquipment,
                date: today,
                parameters: {
                    [parameterId]: parseFloat(value)
                },
                timestamp: new Date().toISOString(),
                userName: currentUser.name
            };
        }
        
        await saveDataToDB(dataToSave);
        showNotification('داده با موفقیت ویرایش شد', 'success');
        
        dataEntryState.editCurrentValue = parseFloat(value);
        const currentValueElement = document.getElementById('currentValue');
        if (currentValueElement) {
            currentValueElement.textContent = parseFloat(value);
        }
        
    } catch (error) {
        console.error('Error saving edited data:', error);
        showNotification('خطا در ذخیره داده', 'error');
    }
}

function cancelEdit() {
    dataEntryState.editSelectedUnit = null;
    dataEntryState.editSelectedEquipment = null;
    dataEntryState.editSelectedParameter = null;
    dataEntryState.editCurrentValue = null;
    
    const elementsToHide = [
        'editEquipmentSection', 'editParameterSection', 
        'editInputArea', 'editControls'
    ];
    
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });
    
    document.querySelectorAll('#editMode .unit-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('#editEquipmentGrid .equipment-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('#editParameterGrid .parameter-card').forEach(card => card.classList.remove('selected'));
}

async function loadTodayData() {
    try {
        const today = getCurrentDate();
        
        dataEntryState.dateData = {};
        
        const data = await getDataFromDB({ 
            unit: dataEntryState.selectedUnit, 
            date: today 
        });
        
        data.forEach(item => {
            dataEntryState.dateData[item.equipment] = { ...item.parameters };
        });
        
        await setNextIncompletePosition();
        
    } catch (error) {
        console.error('Error loading today data:', error);
    }
}

// تصحیح updateCurrentDisplay برای نمایش یادداشت
function updateCurrentDisplay() {
    const equipments = getEquipmentByPriorityForDataEntry();
    const parameters = getParametersByPriorityForDataEntry();
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    const currentParameter = parameters[dataEntryState.currentParameterIndex];
    
    if (!currentEquipment || !currentParameter) return;
    
    const unitInfo = APP_CONFIG.units.find(u => u.id === dataEntryState.selectedUnit);
    
    const currentUnitElement = document.getElementById('currentUnit');
    if (currentUnitElement) {
        currentUnitElement.textContent = unitInfo?.name || dataEntryState.selectedUnit;
    }
    
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        currentDateElement.textContent = formatDate(getCurrentDate());
    }
    
    const equipmentElement = document.getElementById('currentEquipment');
    if (equipmentElement) {
        equipmentElement.innerHTML = `
            <i class="${currentEquipment.icon}" style="color: ${currentEquipment.color}"></i>
            ${currentEquipment.name}
        `;
    }
    
    const parameterElement = document.getElementById('currentParameter');
    if (parameterElement) {
        parameterElement.innerHTML = `
            <i class="${currentParameter.icon}" style="color: ${currentParameter.color}"></i>
            ${currentParameter.name} (${currentParameter.code})
        `;
    }
    
    const totalParams = equipments.length * parameters.length;
    const currentProgress = (dataEntryState.currentEquipmentIndex * parameters.length) + dataEntryState.currentParameterIndex;
    const progressPercent = Math.round((currentProgress / totalParams) * 100);
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
    
    const existingValue = dataEntryState.dateData[currentEquipment.id]?.[currentParameter.id];
    const input = document.getElementById('dataInput');
    
    if (input) {
        if (existingValue !== undefined) {
            input.value = existingValue;
        } else {
            input.value = '';
        }
        
        const maxValue = currentParameter.type === 'velocity' ? 20 : 2;
        input.max = maxValue;
        
        input.className = input.className.replace(/parameter-\w+/g, '');
        input.classList.add(`parameter-${currentParameter.type}`);
    }
    
    const rangeInfo = document.getElementById('rangeInfo');
    if (rangeInfo) {
        const maxValue = currentParameter.type === 'velocity' ? 20 : 2;
        rangeInfo.innerHTML = `
            <small class="range-info ${currentParameter.type}-range">
                <i class="fas fa-info-circle"></i>
                حداکثر مقدار: ${maxValue} | Enter برای ثبت
            </small>
        `;
    }
    
    // بروزرسانی یادداشت در صورت تغییر تجهیز
    if (dataEntryState.noteExpanded) {
        loadCurrentEquipmentNote();
    }
}

function handleDataInput() {
    const input = document.getElementById('dataInput');
    if (!input) return;
    
    const value = input.value.trim();
    const equipments = getEquipmentByPriorityForDataEntry();
    const parameters = getParametersByPriorityForDataEntry();
    const currentParameter = parameters[dataEntryState.currentParameterIndex];
    
    if (!value || !validateValue(value, currentParameter.id)) {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        const maxValue = currentParameter.type === 'velocity' ? 20 : 2;
        showNotification(`لطفاً مقدار صحیح (0-${maxValue}) وارد کنید`, 'error');
        return;
    }
    
    const currentEquipment = equipments[dataEntryState.currentEquipmentIndex];
    
    if (!dataEntryState.dateData[currentEquipment.id]) {
        dataEntryState.dateData[currentEquipment.id] = {};
    }
    dataEntryState.dateData[currentEquipment.id][currentParameter.id] = parseFloat(value);
    
    dataEntryState.currentParameterIndex++;
    
    if (dataEntryState.currentParameterIndex >= parameters.length) {
        saveEquipmentData(currentEquipment.id);
        
        dataEntryState.currentParameterIndex = 0;
        dataEntryState.currentEquipmentIndex++;
        
        if (dataEntryState.currentEquipmentIndex >= equipments.length) {
            showNotification('تمام تجهیزات تکمیل شد!', 'success');
            dataEntryState.currentEquipmentIndex = 0;
            setTimeout(() => {
                switchDataEntryMode('edit');
                showNotification('اکنون می‌توانید داده‌ها را ویرایش کنید', 'info');
            }, 1000);
            return;
        }
    }
    
    updateCurrentDisplay();
    if (input) {
        input.focus();
    }
}

async function saveEquipmentData(equipmentId) {
    const today = getCurrentDate();
    const data = {
        unit: dataEntryState.selectedUnit,
        equipment: equipmentId,
        date: today,
        parameters: dataEntryState.dateData[equipmentId],
        notes: dataEntryState.currentEquipmentNote || '',
        timestamp: new Date().toISOString(),
        userName: currentUser.name
    };
    
    try {
        await saveDataToDB(data);
        showNotification('داده‌های تجهیز ذخیره شد', 'success');
        
        // پاک کردن یادداشت برای تجهیز بعدی
        dataEntryState.currentEquipmentNote = '';
        const noteTextarea = document.getElementById('noteTextarea');
        if (noteTextarea) noteTextarea.value = '';
        
    } catch (error) {
        console.error('Error saving equipment data:', error);
        showNotification('خطا در ذخیره داده‌ها', 'error');
    }
}

function saveCurrentData() {
    const input = document.getElementById('dataInput');
    if (!input) return;
    
    const value = input.value.trim();
    const parameters = getParametersByPriorityForDataEntry();
    const currentParameter = parameters[dataEntryState.currentParameterIndex];
    
    if (value && validateValue(value, currentParameter.id)) {
        handleDataInput();
    } else {
        const maxValue = currentParameter.type === 'velocity' ? 20 : 2;
        showNotification(`لطفاً مقدار صحیح (0-${maxValue}) وارد کنید`, 'error');
    }
}

function resetEntry() {
    dataEntryState.currentEquipmentIndex = 0;
    dataEntryState.currentParameterIndex = 0;
    updateCurrentDisplay();
    const dataInput = document.getElementById('dataInput');
    if (dataInput) {
        dataInput.focus();
    }
}

// تصحیح تابع initDataEntry
function initDataEntry() {
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
            const parameters = getParametersByPriorityForDataEntry();
            const currentParameter = parameters[dataEntryState.currentParameterIndex];
            
            if (currentParameter && value && !validateValue(value, currentParameter.id)) {
                e.target.style.borderColor = 'var(--error-color)';
                e.target.classList.add('invalid');
            } else {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.classList.remove('invalid');
                if (value) {
                    e.target.classList.add('valid');
                } else {
                    e.target.classList.remove('valid');
                }
            }
        });
    }
    
    const editInput = document.getElementById('editDataInput');
    if (editInput) {
        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEditedData();
            }
        });
        
        editInput.addEventListener('input', (e) => {
            const value = e.target.value;
            const parameterId = dataEntryState.editSelectedParameter;
            
            if (parameterId && value && !validateValue(value, parameterId)) {
                e.target.style.borderColor = 'var(--error-color)';
                e.target.classList.add('invalid');
            } else {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.classList.remove('invalid');
                if (value) {
                    e.target.classList.add('valid');
                } else {
                    e.target.classList.remove('valid');
                }
            }
        });
    }

    // تنظیم تاریخ جاری
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    if (currentDateDisplay) {
        currentDateDisplay.textContent = formatDate(getCurrentDate());
    }
    
    // Event listener برای textarea یادداشت
    const noteTextarea = document.getElementById('noteTextarea');
    if (noteTextarea) {
        noteTextarea.addEventListener('input', (e) => {
            dataEntryState.currentEquipmentNote = e.target.value;
        });
    }
    
    // تصحیح: اطمینان از مخفی بودن یادداشت در ابتدا
    dataEntryState.noteExpanded = false;
    const noteContent = document.getElementById('noteContent');
    const noteToggleBtn = document.getElementById('noteToggleBtn');
    if (noteContent) noteContent.classList.remove('active');
    if (noteToggleBtn) noteToggleBtn.classList.remove('active');
}

// ==================== VIEW DATA FUNCTIONS ====================
async function initViewData() {
    await loadViewFilters();
    await loadViewData();
    updateUserDisplay();
}

async function loadViewFilters() {
    const equipmentSelect = document.getElementById('viewEquipment');
    if (equipmentSelect) {
        equipmentSelect.innerHTML = '<option value="">همه تجهیزات</option>';
        
        APP_CONFIG.equipments.forEach(equipment => {
            const option = document.createElement('option');
            option.value = equipment.id;
            option.textContent = equipment.name;
            equipmentSelect.appendChild(option);
        });
    }
    
    const viewDate = document.getElementById('viewDate');
    if (viewDate) {
        viewDate.value = getCurrentDate();
    }
    
    // Add event listeners
    const viewUnit = document.getElementById('viewUnit');
    const viewEquipment = document.getElementById('viewEquipment');
    
    if (viewUnit) viewUnit.addEventListener('change', loadViewData);
    if (viewDate) viewDate.addEventListener('change', loadViewData);
    if (viewEquipment) viewEquipment.addEventListener('change', loadViewData);
}

async function loadViewData() {
    const viewUnit = document.getElementById('viewUnit');
    const viewDate = document.getElementById('viewDate');
    const viewEquipment = document.getElementById('viewEquipment');
    
    if (!viewUnit || !viewDate || !viewEquipment) return;
    
    const unit = viewUnit.value;
    const date = viewDate.value;
    const equipment = viewEquipment.value;
    
    const filters = {};
    if (unit) filters.unit = unit;
    if (date) filters.date = date;
    if (equipment) filters.equipment = equipment;
    
    try {
        const data = await getDataFromDB(filters);
        
        if (unit === '') {
            renderSeparateUnitTables(data, date);
        } else {
            renderDataTable(data, unit);
        }
    } catch (error) {
        console.error('Error loading view data:', error);
        showNotification('خطا در بارگذاری داده‌ها', 'error');
    }
}

function renderSeparateUnitTables(data, date) {
    const container = document.getElementById('dataTablesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    ['DRI1', 'DRI2'].forEach(unitId => {
        const unitData = data.filter(d => d.unit === unitId);
        const unitInfo = APP_CONFIG.units.find(u => u.id === unitId);
        
        const tableContainer = document.createElement('div');
        tableContainer.className = `table-container mobile-scroll table-${unitId.toLowerCase()}`;
        
        const title = document.createElement('div');
        title.className = `table-title ${unitId.toLowerCase()}`;
        title.innerHTML = `
            <div class="d-flex justify-between align-center">
                <span>${unitInfo.name} - ${date ? formatDate(date) : 'همه تاریخ‌ها'}</span>
                <span style="font-size: 0.9rem;">کاربر: ${currentUser.name}</span>
            </div>
        `;
        tableContainer.appendChild(title);
        
        const table = document.createElement('table');
        table.className = 'table table-transposed';
        
        // ساخت هدر جدول (پارامترها + یادداشت)
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th class="equipment-header">تجهیزات</th>';
        
        const parameters = getParametersByPriorityForDataEntry();
        parameters.forEach(parameter => {
            const th = document.createElement('th');
            th.className = 'parameter-header';
            th.innerHTML = `
                <div class="parameter-header-content">
                    <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                    <div class="parameter-text">
                        <div class="parameter-name">${parameter.name}</div>
                        <div class="parameter-code">(${parameter.code})</div>
                    </div>
                </div>
            `;
            headerRow.appendChild(th);
        });
        
        // ستون یادداشت
        const notesHeader = document.createElement('th');
        notesHeader.className = 'notes-header';
        notesHeader.innerHTML = `
            <div class="notes-header-content">
                <i class="fas fa-sticky-note" style="color: var(--warning-color)"></i>
                <span>یادداشت</span>
            </div>
        `;
        headerRow.appendChild(notesHeader);
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // ساخت بدنه جدول (هر سطر = یک تجهیز)
        const tbody = document.createElement('tbody');
        
        if (unitData.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="${parameters.length + 2}" class="text-center">داده‌ای موجود نیست</td>`;
            tbody.appendChild(row);
        } else {
            const equipments = [...new Set(unitData.map(d => d.equipment))].sort();
            
            equipments.forEach(equipmentId => {
                const equipment = APP_CONFIG.equipments.find(e => e.id === equipmentId);
                const equipmentData = unitData.find(d => d.equipment === equipmentId);
                
                const row = document.createElement('tr');
                
                // سلول نام تجهیز
                const equipmentCell = document.createElement('td');
                equipmentCell.className = 'equipment-name-cell';
                equipmentCell.innerHTML = `
                    <div class="equipment-info">
                        <i class="${equipment?.icon || 'fas fa-cog'}" style="color: ${equipment?.color || 'var(--primary-color)'}"></i>
                        <span class="equipment-name">${equipment?.name || equipmentId}</span>
                        <small class="equipment-code">${equipment?.code || equipmentId}</small>
                    </div>
                `;
                row.appendChild(equipmentCell);
                
                // سلول‌های پارامترها
                parameters.forEach(parameter => {
                    const td = document.createElement('td');
                    td.className = 'parameter-value-cell';
                    const value = equipmentData?.parameters?.[parameter.id];
                    
                    if (value !== undefined) {
                        td.innerHTML = `<span class="parameter-value">${value}</span>`;
                        td.classList.add('has-value');
                    } else {
                        td.innerHTML = `<span class="parameter-value no-value">--</span>`;
                        td.classList.add('no-value');
                    }
                    
                    row.appendChild(td);
                });
                
                // سلول یادداشت
                const notesCell = document.createElement('td');
                notesCell.className = 'equipment-notes-cell';
                const note = equipmentData?.notes || '';
                
                if (note.trim()) {
                    notesCell.innerHTML = `
                        <div class="equipment-note-content">
                            <i class="fas fa-comment" style="color: var(--info-color)"></i>
                            <span class="note-text">${note}</span>
                        </div>
                    `;
                    notesCell.classList.add('has-note');
                } else {
                    notesCell.innerHTML = `
                        <div class="no-equipment-note">
                            <i class="fas fa-minus" style="color: var(--text-muted)"></i>
                            <span class="no-note-text">بدون یادداشت</span>
                        </div>
                    `;
                    notesCell.classList.add('no-note');
                }
                
                row.appendChild(notesCell);
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
    if (!container) return;
    
    container.innerHTML = '';
    
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container mobile-scroll';
    
    if (selectedUnit) {
        tableContainer.classList.add(`table-${selectedUnit.toLowerCase()}`);
    }
    
    const table = document.createElement('table');
    table.className = 'table table-transposed';
    
    if (data.length === 0) {
        const tbody = document.createElement('tbody');
        tbody.innerHTML = '<tr><td colspan="100%" class="text-center">داده‌ای موجود نیست</td></tr>';
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);
        return;
    }
    
    // ساخت هدر جدول (پارامترها + یادداشت)
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th class="equipment-header">تجهیزات</th>';
    
    const parameters = getParametersByPriorityForDataEntry();
    parameters.forEach(parameter => {
        const th = document.createElement('th');
        th.className = 'parameter-header';
        th.innerHTML = `
            <div class="parameter-header-content">
                <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                <div class="parameter-text">
                    <div class="parameter-name">${parameter.name}</div>
                    <div class="parameter-code">(${parameter.code})</div>
                </div>
            </div>
        `;
        headerRow.appendChild(th);
    });
    
    // ستون یادداشت
    const notesHeader = document.createElement('th');
    notesHeader.className = 'notes-header';
    notesHeader.innerHTML = `
        <div class="notes-header-content">
            <i class="fas fa-sticky-note" style="color: var(--warning-color)"></i>
            <span>یادداشت</span>
        </div>
    `;
    headerRow.appendChild(notesHeader);
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // ساخت بدنه جدول (هر سطر = یک تجهیز)
    const tbody = document.createElement('tbody');
    const equipments = [...new Set(data.map(d => d.equipment))].sort();
    
    equipments.forEach(equipmentId => {
        const equipment = APP_CONFIG.equipments.find(e => e.id === equipmentId);
        const equipmentData = data.find(d => d.equipment === equipmentId);
        
        const row = document.createElement('tr');
        
        // سلول نام تجهیز
        const equipmentCell = document.createElement('td');
        equipmentCell.className = 'equipment-name-cell';
        equipmentCell.innerHTML = `
            <div class="equipment-info">
                <i class="${equipment?.icon || 'fas fa-cog'}" style="color: ${equipment?.color || 'var(--primary-color)'}"></i>
                <span class="equipment-name">${equipment?.name || equipmentId}</span>
                <small class="equipment-code">${equipment?.code || equipmentId}</small>
            </div>
        `;
        row.appendChild(equipmentCell);
        
        // سلول‌های پارامترها
        parameters.forEach(parameter => {
            const td = document.createElement('td');
            td.className = 'parameter-value-cell';
            const value = equipmentData?.parameters?.[parameter.id];
            
            if (value !== undefined) {
                td.innerHTML = `<span class="parameter-value">${value}</span>`;
                td.classList.add('has-value');
            } else {
                td.innerHTML = `<span class="parameter-value no-value">--</span>`;
                td.classList.add('no-value');
            }
            
            row.appendChild(td);
        });
        
        // سلول یادداشت
        const notesCell = document.createElement('td');
        notesCell.className = 'equipment-notes-cell';
        const note = equipmentData?.notes || '';
        
        if (note.trim()) {
            notesCell.innerHTML = `
                <div class="equipment-note-content">
                    <i class="fas fa-comment" style="color: var(--info-color)"></i>
                    <span class="note-text">${note}</span>
                </div>
            `;
            notesCell.classList.add('has-note');
        } else {
            notesCell.innerHTML = `
                <div class="no-equipment-note">
                    <i class="fas fa-minus" style="color: var(--text-muted)"></i>
                    <span class="no-note-text">بدون یادداشت</span>
                </div>
            `;
            notesCell.classList.add('no-note');
        }
        
        row.appendChild(notesCell);
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    container.appendChild(tableContainer);
}

function printTable() {
    const viewUnit = document.getElementById('viewUnit');
    const viewDate = document.getElementById('viewDate');
    
    if (!viewUnit || !viewDate) return;
    
    const selectedUnit = viewUnit.value;
    const selectedDate = viewDate.value;
    
    let unitName = 'همه واحدها';
    if (selectedUnit) {
        const unit = APP_CONFIG.units.find(u => u.id === selectedUnit);
        unitName = unit ? unit.name : selectedUnit;
    }
    
    const printWindow = window.open('', '', 'width=800,height=600');
    const tablesContainer = document.getElementById('dataTablesContainer');
    
    if (printWindow && tablesContainer) {
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
}

// ==================== CHARTS FUNCTIONS ====================
async function initCharts() {
    await loadChartFilters();
    initChartParameters();
    updateUserDisplay();
    updateChartContainerSize();
}

async function loadChartFilters() {
    const equipmentSelect = document.getElementById('chartEquipment');
    if (equipmentSelect) {
        equipmentSelect.innerHTML = '';
        
        APP_CONFIG.equipments.forEach(equipment => {
            const option = document.createElement('option');
            option.value = equipment.id;
            option.textContent = equipment.name;
            equipmentSelect.appendChild(option);
        });
    }
    
    const today = getCurrentDate();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const chartDateFrom = document.getElementById('chartDateFrom');
    const chartDateTo = document.getElementById('chartDateTo');
    
    if (chartDateFrom) chartDateFrom.value = weekAgo.toISOString().split('T')[0];
    if (chartDateTo) chartDateTo.value = today;
    
    // Add event listeners
    const chartUnit = document.getElementById('chartUnit');
    const chartEquipment = document.getElementById('chartEquipment');
    
    if (chartUnit) chartUnit.addEventListener('change', updateChart);
    if (chartEquipment) chartEquipment.addEventListener('change', updateChart);
    if (chartDateFrom) chartDateFrom.addEventListener('change', updateChart);
    if (chartDateTo) chartDateTo.addEventListener('change', updateChart);
}

function initChartParameters() {
    const container = document.getElementById('chartParameters');
    if (!container) return;
    
    container.innerHTML = '';
    
    const parameters = getParametersByPriorityForDataEntry();
    parameters.forEach(parameter => {
        const div = document.createElement('div');
        div.className = 'parameter-item';
        div.innerHTML = `
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" value="${parameter.id}" onchange="updateChart()">
                <i class="${parameter.icon}" style="color: ${parameter.color}"></i>
                <span>${parameter.name}</span>
            </label>
        `;
        container.appendChild(div);
    });
}

let resizeTimeout;
function updateChartContainerSize() {
    // تصحیح: دیباونس کردن تغییرات اندازه
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const chartContainer = document.getElementById('chartContainerMain');
        const chartsSection = document.getElementById('charts');
        
        if (!chartContainer || !chartsSection) return;
        
        const isFullscreen = chartsSection.classList.contains('fullscreen');
        
        if (isFullscreen) {
            chartContainer.style.width = '90%';
            chartContainer.style.height = '90vh';
            chartContainer.style.margin = '0 auto';
        } else {
            chartContainer.style.width = '80%';
            chartContainer.style.height = '80vh';
            chartContainer.style.margin = '0 auto';
        }
        
        // بهبود: resize chart فقط در صورت وجود
        if (chartInstance && typeof chartInstance.resize === 'function') {
            chartInstance.resize();
        }
    }, 150);
}

async function updateChart() {
    const chartUnit = document.getElementById('chartUnit');
    const chartEquipment = document.getElementById('chartEquipment');
    const chartDateFrom = document.getElementById('chartDateFrom');
    const chartDateTo = document.getElementById('chartDateTo');
    
    if (!chartUnit || !chartEquipment || !chartDateFrom || !chartDateTo) return;
    
    const unit = chartUnit.value;
    const equipment = chartEquipment.value;
    const dateFrom = chartDateFrom.value;
    const dateTo = chartDateTo.value;
    
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
    const canvas = document.getElementById('mainChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    const dates = [...new Set(data.map(d => d.date))].sort();
    const datasets = [];
    
    selectedParameters.forEach((paramId, index) => {
        const parameter = APP_CONFIG.parameters.find(p => p.id === paramId);
        if (!parameter) return;
        
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
    const chartEquipment = document.getElementById('chartEquipment');
    
    if (!canvas || !chartEquipment) return;
    
    const printWindow = window.open('', '', 'width=800,height=600');
    
    if (printWindow) {
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
                        <p>تجهیز: ${chartEquipment.selectedOptions[0]?.textContent || 'نامشخص'}</p>
                        <div class="user-info">کاربر: ${currentUser.name}</div>
                    </div>
                    <img src="${canvas.toDataURL()}" alt="نمودار">
                </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
    }
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
    
    const timeRangeStart = new Date(today);
    timeRangeStart.setDate(timeRangeStart.getDate() - currentSettings.analysisTimeRange);
    
    const allData = await getDataFromDB({
        dateFrom: timeRangeStart.toISOString().split('T')[0],
        dateTo: timeRangeEnd.toISOString().split('T')[0]
    });
    
    const dataGroups = {};
    allData.forEach(item => {
        const key = `${item.unit}_${item.equipment}`;
        if (!dataGroups[key]) {
            dataGroups[key] = {};
        }
        dataGroups[key][item.date] = item.parameters;
    });
    
    for (const [groupKey, dateData] of Object.entries(dataGroups)) {
        const [unit, equipment] = groupKey.split('_');
        const dates = Object.keys(dateData).sort();
        
        if (dates.length < 2) continue;
        
        const parameters = getParametersByPriorityForDataEntry();
        for (const parameter of parameters) {
            const parameterId = parameter.id;
            const values = dates.map(date => dateData[date]?.[parameterId]).filter(v => v !== undefined);
            
            if (values.length < 2) continue;
            
            const latestValue = values[values.length - 1];
            const comparisonValue = values[values.length - 2];
            
            if (comparisonValue === 0) continue;
            
            const increasePercentage = ((latestValue - comparisonValue) / comparisonValue) * 100;
            
            if (increasePercentage >= currentSettings.analysisThreshold) {
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
    
    return anomalies.sort((a, b) => b.increasePercentage - a.increasePercentage);
}

function renderAnalysisCards(anomalies) {
    const container = document.getElementById('analysisCardsContainer');
    if (!container) return;
    
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
    const chartsNavTab = document.querySelector('.nav-tab[onclick*="charts"]');
    if (chartsNavTab) {
        chartsNavTab.click();
    }
    
    setTimeout(() => {
        const chartUnit = document.getElementById('chartUnit');
        const chartEquipment = document.getElementById('chartEquipment');
        
        if (chartUnit && chartEquipment) {
            chartUnit.value = unit;
            chartEquipment.value = equipment;
            
            document.querySelectorAll('#chartParameters input[type="checkbox"]').forEach(cb => {
                cb.checked = true;
            });
            
            const today = getCurrentDate();
            const monthAgo = new Date();
            monthAgo.setDate(monthAgo.getDate() - 30);
            
            const chartDateFrom = document.getElementById('chartDateFrom');
            const chartDateTo = document.getElementById('chartDateTo');
            
            if (chartDateFrom) chartDateFrom.value = monthAgo.toISOString().split('T')[0];
            if (chartDateTo) chartDateTo.value = today;
            
            updateChart();
            
            showNotification(`نمودار ${equipment} در واحد ${unit} نمایش داده شد`, 'success');
        }
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
    const slideshowDate = document.getElementById('slideshowDate');
    const slideshowSpeed = document.getElementById('slideshowSpeed');
    
    if (slideshowDate) {
        slideshowDate.value = getCurrentDate();
    }
    
    if (slideshowSpeed) {
        slideshowSpeed.addEventListener('change', updateSlideshowSpeed);
    }
}

function updateSlideshowSpeed() {
    const slideshowSpeed = document.getElementById('slideshowSpeed');
    if (!slideshowSpeed) return;
    
    const speed = parseInt(slideshowSpeed.value);
    slideshowState.speed = speed * 1000;
    
    if (slideshowState.isRunning && !slideshowState.isPaused) {
        clearInterval(slideshowState.interval);
        startSlideshowInterval();
    }
}

async function startSlideshow() {
    const slideshowDate = document.getElementById('slideshowDate');
    if (!slideshowDate) return;
    
    const date = slideshowDate.value;
    
    if (!date) {
        showNotification('لطفاً تاریخ را انتخاب کنید', 'error');
        return;
    }
    
    try {
        const allData = await getDataFromDB({ date });
        
        if (allData.length === 0) {
            showNotification('داده‌ای برای این تاریخ موجود نیست', 'error');
            return;
        }
        
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
    
    const dataKey = `${currentEquipment.id}_${currentEquipment.unit || 'DRI1'}`;
    
    slideshowState.currentValueColor = getRandomColor();
    
    updateSlideshowDisplay(currentEquipment, currentParameter, dataKey);
    
    slideshowState.currentParameterIndex++;
    
    if (slideshowState.currentParameterIndex >= parameters.length) {
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
    
    const slideshowEquipmentName = document.getElementById('slideshowEquipmentName');
    const slideshowParameterName = document.getElementById('slideshowParameterName');
    const slideshowValue = document.getElementById('slideshowValue');
    
    if (slideshowEquipmentName) {
        slideshowEquipmentName.textContent = equipment.name;
    }
    
    if (slideshowParameterName) {
        slideshowParameterName.textContent = `${parameter.name} (${parameter.code})`;
    }
    
    if (slideshowValue) {
        slideshowValue.textContent = value !== undefined ? value : '--';
        slideshowValue.style.color = slideshowState.currentValueColor;
    }
    
    if (slideshowState.isFullscreen) {
        const slideshowEquipmentNameFS = document.getElementById('slideshowEquipmentNameFS');
        const slideshowParameterNameFS = document.getElementById('slideshowParameterNameFS');
        const slideshowValueFS = document.getElementById('slideshowValueFS');
        
        if (slideshowEquipmentNameFS) {
            slideshowEquipmentNameFS.textContent = equipment.name;
        }
        
        if (slideshowParameterNameFS) {
            slideshowParameterNameFS.textContent = `${parameter.name} (${parameter.code})`;
        }
        
        if (slideshowValueFS) {
            slideshowValueFS.textContent = value !== undefined ? value : '--';
            slideshowValueFS.style.color = slideshowState.currentValueColor;
        }
    }
}

function showEquipmentConfirmation() {
    const equipmentsByPriority = getEquipmentByPriority();
    const nextEquipment = equipmentsByPriority[slideshowState.currentEquipmentIndex];
    
    if (!nextEquipment) return;
    
    if (slideshowState.isFullscreen) {
        const slideshowFullscreenMessage = document.getElementById('slideshowFullscreenMessage');
        const slideshowFullscreenModal = document.getElementById('slideshowFullscreenModal');
        
        if (slideshowFullscreenMessage) {
            slideshowFullscreenMessage.textContent = `آیا به تجهیز ${nextEquipment.name} بروم؟`;
        }
        
        if (slideshowFullscreenModal) {
            slideshowFullscreenModal.classList.remove('d-none');
        }
    } else {
        const slideshowMessage = document.getElementById('slideshowMessage');
        const slideshowModal = document.getElementById('slideshowModal');
        
        if (slideshowMessage) {
            slideshowMessage.textContent = `آیا به تجهیز ${nextEquipment.name} بروم؟`;
        }
        
        if (slideshowModal) {
            slideshowModal.classList.add('active');
        }
    }
}

function confirmNextEquipment() {
    closeModal('slideshowModal');
    
    if (slideshowState.isRunning) {
        startSlideshowInterval();
    }
}

function confirmNextEquipmentFullscreen() {
    const slideshowFullscreenModal = document.getElementById('slideshowFullscreenModal');
    if (slideshowFullscreenModal) {
        slideshowFullscreenModal.classList.add('d-none');
    }
    
    if (slideshowState.isRunning) {
        startSlideshowInterval();
    }
}

function stopSlideshowFromFullscreen() {
    const slideshowFullscreenModal = document.getElementById('slideshowFullscreenModal');
    if (slideshowFullscreenModal) {
        slideshowFullscreenModal.classList.add('d-none');
    }
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
    
    const slideshowValue = document.getElementById('slideshowValue');
    const slideshowValueFS = document.getElementById('slideshowValueFS');
    
    if (slideshowValue) {
        slideshowValue.style.color = 'var(--primary-color)';
    }
    
    if (slideshowValueFS) {
        slideshowValueFS.style.color = 'var(--primary-color)';
    }
    
    const slideshowEquipmentName = document.getElementById('slideshowEquipmentName');
    const slideshowParameterName = document.getElementById('slideshowParameterName');
    
    if (slideshowEquipmentName) {
        slideshowEquipmentName.textContent = 'اسلایدشو متوقف شد';
    }
    
    if (slideshowParameterName) {
        slideshowParameterName.textContent = '';
    }
    
    if (slideshowValue) {
        slideshowValue.textContent = '--';
    }
    
    if (slideshowState.isFullscreen) {
        const slideshowEquipmentNameFS = document.getElementById('slideshowEquipmentNameFS');
        const slideshowParameterNameFS = document.getElementById('slideshowParameterNameFS');
        
        if (slideshowEquipmentNameFS) {
            slideshowEquipmentNameFS.textContent = 'اسلایدشو متوقف شد';
        }
        
        if (slideshowParameterNameFS) {
            slideshowParameterNameFS.textContent = '';
        }
        
        if (slideshowValueFS) {
            slideshowValueFS.textContent = '--';
        }
    }
    
    closeModal('slideshowModal');
    
    const slideshowFullscreenModal = document.getElementById('slideshowFullscreenModal');
    if (slideshowFullscreenModal) {
        slideshowFullscreenModal.classList.add('d-none');
    }
    
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
    
    const slideshowFullscreen = document.getElementById('slideshowFullscreen');
    if (slideshowFullscreen) {
        slideshowFullscreen.classList.remove('d-none');
    }
    
    const slideshowEquipmentName = document.getElementById('slideshowEquipmentName');
    const slideshowParameterName = document.getElementById('slideshowParameterName');
    const slideshowValue = document.getElementById('slideshowValue');
    
    const slideshowEquipmentNameFS = document.getElementById('slideshowEquipmentNameFS');
    const slideshowParameterNameFS = document.getElementById('slideshowParameterNameFS');
    const slideshowValueFS = document.getElementById('slideshowValueFS');
    
    if (slideshowEquipmentName && slideshowEquipmentNameFS) {
        slideshowEquipmentNameFS.textContent = slideshowEquipmentName.textContent;
    }
    
    if (slideshowParameterName && slideshowParameterNameFS) {
        slideshowParameterNameFS.textContent = slideshowParameterName.textContent;
    }
    
    if (slideshowValue && slideshowValueFS) {
        slideshowValueFS.textContent = slideshowValue.textContent;
        slideshowValueFS.style.color = slideshowValue.style.color;
    }
}

function exitSlideshowFullscreen() {
    slideshowState.isFullscreen = false;
    
    const slideshowFullscreen = document.getElementById('slideshowFullscreen');
    if (slideshowFullscreen) {
        slideshowFullscreen.classList.add('d-none');
    }
    
    const slideshowFullscreenModal = document.getElementById('slideshowFullscreenModal');
    if (slideshowFullscreenModal) {
        slideshowFullscreenModal.classList.add('d-none');
    }
}

// ==================== DATABASE FUNCTIONS ====================
async function initDatabase() {
    await updateDatabaseStats();
}

async function updateDatabaseStats() {
    try {
        const allData = await db.vibrateData.toArray();
        const uniqueDates = [...new Set(allData.map(d => d.date))];
        
        const totalDays = document.getElementById('totalDays');
        const totalRecords = document.getElementById('totalRecords');
        const dbSize = document.getElementById('dbSize');
        const lastUpdate = document.getElementById('lastUpdate');
        const lastUser = document.getElementById('lastUser');
        
        if (totalDays) totalDays.textContent = uniqueDates.length;
        if (totalRecords) totalRecords.textContent = allData.length;
        
        const dataSize = JSON.stringify(allData).length;
        const sizeKB = Math.round(dataSize / 1024);
        if (dbSize) dbSize.textContent = `${sizeKB} KB`;
        
        const lastRecord = allData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
        if (lastRecord && lastUpdate) {
            lastUpdate.textContent = formatDate(lastRecord.timestamp.split('T')[0]);
        }

        const lastUserName = await getLastUserFromDB();
        if (lastUser) lastUser.textContent = lastUserName || 'نامشخص';
        
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
    const headers = ['واحد', 'تجهیز', 'تاریخ', 'زمان', 'کاربر', 'یادداشت'];
    const parameters = getParametersByPriorityForDataEntry();
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
            item.userName || 'نامشخص',
            item.notes || ''
        ];
        
        parameters.forEach(param => {
            row.push(item.parameters[param.id] || '');
        });
        
        // تصحیح: escape کردن کاما و quote ها
        const escapedRow = row.map(cell => {
            const cellStr = String(cell);
            if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
                return `"${cellStr.replace(/"/g, '""')}"`;
            }
            return cellStr;
        });
        
        rows.push(escapedRow);
    });
    
    // تصحیح: اضافه کردن BOM برای UTF-8
    const csvContent = '\uFEFF' + rows.map(row => row.join(',')).join('\n');
    downloadFile(csvContent, 'vibrate-data.csv', 'text/csv;charset=utf-8;');
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
    if (!fileInput) return;
    
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
    const parameters = getParametersByPriorityForDataEntry();
    
    for (const row of csvData) {
        if (!row.واحد || !row.تجهیز || !row.تاریخ) continue;
        
        const unit = row.واحد;
        const equipmentName = row.تجهیز;
        const date = row.تاریخ;
        const userName = row.کاربر || 'نامشخص';
        const notes = row.یادداشت || '';
        
        const equipment = APP_CONFIG.equipments.find(e => e.name === equipmentName);
        if (!equipment) continue;
        
        const existingData = await getDataFromDB({
            unit,
            equipment: equipment.id,
            date
        });
        
        if (existingData.length > 0) {
            console.warn(`Data already exists for ${unit}-${equipment.id}-${date}`);
            continue;
        }
        
        const params = {};
        parameters.forEach(param => {
            if (row[param.name]) {
                params[param.id] = parseFloat(row[param.name]);
            }
        });
        
        const dataItem = {
            unit,
            equipment: equipment.id,
            date,
            parameters: params,
            notes,
            timestamp: new Date().toISOString(),
            userName
        };
        
        await saveDataToDB(dataItem);
    }
}

async function mergeDatabase() {
    const fileInput = document.getElementById('mergeFile');
    if (!fileInput) return;
    
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
            const notes = row.یادداشت || '';
            
            const equipment = APP_CONFIG.equipments.find(e => e.name === equipmentName);
            if (!equipment) continue;
            
            const existingData = await getDataFromDB({
                unit,
                equipment: equipment.id,
                date
            });
            
            if (existingData.length > 0) {
                skippedCount++;
                continue;
            }
            
            const params = {};
            const parameters = getParametersByPriorityForDataEntry();
            parameters.forEach(param => {
                if (row[param.name]) {
                    params[param.id] = parseFloat(row[param.name]);
                }
            });
            
            const dataItem = {
                unit,
                equipment: equipment.id,
                date,
                parameters: params,
                notes,
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
            
            if (validateSettings(importedSettings)) {
                currentSettings = { ...currentSettings, ...importedSettings };
                await saveSettingsToDB(currentSettings);
                applyTheme();
                showNotification('تنظیمات با موفقیت وارد شد', 'success');
                initSettings();
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
    const themeSelect = document.getElementById('themeSelect');
    const primaryColor = document.getElementById('primaryColor');
    const dri1Color = document.getElementById('dri1Color');
    const dri2Color = document.getElementById('dri2Color');
    const analysisThreshold = document.getElementById('analysisThreshold');
    const analysisTimeRange = document.getElementById('analysisTimeRange');
    const analysisComparisonDays = document.getElementById('analysisComparisonDays');
    
    if (themeSelect) themeSelect.value = currentSettings.theme;
    if (primaryColor) primaryColor.value = currentSettings.primaryColor;
    if (dri1Color) dri1Color.value = currentSettings.dri1Color;
    if (dri2Color) dri2Color.value = currentSettings.dri2Color;
    if (analysisThreshold) analysisThreshold.value = currentSettings.analysisThreshold;
    if (analysisTimeRange) analysisTimeRange.value = currentSettings.analysisTimeRange;
    if (analysisComparisonDays) analysisComparisonDays.value = currentSettings.analysisComparisonDays;
    
    const thresholdDisplay = document.getElementById('thresholdDisplay');
    const timeRangeDisplay = document.getElementById('timeRangeDisplay');
    const comparisonDisplay = document.getElementById('comparisonDisplay');
    
    if (thresholdDisplay) thresholdDisplay.textContent = `${currentSettings.analysisThreshold}%`;
    if (timeRangeDisplay) timeRangeDisplay.textContent = `${currentSettings.analysisTimeRange} روز`;
    if (comparisonDisplay) comparisonDisplay.textContent = `${currentSettings.analysisComparisonDays} روز قبل`;
    
    initEquipmentPriority();
    initParameterPriority();
    initDataEntryPriorities();
    
    // Add event listeners
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            currentSettings.theme = e.target.value;
            applyTheme();
            updateThemeIcon();
        });
    }
    
    if (primaryColor) {
        primaryColor.addEventListener('change', (e) => {
            currentSettings.primaryColor = e.target.value;
            applyTheme();
        });
    }
    
    if (dri1Color) {
        dri1Color.addEventListener('change', (e) => {
            currentSettings.dri1Color = e.target.value;
            applyTheme();
        });
    }
    
    if (dri2Color) {
        dri2Color.addEventListener('change', (e) => {
            currentSettings.dri2Color = e.target.value;
            applyTheme();
        });
    }
    
    if (analysisThreshold) {
        analysisThreshold.addEventListener('change', (e) => {
            currentSettings.analysisThreshold = parseFloat(e.target.value);
            if (thresholdDisplay) {
                thresholdDisplay.textContent = `${currentSettings.analysisThreshold}%`;
            }
        });
    }
    
    if (analysisTimeRange) {
        analysisTimeRange.addEventListener('change', (e) => {
            currentSettings.analysisTimeRange = parseInt(e.target.value);
            if (timeRangeDisplay) {
                timeRangeDisplay.textContent = `${currentSettings.analysisTimeRange} روز`;
            }
        });
    }
    
    if (analysisComparisonDays) {
        analysisComparisonDays.addEventListener('change', (e) => {
            currentSettings.analysisComparisonDays = parseInt(e.target.value);
            if (comparisonDisplay) {
                comparisonDisplay.textContent = `${currentSettings.analysisComparisonDays} روز قبل`;
            }
        });
    }
}

function initEquipmentPriority() {
    const container = document.getElementById('equipmentPriority');
    if (!container) return;
    
    container.innerHTML = '';
    
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
    if (!container) return;
    
    container.innerHTML = '';
    
    const modeOptions = document.querySelectorAll('#slideshowParameterMode .mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        if (input && input.value === currentSettings.parameterMode) {
            option.classList.add('selected');
            input.checked = true;
        }
    });
    
    if (currentSettings.parameterMode === 'custom') {
        const parameters = getParametersByPriorityForDataEntry();
        parameters.forEach(parameter => {
            const priority = currentSettings.parameterPriority[parameter.id] || parameter.order;
            
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
        // تصحیح این قسمت
        let modeText;
        if (currentSettings.parameterMode === 'default') {
            modeText = 'ترتیب پیش‌فرض: V1, GV1, H1, GH1, A1, GA1, V2, GV2, H2, GH2, A2, GA2';
        } else if (currentSettings.parameterMode === 'velocity-first') {
            modeText = 'ابتدا تمام پارامترهای سرعت، سپس تمام پارامترهای شتاب نمایش داده می‌شود.';
        } else {
            modeText = 'حالت نامشخص';
        }
        
        const info = document.createElement('div');
        info.className = 'text-center';
        info.innerHTML = `<p>${modeText}</p>`;
        container.appendChild(info);
    }
}

// ==================== تصحیح اولویت‌بندی ثبت داده ====================
function initDataEntryPriorities() {
    initDataEntryEquipmentPriority();
    initDataEntryParameterPriority();
}

function initDataEntryEquipmentPriority() {
    const container = document.getElementById('dataEntryEquipmentPriority');
    if (!container) return;
    
    container.innerHTML = '';
    
    // انتخابگر واحد برای تنظیم اولویت‌بندی
    const unitSelector = document.createElement('div');
    unitSelector.className = 'unit-selector-for-priority mb-3';
    unitSelector.innerHTML = `
        <label class="form-label">انتخاب واحد برای تنظیم اولویت:</label>
        <div class="d-flex gap-2">
            <button class="btn btn-primary" onclick="setDataEntryPriorityUnit('DRI1')" id="dri1PriorityBtn">
                <i class="fas fa-industry"></i>
                DRI 1
            </button>
            <button class="btn btn-secondary" onclick="setDataEntryPriorityUnit('DRI2')" id="dri2PriorityBtn">
                <i class="fas fa-industry"></i>
                DRI 2
            </button>
        </div>
    `;
    container.appendChild(unitSelector);
    
    // نمایش پیام انتخاب واحد
    const selectMessage = document.createElement('div');
    selectMessage.id = 'dataEntryPriorityMessage';
    selectMessage.className = 'text-center p-3 bg-secondary';
    selectMessage.innerHTML = '<p>لطفاً ابتدا واحد را انتخاب کنید</p>';
    container.appendChild(selectMessage);
    
    // کانتینر اولویت‌بندی (مخفی در ابتدا)
    const priorityContainer = document.createElement('div');
    priorityContainer.id = 'dataEntryPriorityContainer';
    priorityContainer.className = 'priority-grid d-none';
    container.appendChild(priorityContainer);
}

function setDataEntryPriorityUnit(unitId) {
    // تغییر وضعیت دکمه‌ها
    document.querySelectorAll('#dataEntryEquipmentPriority .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });
    
    const selectedBtn = document.getElementById(unitId === 'DRI1' ? 'dri1PriorityBtn' : 'dri2PriorityBtn');
    if (selectedBtn) {
        selectedBtn.classList.remove('btn-secondary');
        selectedBtn.classList.add('btn-primary');
    }
    
    // مخفی کردن پیام و نمایش اولویت‌بندی
    const message = document.getElementById('dataEntryPriorityMessage');
    const container = document.getElementById('dataEntryPriorityContainer');
    
    if (message) message.classList.add('d-none');
    if (container) container.classList.remove('d-none');
    
    // بارگذاری اولویت‌بندی برای واحد انتخابی
    loadDataEntryEquipmentPriority(unitId);
}

function loadDataEntryEquipmentPriority(unitId) {
    const container = document.getElementById('dataEntryPriorityContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const equipmentEntries = [];
    
    APP_CONFIG.equipments.forEach((equipment, index) => {
        const priorityKey = `${equipment.id}_${unitId}`;
        const priority = currentSettings.dataEntryEquipmentPriority[priorityKey] || (index + 1);
        
        equipmentEntries.push({
            id: priorityKey,
            name: equipment.name,
            unit: unitId,
            priority: priority
        });
    });
    
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
                   min="1" max="12" value="${entry.priority}"
                   onchange="updateDataEntryEquipmentPriority('${entry.id}', this.value)">
        `;
        
        container.appendChild(item);
    });
}

function initDataEntryParameterPriority() {
    const container = document.getElementById('dataEntryParameterPriority');
    if (!container) return;
    
    container.innerHTML = '';
    
    const modeOptions = document.querySelectorAll('#dataEntryParameterMode .mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        if (input && input.value === currentSettings.dataEntryParameterMode) {
            option.classList.add('selected');
            input.checked = true;
        }
    });
    
    if (currentSettings.dataEntryParameterMode === 'custom') {
        const parameters = getParametersByPriorityForDataEntry();
        parameters.forEach(parameter => {
            const priority = currentSettings.dataEntryParameterPriority[parameter.id] || parameter.order;
            
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
                       onchange="updateDataEntryParameterPriority('${parameter.id}', this.value)">
            `;
            
            container.appendChild(item);
        });
    } else {
        let modeText;
        if (currentSettings.dataEntryParameterMode === 'default') {
            modeText = 'ترتیب پیش‌فرض: V1, GV1, H1, GH1, A1, GA1, V2, GV2, H2, GH2, A2, GA2';
        } else {
            modeText = 'در حالت "ابتدا سرعت، سپس شتاب": ابتدا تمام پارامترهای سرعت، سپس تمام پارامترهای شتاب نمایش داده می‌شود.';
        }
        
        const info = document.createElement('div');
        info.className = 'text-center';
        info.innerHTML = `<p>${modeText}</p>`;
        container.appendChild(info);
    }
}

function setParameterMode(mode) {
    currentSettings.parameterMode = mode;
    
    const modeOptions = document.querySelectorAll('#slideshowParameterMode .mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        if (input) input.checked = false;
    });
    
    const selectedOption = document.querySelector(`#slideshowParameterMode .mode-option input[value="${mode}"]`);
    if (selectedOption) {
        const parentOption = selectedOption.parentElement;
        parentOption.classList.add('selected');
        selectedOption.checked = true;
    }
    
    initParameterPriority();
}

function updateEquipmentPriority(equipmentId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 24) {
        currentSettings.equipmentPriority[equipmentId] = numPriority;
        
        const priorityInputs = document.querySelectorAll(`input[onchange*="updateEquipmentPriority"][onchange*="${equipmentId}"]`);
        priorityInputs.forEach(input => {
            const priorityNumber = input.parentElement.querySelector('.priority-number');
            if (priorityNumber) {
                priorityNumber.textContent = numPriority;
            }
        });
    }
}

function updateParameterPriority(parameterId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 12) {
        currentSettings.parameterPriority[parameterId] = numPriority;
        
        const priorityInputs = document.querySelectorAll(`input[onchange*="updateParameterPriority"][onchange*="${parameterId}"]`);
        priorityInputs.forEach(input => {
            const priorityNumber = input.parentElement.querySelector('.priority-number');
            if (priorityNumber) {
                priorityNumber.textContent = numPriority;
            }
        });
    }
}

function setDataEntryParameterMode(mode) {
    currentSettings.dataEntryParameterMode = mode;
    
    const modeOptions = document.querySelectorAll('#dataEntryParameterMode .mode-option');
    modeOptions.forEach(option => {
        option.classList.remove('selected');
        const input = option.querySelector('input');
        if (input) input.checked = false;
    });
    
    const selectedOption = document.querySelector(`#dataEntryParameterMode .mode-option input[value="${mode}"]`);
    if (selectedOption) {
        const parentOption = selectedOption.parentElement;
        parentOption.classList.add('selected');
        selectedOption.checked = true;
    }
    
    initDataEntryParameterPriority();
}

function updateDataEntryEquipmentPriority(equipmentId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 12) {
        currentSettings.dataEntryEquipmentPriority[equipmentId] = numPriority;
        
        const priorityInputs = document.querySelectorAll(`input[onchange*="updateDataEntryEquipmentPriority"][onchange*="${equipmentId}"]`);
        priorityInputs.forEach(input => {
            const priorityNumber = input.parentElement.querySelector('.priority-number');
            if (priorityNumber) {
                priorityNumber.textContent = numPriority;
            }
        });
    }
}

function updateDataEntryParameterPriority(parameterId, priority) {
    const numPriority = parseInt(priority);
    if (numPriority >= 1 && numPriority <= 12) {
        currentSettings.dataEntryParameterPriority[parameterId] = numPriority;
        
        const priorityInputs = document.querySelectorAll(`input[onchange*="updateDataEntryParameterPriority"][onchange*="${parameterId}"]`);
        priorityInputs.forEach(input => {
            const priorityNumber = input.parentElement.querySelector('.priority-number');
            if (priorityNumber) {
                priorityNumber.textContent = numPriority;
            }
        });
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
        parameterMode: 'default',
        dataEntryEquipmentPriority: {},
        dataEntryParameterPriority: {},
        dataEntryParameterMode: 'default',
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
    if (!section) return;
    
    const isFullscreen = section.classList.contains('fullscreen');
    
    if (isFullscreen) {
        exitFullscreen(sectionId);
    } else {
        enterFullscreen(sectionId);
    }
}

function enterFullscreen(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    section.classList.add('fullscreen');
    
    const cardTitle = section.querySelector('.card-title');
    const titleText = cardTitle ? cardTitle.textContent : 'بخش';
    
    const header = document.createElement('div');
    header.className = 'fullscreen-header';
    header.innerHTML = `
        <h2 class="fullscreen-title">${titleText}</h2>
        <button class="fullscreen-close" onclick="exitFullscreen('${sectionId}')">
            <i class="fas fa-times"></i>
            خروج از تمام صفحه
        </button>
    `;
    
    section.insertBefore(header, section.firstChild);
    
    const mainHeader = document.querySelector('.header');
    if (mainHeader) {
        mainHeader.style.display = 'none';
    }
    
    if (sectionId === 'charts') {
        updateChartContainerSize();
        if (chartInstance) {
            setTimeout(() => {
                chartInstance.resize();
            }, 100);
        }
    }
}

function exitFullscreen(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    section.classList.remove('fullscreen');
    
    const header = section.querySelector('.fullscreen-header');
    if (header) {
        header.remove();
    }
    
    const mainHeader = document.querySelector('.header');
    if (mainHeader) {
        mainHeader.style.display = 'block';
    }
    
    if (sectionId === 'charts') {
        updateChartContainerSize();
        if (chartInstance) {
            setTimeout(() => {
                chartInstance.resize();
            }, 100);
        }
    }
}

// ==================== MODAL FUNCTIONS ====================
function showModal(modalId, message) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.add('active');
    
    if (message) {
        const messageElements = modal.querySelectorAll('#confirmMessage, #slideshowMessage');
        messageElements.forEach(element => {
            if (element) {
                element.textContent = message;
            }
        });
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
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
        await db.open();
        
        const savedSettings = await getSettingsFromDB();
        if (savedSettings) {
            currentSettings = { ...currentSettings, ...savedSettings };
        }
        
        const savedUser = await getUserFromDB();
        if (savedUser) {
            currentUser = savedUser;
        }
        
        initializeDefaultPriorities();
        
        applyTheme();
        updateThemeIcon();
        updateUserDisplay();
        
        initDataEntry();
        
        addGlobalEventListeners();
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
        showNotification('خطا در راه‌اندازی برنامه', 'error');
    }
}

function addGlobalEventListeners() {
    // تصحیح: استفاده از passive listeners
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    }, { passive: true });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
            
            if (slideshowState.isFullscreen) {
                exitSlideshowFullscreen();
            }
            
            const fullscreenSection = document.querySelector('.section.fullscreen');
            if (fullscreenSection) {
                exitFullscreen(fullscreenSection.id);
            }
        }
    });
    
    // تصحیح: دیباونس Window resize
    let windowResizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(windowResizeTimeout);
        windowResizeTimeout = setTimeout(() => {
            if (chartInstance && typeof chartInstance.resize === 'function') {
                chartInstance.resize();
            }
            updateChartContainerSize();
        }, 250);
    }, { passive: true });
    
    // Handle navigation clicks
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const onclick = tab.getAttribute('onclick');
            if (onclick) {
                const sectionMatch = onclick.match(/showSection\('([^']+)'\)/);
                if (sectionMatch) {
                    showSection(sectionMatch[1]);
                }
            }
        });
    });
}

// ==================== START APPLICATION ====================
document.addEventListener('DOMContentLoaded', initApp);
