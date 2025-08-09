"use strict";

// ===== GLOBAL VARIABLES =====
let eventLoggingEnabled = true;
let eventBubblingEnabled = true;
let keySequence = [];

// Event counters
let clickCount = 0;
let dblClickCount = 0;
let mouseOverCount = 0;
let mouseMoveCount = 0;
let mouseEnterCount = 0;
let mouseLeaveCount = 0;
let keyDownCount = 0;
let keyPressCount = 0;
let keyUpCount = 0;

// ===== UTILITY FUNCTIONS =====

// Log events to the event log
function logEvent(message, category = 'system', includeTimestamp = true) {
    if (!eventLoggingEnabled) return;
    
    const eventLog = document.getElementById('eventLog');
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${category}`;
    
    let content = '';
    if (includeTimestamp && document.getElementById('showTimestamps').checked) {
        const timestamp = new Date().toLocaleTimeString();
        content += `<span class="timestamp">[${timestamp}]</span>`;
    }
    content += message;
    
    logEntry.innerHTML = content;
    eventLog.appendChild(logEntry);
    eventLog.scrollTop = eventLog.scrollHeight;
    
    // Limit log entries to prevent memory issues
    if (eventLog.children.length > 100) {
        eventLog.removeChild(eventLog.firstChild);
    }
}

// Format event information
function formatEventInfo(event) {
    return {
        type: event.type,
        target: event.target.tagName.toLowerCase() + (event.target.id ? `#${event.target.id}` : ''),
        clientX: event.clientX || 'N/A',
        clientY: event.clientY || 'N/A',
        key: event.key || 'N/A',
        keyCode: event.keyCode || 'N/A',
        ctrlKey: event.ctrlKey || false,
        altKey: event.altKey || false,
        shiftKey: event.shiftKey || false,
        metaKey: event.metaKey || false
    };
}

// ===== MOUSE EVENT HANDLERS =====

// onClick Event Handler
function handleClick(event) {
    clickCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('clickCount').textContent = clickCount;
    document.getElementById('clickResult').textContent = 
        `Click #${clickCount} - Target: ${info.target}, Position: (${info.clientX}, ${info.clientY}), Button: ${event.button}`;
    
    logEvent(`Mouse click on ${info.target} at (${info.clientX}, ${info.clientY})`, 'mouse');
}

// onDblClick Event Handler
function handleDoubleClick(event) {
    dblClickCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('dblClickCount').textContent = dblClickCount;
    document.getElementById('dblClickResult').textContent = 
        `Double-click #${dblClickCount} - Time: ${new Date().toLocaleTimeString()}, Target: ${info.target}`;
    
    logEvent(`Double-click #${dblClickCount} on ${info.target}`, 'mouse');
    
    // Add visual feedback
    event.target.style.transform = 'scale(1.05)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 200);
}

// onMouseOver Event Handler
function handleMouseOver(event) {
    mouseOverCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('mouseOverCount').textContent = mouseOverCount;
    document.getElementById('mouseOverResult').textContent = 
        `MouseOver #${mouseOverCount} - Target: ${info.target}, Related Target: ${event.relatedTarget ? event.relatedTarget.tagName : 'None'}`;
    
    logEvent(`Mouse over ${info.target} (related: ${event.relatedTarget ? event.relatedTarget.tagName : 'None'})`, 'mouse');
}

// onMouseMove Event Handler
function handleMouseMove(event) {
    mouseMoveCount++;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    
    document.getElementById('mouseX').textContent = x;
    document.getElementById('mouseY').textContent = y;
    document.getElementById('mouseMoveCount').textContent = mouseMoveCount;
    document.getElementById('mouseMoveResult').textContent = 
        `MouseMove #${mouseMoveCount} - Relative Position: (${x}, ${y}), Global: (${event.clientX}, ${event.clientY})`;
    
    // Create mouse trail effect
    createMouseTrail(x, y, event.currentTarget);
    
    // Log every 50th movement to avoid spam
    if (mouseMoveCount % 50 === 0) {
        logEvent(`Mouse moved 50 times, current position: (${x}, ${y})`, 'mouse');
    }
}

// Create mouse trail effect
function createMouseTrail(x, y, container) {
    const trail = document.createElement('div');
    trail.style.position = 'absolute';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '6px';
    trail.style.height = '6px';
    trail.style.background = '#fff';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.opacity = '0.8';
    trail.style.transition = 'opacity 2s ease-out';
    trail.style.zIndex = '1';
    
    container.appendChild(trail);
    
    // Fade out and remove
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 2000);
    }, 100);
}

// onMouseEnter Event Handler
function handleMouseEnter(event) {
    mouseEnterCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('mouseEnterCount').textContent = mouseEnterCount;
    document.getElementById('enterLeaveResult').textContent = 
        `MouseEnter #${mouseEnterCount} - Target: ${info.target} at ${new Date().toLocaleTimeString()}`;
    
    logEvent(`Mouse entered ${info.target}`, 'mouse');
    
    // Add visual feedback
    event.target.style.background = 'linear-gradient(135deg, #00a8ff, #0078ff)';
}

// onMouseLeave Event Handler
function handleMouseLeave(event) {
    mouseLeaveCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('mouseLeaveCount').textContent = mouseLeaveCount;
    document.getElementById('enterLeaveResult').textContent = 
        `MouseLeave #${mouseLeaveCount} - Target: ${info.target} at ${new Date().toLocaleTimeString()}`;
    
    logEvent(`Mouse left ${info.target}`, 'mouse');
    
    // Reset visual feedback
    event.target.style.background = 'linear-gradient(135deg, #0abde3, #006ba6)';
}

// ===== KEYBOARD EVENT HANDLERS =====

// onKeyDown Event Handler
function handleKeyDown(event) {
    keyDownCount++;
    const info = formatEventInfo(event);
    
    document.getElementById('keyDownKey').textContent = info.key;
    document.getElementById('keyDownCode').textContent = event.code;
    document.getElementById('keyDownKeyCode').textContent = info.keyCode;
    document.getElementById('keyDownCount').textContent = keyDownCount;
    document.getElementById('keyDownResult').textContent = 
        `KeyDown #${keyDownCount} - Key: "${info.key}", Code: "${event.code}", KeyCode: ${info.keyCode}`;
    
    logEvent(`Key down: "${info.key}" (${event.code}) - KeyCode: ${info.keyCode}`, 'keyboard');
}

// onKeyPress Event Handler (Deprecated)
function handleKeyPress(event) {
    keyPressCount++;
    const char = String.fromCharCode(event.charCode);
    
    document.getElementById('keyPressChar').textContent = char;
    document.getElementById('keyPressCharCode').textContent = event.charCode;
    document.getElementById('keyPressCount').textContent = keyPressCount;
    document.getElementById('keyPressResult').textContent = 
        `KeyPress #${keyPressCount} - Character: "${char}", CharCode: ${event.charCode}`;
    
    logEvent(`Key press: "${char}" (CharCode: ${event.charCode})`, 'keyboard');
}

// onKeyUp Event Handler
function handleKeyUp(event) {
    keyUpCount++;
    const info = formatEventInfo(event);
    const releaseTime = new Date().toLocaleTimeString();
    
    document.getElementById('keyUpKey').textContent = info.key;
    document.getElementById('keyUpTime').textContent = releaseTime;
    document.getElementById('keyUpCount').textContent = keyUpCount;
    document.getElementById('keyUpResult').textContent = 
        `KeyUp #${keyUpCount} - Key: "${info.key}" released at ${releaseTime}`;
    
    logEvent(`Key up: "${info.key}" at ${releaseTime}`, 'keyboard');
}

// ===== COMBINED KEYBOARD EVENT HANDLERS =====

// Combined KeyDown Handler
function handleCombinedKeyDown(event) {
    updateModifierKeys(event);
    addToKeySequence('DOWN', event);
    
    const info = formatEventInfo(event);
    document.getElementById('combinedKeyResult').textContent = 
        `KeyDown: "${info.key}" | Modifiers: ${getModifierString(event)}`;
    
    logEvent(`Combined KeyDown: "${info.key}" with modifiers: ${getModifierString(event)}`, 'keyboard');
}

// Combined KeyPress Handler
function handleCombinedKeyPress(event) {
    addToKeySequence('PRESS', event);
    
    const char = String.fromCharCode(event.charCode);
    logEvent(`Combined KeyPress: "${char}"`, 'keyboard');
}

// Combined KeyUp Handler
function handleCombinedKeyUp(event) {
    updateModifierKeys(event);
    addToKeySequence('UP', event);
    
    const info = formatEventInfo(event);
    logEvent(`Combined KeyUp: "${info.key}"`, 'keyboard');
}

// Update modifier key display
function updateModifierKeys(event) {
    document.getElementById('ctrlModifier').classList.toggle('active', event.ctrlKey);
    document.getElementById('altModifier').classList.toggle('active', event.altKey);
    document.getElementById('shiftModifier').classList.toggle('active', event.shiftKey);
    document.getElementById('metaModifier').classList.toggle('active', event.metaKey);
}

// Get modifier string
function getModifierString(event) {
    const modifiers = [];
    if (event.ctrlKey) modifiers.push('Ctrl');
    if (event.altKey) modifiers.push('Alt');
    if (event.shiftKey) modifiers.push('Shift');
    if (event.metaKey) modifiers.push('Meta');
    return modifiers.length > 0 ? modifiers.join(' + ') : 'None';
}

// Add to key sequence
function addToKeySequence(type, event) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = `[${timestamp}] ${type}: "${event.key}" (${event.code})`;
    keySequence.push(entry);
    
    // Keep only last 20 entries
    if (keySequence.length > 20) {
        keySequence.shift();
    }
    
    document.getElementById('keySequence').textContent = keySequence.join('\n');
}

// Clear key sequence
function clearKeySequence() {
    keySequence = [];
    document.getElementById('keySequence').textContent = 'Key sequence will appear here...';
    logEvent('Key sequence cleared', 'system');
}

// ===== KEYBOARD SHORTCUTS HANDLER =====

function handleKeyboardShortcuts(event) {
    const shortcut = getShortcutString(event);
    let message = '';
    let preventDefault = false;
    
    if (event.ctrlKey && event.key === 's') {
        message = '💾 Save action triggered!';
        preventDefault = true;
    } else if (event.ctrlKey && event.key === 'z' && !event.shiftKey) {
        message = '↶ Undo action triggered!';
        preventDefault = true;
    } else if (event.ctrlKey && event.shiftKey && event.key === 'Z') {
        message = '↷ Redo action triggered!';
        preventDefault = true;
    } else if (event.altKey && event.key === 'Enter') {
        message = '⛶ Full screen action triggered!';
        preventDefault = true;
    }
    
    if (message) {
        document.getElementById('shortcutResult').textContent = `${shortcut}: ${message}`;
        logEvent(`Keyboard shortcut: ${shortcut} - ${message}`, 'keyboard');
        
        if (preventDefault) {
            event.preventDefault();
        }
    } else {
        document.getElementById('shortcutResult').textContent = `Pressed: ${shortcut}`;
    }
}

// Get shortcut string
function getShortcutString(event) {
    const keys = [];
    if (event.ctrlKey) keys.push('Ctrl');
    if (event.altKey) keys.push('Alt');
    if (event.shiftKey) keys.push('Shift');
    if (event.metaKey) keys.push('Meta');
    keys.push(event.key);
    return keys.join(' + ');
}

// ===== EVENT BUBBLING HANDLERS =====

function handleBubbling(event, level) {
    const info = formatEventInfo(event);
    const bubblingResult = document.getElementById('bubblingResult');
    const message = `Clicked on ${level} box - Target: ${info.target}`;
    
    bubblingResult.innerHTML += `<div>${message}</div>`;
    logEvent(`Event bubbling: ${message} (bubbling: ${eventBubblingEnabled})`, 'interaction');
    
    if (!eventBubblingEnabled) {
        event.stopPropagation();
    }
}

function toggleEventBubbling() {
    eventBubblingEnabled = !eventBubblingEnabled;
    const button = document.getElementById('toggleBubbling');
    button.textContent = eventBubblingEnabled ? 'Disable Event Bubbling' : 'Enable Event Bubbling';
    
    document.getElementById('bubblingResult').innerHTML = 
        `<strong>Event bubbling is now ${eventBubblingEnabled ? 'ENABLED' : 'DISABLED'}</strong><br>`;
    
    logEvent(`Event bubbling ${eventBubblingEnabled ? 'enabled' : 'disabled'}`, 'system');
}

// ===== EVENT LOG CONTROLS =====

function clearEventLog() {
    document.getElementById('eventLog').innerHTML = '';
    logEvent('Event log cleared', 'system');
}

function toggleEventLogging() {
    eventLoggingEnabled = !eventLoggingEnabled;
    const button = document.getElementById('pauseLog');
    button.textContent = eventLoggingEnabled ? 'Pause Logging' : 'Resume Logging';
    
    if (eventLoggingEnabled) {
        logEvent('Event logging resumed', 'system');
    }
}

function toggleTimestamps() {
    const showTimestamps = document.getElementById('showTimestamps').checked;
    logEvent(`Timestamps ${showTimestamps ? 'enabled' : 'disabled'}`, 'system');
}

// ===== ADDITIONAL EVENT HANDLERS FOR BODY/WINDOW =====

// Global keydown handler for document-level shortcuts
document.addEventListener('keydown', function(event) {
    // Handle global shortcuts
    if (event.ctrlKey && event.shiftKey && event.key === 'L') {
        event.preventDefault();
        clearEventLog();
    } else if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        toggleEventLogging();
    }
});

// Page visibility change handler
document.addEventListener('visibilitychange', function() {
    const state = document.hidden ? 'hidden' : 'visible';
    logEvent(`Page visibility changed to: ${state}`, 'system');
});

// Window focus/blur handlers
window.addEventListener('focus', function() {
    logEvent('Window gained focus', 'system');
});

window.addEventListener('blur', function() {
    logEvent('Window lost focus', 'system');
});

// Window resize handler
window.addEventListener('resize', function() {
    logEvent(`Window resized to ${window.innerWidth}x${window.innerHeight}`, 'system');
});

// ===== INITIALIZATION =====

// Initialize the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Welcome message
    logEvent('🎉 Mouse & Keyboard Events Demo Initialized!', 'system');
    logEvent('Try interacting with the elements above to see events in action.', 'system');
    logEvent('Use Ctrl+Shift+L to clear log, Ctrl+Shift+P to pause/resume logging.', 'system');
    
    // Set initial states
    document.getElementById('toggleBubbling').textContent = 'Disable Event Bubbling';
    document.getElementById('pauseLog').textContent = 'Pause Logging';
    
    // Add some initial styling to interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-area, .hover-container, .tracking-area, .enter-leave-container');
    interactiveElements.forEach(element => {
        element.setAttribute('tabindex', '0'); // Make focusable
    });
    
    console.log('🎯 Mouse & Keyboard Events Demo Ready!');
    console.log('📋 Check the event log below for real-time event information.');
});

// Error handling
window.addEventListener('error', function(event) {
    logEvent(`JavaScript Error: ${event.message} in ${event.filename}:${event.lineno}`, 'system');
});

// Prevent context menu on right-click for demonstration purposes
document.addEventListener('contextmenu', function(event) {
    if (event.target.closest('.tracking-area') || event.target.closest('.bubbling-container')) {
        event.preventDefault();
        logEvent('Context menu prevented for demo area', 'mouse');
    }
});

// ===== PERFORMANCE MONITORING =====

// Track performance for mouse move events
let lastMouseMoveTime = 0;
const originalHandleMouseMove = handleMouseMove;

handleMouseMove = function(event) {
    const now = performance.now();
    if (now - lastMouseMoveTime > 16) { // ~60fps throttling
        originalHandleMouseMove(event);
        lastMouseMoveTime = now;
    }
};

// ===== UTILITY FUNCTIONS FOR TESTING =====

// Function to simulate events (for testing purposes)
function simulateEvent(elementId, eventType, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
        return;
    }
    
    const event = new Event(eventType, { bubbles: true, cancelable: true, ...options });
    
    // Add common properties
    if (options.clientX !== undefined) event.clientX = options.clientX;
    if (options.clientY !== undefined) event.clientY = options.clientY;
    if (options.key !== undefined) event.key = options.key;
    if (options.keyCode !== undefined) event.keyCode = options.keyCode;
    
    element.dispatchEvent(event);
    logEvent(`Simulated ${eventType} on ${elementId}`, 'system');
}

// Export for console access
window.simulateEvent = simulateEvent;

// Add some CSS custom properties for dynamic styling
document.documentElement.style.setProperty('--primary-color', '#667eea');
document.documentElement.style.setProperty('--secondary-color', '#764ba2');

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Add keyboard navigation support for interactive areas
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('interactive-area')) {
            event.preventDefault();
            // Simulate click
            activeElement.click();
        }
    }
});

// Add ARIA labels dynamically
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.demo-button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    const inputs = document.querySelectorAll('.demo-input, .demo-textarea');
    inputs.forEach(input => {
        if (!input.getAttribute('aria-describedby')) {
            const nextSibling = input.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('result-display')) {
                nextSibling.id = nextSibling.id || `result-${Math.random().toString(36).substr(2, 9)}`;
                input.setAttribute('aria-describedby', nextSibling.id);
            }
        }
    });
});

console.log('✅ Mouse & Keyboard Events Demo loaded successfully!');
