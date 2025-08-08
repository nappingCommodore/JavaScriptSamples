// Form Submission Examples in JavaScript

// Utility function to display results
function displayResult(elementId, message, isError = false) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = message;
    resultElement.className = isError ? 'result error' : 'result success';
    resultElement.style.display = 'block';
}

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to validate phone number
function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Example 1: Basic Form Submission with Validation
document.addEventListener('DOMContentLoaded', function() {
    const basicForm = document.getElementById('basicForm');
    
    if (basicForm) {
        basicForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Clear previous errors
            document.querySelectorAll('.error').forEach(error => error.textContent = '');
            
            // Get form data
            const formData = new FormData(basicForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            
            let isValid = true;
            
            // Validate name
            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
                isValid = false;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate phone (if provided)
            if (phone && !isValidPhone(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const submittedData = {
                    name: name,
                    email: email,
                    phone: phone || 'Not provided',
                    timestamp: new Date().toLocaleString()
                };
                
                displayResult('basicResult', 
                    `Form submitted successfully!\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nSubmitted at: ${submittedData.timestamp}`);
                
                // Reset form
                basicForm.reset();
            } else {
                displayResult('basicResult', 'Please fix the errors above before submitting.', true);
            }
        });
    }
});

// Example 2: Advanced Form with Multiple Input Types
document.addEventListener('DOMContentLoaded', function() {
    const advancedForm = document.getElementById('advancedForm');
    
    if (advancedForm) {
        advancedForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(advancedForm);
            
            // Get all form values
            const data = {
                username: formData.get('username'),
                password: formData.get('password'),
                age: formData.get('age'),
                birthdate: formData.get('birthdate'),
                gender: formData.get('gender'),
                interests: formData.getAll('interests'),
                newsletter: formData.get('newsletter'),
                comments: formData.get('comments'),
                terms: formData.get('terms')
            };
            
            // Validate required fields
            if (!data.username || data.username.length < 3) {
                displayResult('advancedResult', 'Username must be at least 3 characters long', true);
                return;
            }
            
            if (!data.password || data.password.length < 6) {
                displayResult('advancedResult', 'Password must be at least 6 characters long', true);
                return;
            }
            
            if (!data.terms) {
                displayResult('advancedResult', 'You must agree to the terms and conditions', true);
                return;
            }
            
            // Display submitted data
            let resultMessage = 'Advanced form submitted successfully!\n';
            resultMessage += `Username: ${data.username}\n`;
            resultMessage += `Age: ${data.age || 'Not provided'}\n`;
            resultMessage += `Birth Date: ${data.birthdate || 'Not provided'}\n`;
            resultMessage += `Gender: ${data.gender || 'Not selected'}\n`;
            resultMessage += `Interests: ${data.interests.length > 0 ? data.interests.join(', ') : 'None selected'}\n`;
            resultMessage += `Newsletter: ${data.newsletter || 'Not selected'}\n`;
            resultMessage += `Comments: ${data.comments || 'None provided'}`;
            
            displayResult('advancedResult', resultMessage);
            
            // Don't reset form to show submitted data
            console.log('Advanced Form Data:', data);
        });
        
        // Reset button functionality
        const resetButton = advancedForm.querySelector('button[type="reset"]');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                document.getElementById('advancedResult').style.display = 'none';
            });
        }
    }
});

// Example 3: AJAX Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const ajaxForm = document.getElementById('ajaxForm');
    
    if (ajaxForm) {
        ajaxForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const loadingIndicator = document.getElementById('loadingIndicator');
            const resultDiv = document.getElementById('ajaxResult');
            
            // Show loading indicator
            loadingIndicator.classList.remove('hidden');
            resultDiv.style.display = 'none';
            
            const formData = new FormData(ajaxForm);
            
            // Convert FormData to regular object
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };
            
            // Simulate AJAX request
            setTimeout(() => {
                // Hide loading indicator
                loadingIndicator.classList.add('hidden');
                
                // Simulate server response
                const response = {
                    success: Math.random() > 0.3, // 70% success rate for demo
                    data: data,
                    id: Math.floor(Math.random() * 1000),
                    timestamp: new Date().toISOString()
                };
                
                if (response.success) {
                    displayResult('ajaxResult', 
                        `AJAX submission successful!\nID: ${response.id}\nName: ${response.data.name}\nEmail: ${response.data.email}\nMessage: ${response.data.message}\nTime: ${new Date(response.timestamp).toLocaleString()}`);
                    ajaxForm.reset();
                } else {
                    displayResult('ajaxResult', 'Server error occurred. Please try again.', true);
                }
                
                console.log('AJAX Response:', response);
            }, 2000); // 2 second delay to simulate network request
        });
    }
});

// Example 4: File Upload Form
document.addEventListener('DOMContentLoaded', function() {
    const fileForm = document.getElementById('fileForm');
    
    if (fileForm) {
        fileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const fileInput = document.getElementById('fileInput');
            const progressDiv = document.getElementById('fileProgress');
            const progressBar = progressDiv.querySelector('.progress-bar');
            
            if (!fileInput.files.length) {
                displayResult('fileResult', 'Please select a file to upload', true);
                return;
            }
            
            const file = fileInput.files[0];
            const formData = new FormData(fileForm);
            
            // Show progress bar
            progressDiv.classList.remove('hidden');
            progressBar.style.width = '0%';
            
            // Simulate file upload progress
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(progressInterval);
                    
                    // Hide progress bar
                    setTimeout(() => {
                        progressDiv.classList.add('hidden');
                        
                        // Display success message
                        displayResult('fileResult', 
                            `File uploaded successfully!\nFile Name: ${formData.get('fileName') || file.name}\nFile Size: ${(file.size / 1024).toFixed(2)} KB\nFile Type: ${file.type || 'Unknown'}\nDescription: ${formData.get('description') || 'None provided'}`);
                        
                        fileForm.reset();
                    }, 500);
                }
                progressBar.style.width = progress + '%';
            }, 200);
        });
        
        // File input change handler
        const fileInput = document.getElementById('fileInput');
        fileInput.addEventListener('change', function() {
            const fileNameInput = document.getElementById('fileName');
            if (this.files.length && !fileNameInput.value) {
                fileNameInput.value = this.files[0].name.split('.')[0];
            }
        });
    }
});

// Example 5: Dynamic Form (Add/Remove Fields)
document.addEventListener('DOMContentLoaded', function() {
    const dynamicForm = document.getElementById('dynamicForm');
    const addMemberBtn = document.getElementById('addMember');
    const teamMembersDiv = document.getElementById('teamMembers');
    
    if (dynamicForm && addMemberBtn && teamMembersDiv) {
        // Add team member field
        addMemberBtn.addEventListener('click', function() {
            const newField = document.createElement('div');
            newField.className = 'dynamic-field';
            newField.innerHTML = `
                <input type="text" name="teamMember" placeholder="Member name" required>
                <button type="button" class="remove-field">Remove</button>
            `;
            teamMembersDiv.appendChild(newField);
        });
        
        // Remove team member field (using event delegation)
        teamMembersDiv.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-field')) {
                const fields = teamMembersDiv.querySelectorAll('.dynamic-field');
                if (fields.length > 1) {
                    event.target.parentElement.remove();
                } else {
                    displayResult('dynamicResult', 'At least one team member is required', true);
                }
            }
        });
        
        // Form submission
        dynamicForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(dynamicForm);
            const projectName = formData.get('projectName');
            const teamMembers = formData.getAll('teamMember').filter(member => member.trim());
            
            if (teamMembers.length === 0) {
                displayResult('dynamicResult', 'Please add at least one team member', true);
                return;
            }
            
            const projectData = {
                projectName: projectName,
                teamMembers: teamMembers,
                memberCount: teamMembers.length,
                createdAt: new Date().toLocaleString()
            };
            
            let resultMessage = 'Project created successfully!\n';
            resultMessage += `Project Name: ${projectData.projectName}\n`;
            resultMessage += `Team Members (${projectData.memberCount}):\n`;
            projectData.teamMembers.forEach((member, index) => {
                resultMessage += `  ${index + 1}. ${member}\n`;
            });
            resultMessage += `Created at: ${projectData.createdAt}`;
            
            displayResult('dynamicResult', resultMessage);
            
            console.log('Dynamic Form Data:', projectData);
        });
    }
});

// Additional utility functions for form handling

// Function to serialize form data to JSON
function formToJSON(form) {
    const formData = new FormData(form);
    const json = {};
    
    for (let [key, value] of formData.entries()) {
        if (json[key]) {
            if (Array.isArray(json[key])) {
                json[key].push(value);
            } else {
                json[key] = [json[key], value];
            }
        } else {
            json[key] = value;
        }
    }
    
    return json;
}

// Function to populate form from JSON data
function JSONToForm(form, data) {
    for (let key in data) {
        const element = form.querySelector(`[name="${key}"]`);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = data[key];
            } else if (element.type === 'radio') {
                const radioButton = form.querySelector(`[name="${key}"][value="${data[key]}"]`);
                if (radioButton) radioButton.checked = true;
            } else {
                element.value = data[key];
            }
        }
    }
}

// Function to validate form using HTML5 validation API
function validateForm(form) {
    const elements = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    elements.forEach(element => {
        if (!element.checkValidity()) {
            isValid = false;
            element.classList.add('invalid');
            
            // Show custom validation message
            const errorSpan = document.getElementById(element.name + 'Error');
            if (errorSpan) {
                errorSpan.textContent = element.validationMessage;
            }
        } else {
            element.classList.remove('invalid');
        }
    });
    
    return isValid;
}

// Real-time validation example
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim()) {
                    if (this.checkValidity()) {
                        this.classList.remove('invalid');
                        this.classList.add('valid');
                    } else {
                        this.classList.remove('valid');
                        this.classList.add('invalid');
                    }
                }
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('invalid') || this.classList.contains('valid')) {
                    if (this.checkValidity()) {
                        this.classList.remove('invalid');
                        this.classList.add('valid');
                    } else {
                        this.classList.remove('valid');
                        this.classList.add('invalid');
                    }
                }
            });
        });
    });
});

console.log('Form submission scripts loaded successfully!');
