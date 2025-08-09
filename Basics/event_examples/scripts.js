"use strict";

// Global variables
let eventLogEnabled = true;
let unloadWarningEnabled = false;

// Event logging function
function logEvent(message, category = '') {
    if (!eventLogEnabled) return;
    
    const eventLog = document.getElementById('eventLog');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${category}`;
    logEntry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${message}`;
    
    eventLog.appendChild(logEntry);
    eventLog.scrollTop = eventLog.scrollHeight;
    
    // Limit log entries to prevent memory issues
    if (eventLog.children.length > 100) {
        eventLog.removeChild(eventLog.firstChild);
    }
}

// ========== MOUSE EVENTS ==========

// Mouse click events
document.getElementById('clickBtn').addEventListener('click', function(e) {
    const result = document.getElementById('clickResult');
    result.innerHTML = `Single clicked! Button: ${e.button}, Coordinates: (${e.clientX}, ${e.clientY})`;
    logEvent(`Mouse clicked at (${e.clientX}, ${e.clientY})`, 'mouse');
});

document.getElementById('dblClickBtn').addEventListener('dblclick', function(e) {
    const result = document.getElementById('clickResult');
    result.innerHTML = `Double clicked! Time: ${Date.now()}`;
    logEvent('Mouse double-clicked', 'mouse');
});

// Mouse movement events
const mouseArea = document.getElementById('mouseArea');
const mouseCoords = document.getElementById('mouseCoords');

mouseArea.addEventListener('mousemove', function(e) {
    const rect = mouseArea.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    mouseCoords.textContent = `X: ${x}px, Y: ${y}px`;
});

mouseArea.addEventListener('mouseenter', function() {
    mouseCoords.textContent = 'Mouse entered!';
    logEvent('Mouse entered area', 'mouse');
});

mouseArea.addEventListener('mouseleave', function() {
    mouseCoords.textContent = 'Mouse left!';
    logEvent('Mouse left area', 'mouse');
});

// Mouse button events
const mouseButtonArea = document.getElementById('mouseButtonArea');
const mouseButtonResult = document.getElementById('mouseButtonResult');

mouseButtonArea.addEventListener('mousedown', function(e) {
    const buttonNames = ['Left', 'Middle', 'Right'];
    mouseButtonResult.innerHTML = `Mouse ${buttonNames[e.button]} button pressed down`;
    logEvent(`Mouse ${buttonNames[e.button]} button down`, 'mouse');
});

mouseButtonArea.addEventListener('mouseup', function(e) {
    const buttonNames = ['Left', 'Middle', 'Right'];
    mouseButtonResult.innerHTML = `Mouse ${buttonNames[e.button]} button released`;
    logEvent(`Mouse ${buttonNames[e.button]} button up`, 'mouse');
});

mouseButtonArea.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    mouseButtonResult.innerHTML = 'Right-click context menu prevented!';
    logEvent('Right-click context menu prevented', 'mouse');
});

// ========== KEYBOARD EVENTS ==========

// Basic keyboard events
const keyInput = document.getElementById('keyInput');
const keyResult = document.getElementById('keyResult');

keyInput.addEventListener('keydown', function(e) {
    keyResult.innerHTML = `Key Down: "${e.key}" (Code: ${e.keyCode})`;
    logEvent(`Key down: ${e.key} (${e.keyCode})`, 'keyboard');
});

keyInput.addEventListener('keyup', function(e) {
    keyResult.innerHTML = `Key Up: "${e.key}" (Code: ${e.keyCode})`;
    logEvent(`Key up: ${e.key} (${e.keyCode})`, 'keyboard');
});

keyInput.addEventListener('keypress', function(e) {
    keyResult.innerHTML = `Key Press: "${e.key}" (Char: ${String.fromCharCode(e.keyCode)})`;
});

// Special key combinations
const specialKeyInput = document.getElementById('specialKeyInput');
const specialKeyResult = document.getElementById('specialKeyResult');

specialKeyInput.addEventListener('keydown', function(e) {
    let combination = [];
    
    if (e.ctrlKey) combination.push('Ctrl');
    if (e.altKey) combination.push('Alt');
    if (e.shiftKey) combination.push('Shift');
    if (e.metaKey) combination.push('Meta');
    
    combination.push(e.key);
    
    const combo = combination.join(' + ');
    specialKeyResult.innerHTML = `Combination: ${combo}`;
    
    // Prevent default for common shortcuts
    if ((e.ctrlKey && e.key === 's') || (e.altKey && e.key === 'a')) {
        e.preventDefault();
        specialKeyResult.innerHTML += ' (Default action prevented)';
    }
    
    logEvent(`Key combination: ${combo}`, 'keyboard');
});

// Key code detection
const keyCodeInput = document.getElementById('keyCodeInput');
const keyCodeResult = document.getElementById('keyCodeResult');

keyCodeInput.addEventListener('keydown', function(e) {
    keyCodeResult.innerHTML = `
        Key: "${e.key}" | 
        KeyCode: ${e.keyCode} | 
        Which: ${e.which} | 
        Code: "${e.code}" | 
        Location: ${e.location}
    `;
});

// ========== FRAME/WINDOW EVENTS ==========

// Window load event
window.addEventListener('load', function() {
    console.log('Window loaded completely');
    updateWindowInfo();
    logEvent('Window loaded completely', 'frame');
});

// DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    logEvent('DOM content loaded', 'frame');
});

// Window resize event
window.addEventListener('resize', function() {
    updateWindowInfo();
    logEvent(`Window resized to ${window.innerWidth}x${window.innerHeight}`, 'frame');
});

// Scroll event
window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    logEvent(`Page scrolled to ${scrollPercent}%`, 'frame');
}, { passive: true });

// Update window information
function updateWindowInfo() {
    const windowInfo = document.getElementById('windowInfo');
    windowInfo.innerHTML = `
        <div class="window-stat">Width: ${window.innerWidth}px</div>
        <div class="window-stat">Height: ${window.innerHeight}px</div>
        <div class="window-stat">Screen: ${screen.width}x${screen.height}</div>
        <div class="window-stat">Available: ${screen.availWidth}x${screen.availHeight}</div>
        <div class="window-stat">Color Depth: ${screen.colorDepth} bits</div>
        <div class="window-stat">Pixel Ratio: ${window.devicePixelRatio}</div>
    `;
}

// Scroll to bottom button
document.getElementById('scrollBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    logEvent('Smooth scroll to bottom initiated', 'frame');
});

// Page visibility API
document.addEventListener('visibilitychange', function() {
    const visibilityResult = document.getElementById('visibilityResult');
    const state = document.hidden ? 'hidden' : 'visible';
    visibilityResult.innerHTML = `Page visibility changed to: ${state} at ${new Date().toLocaleTimeString()}`;
    logEvent(`Page visibility: ${state}`, 'frame');
});

// Window focus/blur events
window.addEventListener('focus', function() {
    const visibilityResult = document.getElementById('visibilityResult');
    visibilityResult.innerHTML += '<br>Window gained focus';
    logEvent('Window gained focus', 'frame');
});

window.addEventListener('blur', function() {
    const visibilityResult = document.getElementById('visibilityResult');
    visibilityResult.innerHTML += '<br>Window lost focus';
    logEvent('Window lost focus', 'frame');
});

// Before unload warning
document.getElementById('enableUnloadWarning').addEventListener('click', function() {
    unloadWarningEnabled = true;
    document.getElementById('unloadResult').innerHTML = 'Page exit warning enabled. Try to close/refresh the page.';
    logEvent('Unload warning enabled', 'frame');
});

document.getElementById('disableUnloadWarning').addEventListener('click', function() {
    unloadWarningEnabled = false;
    document.getElementById('unloadResult').innerHTML = 'Page exit warning disabled.';
    logEvent('Unload warning disabled', 'frame');
});

window.addEventListener('beforeunload', function(e) {
    if (unloadWarningEnabled) {
        const message = 'Are you sure you want to leave? You have unsaved changes!';
        e.preventDefault();
        e.returnValue = message;
        return message;
    }
});

// ========== MEDIA EVENTS ==========

// Video events
const video = document.getElementById('demoVideo');
const videoResult = document.getElementById('videoResult');

// Video event listeners
const videoEvents = [
    'loadstart', 'loadeddata', 'loadedmetadata', 'canplay', 'canplaythrough',
    'play', 'pause', 'ended', 'timeupdate', 'volumechange', 'seeking', 'seeked',
    'waiting', 'stalled', 'suspend', 'abort', 'error', 'emptied', 'ratechange'
];

videoEvents.forEach(eventName => {
    video.addEventListener(eventName, function(e) {
        const currentTime = video.currentTime ? video.currentTime.toFixed(2) : 0;
        const duration = video.duration ? video.duration.toFixed(2) : 0;
        videoResult.innerHTML = `Video Event: ${eventName} | Time: ${currentTime}s / ${duration}s | Volume: ${video.volume}`;
        logEvent(`Video ${eventName} at ${currentTime}s`, 'media');
    });
});

// Video controls
document.getElementById('playBtn').addEventListener('click', function() {
    video.play().catch(e => {
        videoResult.innerHTML = `Play failed: ${e.message}`;
        logEvent(`Video play failed: ${e.message}`, 'media');
    });
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    video.pause();
});

document.getElementById('muteBtn').addEventListener('click', function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? 'Unmute' : 'Mute';
    logEvent(`Video ${video.muted ? 'muted' : 'unmuted'}`, 'media');
});

// Volume slider
document.getElementById('volumeSlider').addEventListener('input', function() {
    video.volume = this.value;
    logEvent(`Video volume set to ${Math.round(this.value * 100)}%`, 'media');
});

// Audio events
const audio = document.getElementById('demoAudio');
const audioResult = document.getElementById('audioResult');
const audioProgress = document.getElementById('audioProgressFill');
const audioTime = document.getElementById('audioTime');

// Audio event listeners
const audioEvents = [
    'loadstart', 'loadeddata', 'loadedmetadata', 'canplay', 'canplaythrough',
    'play', 'pause', 'ended', 'timeupdate', 'volumechange', 'error'
];

audioEvents.forEach(eventName => {
    audio.addEventListener(eventName, function(e) {
        const currentTime = audio.currentTime ? audio.currentTime.toFixed(2) : 0;
        const duration = audio.duration ? audio.duration.toFixed(2) : 0;
        audioResult.innerHTML = `Audio Event: ${eventName} | Current Time: ${currentTime}s`;
        logEvent(`Audio ${eventName} at ${currentTime}s`, 'media');
        
        // Update progress bar and time display
        if (eventName === 'timeupdate' && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            audioProgress.style.width = progress + '%';
            
            const formatTime = (time) => {
                const minutes = Math.floor(time / 60);
                const seconds = Math.floor(time % 60);
                return `${minutes}:${seconds.toString().padStart(2, '0')}`;
            };
            
            audioTime.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }
    });
});

// Image load events
const demoImage = document.getElementById('demoImage');
const imageLoader = document.getElementById('imageLoader');
const imageResult = document.getElementById('imageResult');

// Image event listeners
demoImage.addEventListener('load', function() {
    imageResult.innerHTML = `Image loaded successfully! Dimensions: ${this.naturalWidth}x${this.naturalHeight}`;
    imageLoader.style.display = 'none';
    this.style.display = 'block';
    logEvent(`Image loaded: ${this.naturalWidth}x${this.naturalHeight}`, 'media');
});

demoImage.addEventListener('error', function() {
    imageResult.innerHTML = 'Image failed to load!';
    imageLoader.style.display = 'none';
    this.style.display = 'none';
    logEvent('Image load failed', 'media');
});

demoImage.addEventListener('loadstart', function() {
    imageResult.innerHTML = 'Image loading started...';
    imageLoader.style.display = 'flex';
    this.style.display = 'none';
    logEvent('Image load started', 'media');
});

// Load random image button
document.getElementById('loadImageBtn').addEventListener('click', function() {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    demoImage.src = `https://picsum.photos/400/300?random=${randomId}`;
});

// Load broken image button
document.getElementById('loadBrokenImageBtn').addEventListener('click', function() {
    demoImage.src = 'https://nonexistent-url.com/broken-image.jpg';
});

// ========== EVENT LOG CONTROLS ==========

// Clear log button
document.getElementById('clearLogBtn').addEventListener('click', function() {
    document.getElementById('eventLog').innerHTML = '';
    logEvent('Event log cleared', 'frame');
});

// Toggle log button
document.getElementById('toggleLogBtn').addEventListener('click', function() {
    eventLogEnabled = !eventLogEnabled;
    this.textContent = eventLogEnabled ? 'Pause Logging' : 'Resume Logging';
    const status = eventLogEnabled ? 'resumed' : 'paused';
    
    // This will only log if logging is enabled
    if (eventLogEnabled) {
        logEvent(`Event logging ${status}`, 'frame');
    }
});

// ========== ADDITIONAL EVENTS ==========

// Form events
document.addEventListener('submit', function(e) {
    logEvent('Form submission attempted', 'frame');
});

// Storage events
window.addEventListener('storage', function(e) {
    logEvent(`Storage changed: ${e.key} = ${e.newValue}`, 'frame');
});

// Online/offline events
window.addEventListener('online', function() {
    logEvent('Browser came online', 'frame');
});

window.addEventListener('offline', function() {
    logEvent('Browser went offline', 'frame');
});

// Orientation change (for mobile devices)
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        logEvent(`Orientation changed to ${window.orientation}°`, 'frame');
        updateWindowInfo();
    }, 100);
});

// Hash change event
window.addEventListener('hashchange', function(e) {
    logEvent(`Hash changed from ${e.oldURL} to ${e.newURL}`, 'frame');
});

// Page show/hide events
window.addEventListener('pageshow', function(e) {
    logEvent(`Page shown (persisted: ${e.persisted})`, 'frame');
});

window.addEventListener('pagehide', function(e) {
    logEvent(`Page hidden (persisted: ${e.persisted})`, 'frame');
});

// Initialize the demo
document.addEventListener('DOMContentLoaded', function() {
    // Initial window info update
    updateWindowInfo();
    
    // Welcome message in event log
    logEvent('Event examples demo initialized', 'frame');
    logEvent('Try interacting with the elements above to see events in action!', 'frame');
    
    // Set initial video volume
    if (video) {
        video.volume = 0.5;
    }
    
    console.log('JavaScript Event Examples Demo Ready!');
});
