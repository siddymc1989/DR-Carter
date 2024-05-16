// Test 1: Alert message is displayed when form is submitted with valid inputs
test('Alert message is displayed when form is submitted with valid inputs', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.getElementById('contactForm');

  // Mock alert function
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission with valid inputs
  nameInput.value = 'John Doe';
  emailInput.value = 'johndoe@example.com';
  messageInput.value = 'Hello, I would like to inquire about services.';
  contactForm.dispatchEvent(new Event('submit'));

  // Expect alert to be called with the success message
  expect(mockAlert).toHaveBeenCalledWith('Form submitted successfully!');

  // Clean up
  mockAlert.mockRestore();
});

// Test 2: Alert message is not displayed when form is submitted with empty name
test('Alert message is not displayed when form is submitted with empty name', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.getElementById('contactForm');

  // Mock alert function
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission with empty name
  nameInput.value = '';
  emailInput.value = 'johndoe@example.com';
  messageInput.value = 'Hello, I would like to inquire about services.';
  contactForm.dispatchEvent(new Event('submit'));

  // Expect alert not to be called
  expect(mockAlert).not.toHaveBeenCalled();

  // Clean up
  mockAlert.mockRestore();
});

// Test 3: Alert message is not displayed when form is submitted with empty email
test('Alert message is not displayed when form is submitted with empty email', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.getElementById('contactForm');

  // Mock alert function
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission with empty email
  nameInput.value = 'John Doe';
  emailInput.value = '';
  messageInput.value = 'Hello, I would like to inquire about services.';
  contactForm.dispatchEvent(new Event('submit'));

  // Expect alert not to be called
  expect(mockAlert).not.toHaveBeenCalled();

  // Clean up
  mockAlert.mockRestore();
});

// Test 4: Alert message is not displayed when form is submitted with empty message
test('Alert message is not displayed when form is submitted with empty message', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.getElementById('contactForm');

  // Mock alert function
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission with empty message
  nameInput.value = 'John Doe';
  emailInput.value = 'johndoe@example.com';
  messageInput.value = '';
  contactForm.dispatchEvent(new Event('submit'));

  // Expect alert not to be called
  expect(mockAlert).not.toHaveBeenCalled();

  // Clean up
  mockAlert.mockRestore();
});

// Test 5: Alert message is not displayed when form is submitted with invalid email format
test('Alert message is not displayed when form is submitted with invalid email format', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const contactForm = document.getElementById('contactForm');

  // Mock alert function
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Simulate form submission with invalid email format
  nameInput.value = 'John Doe';
  emailInput.value = 'johndoeexample.com';
  messageInput.value = 'Hello, I would like to inquire about services.';
  contactForm.dispatchEvent(new Event('submit'));

  // Expect alert not to be called
  expect(mockAlert).not.toHaveBeenCalled();

  // Clean up
  mockAlert.mockRestore();
});
