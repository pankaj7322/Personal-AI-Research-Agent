const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.style.left = '10px';
        toggleBtn.style.width = '30px';
        toggleBtn.style.height = '30px';
        toggleBtn.style.fontSize = '18px';
    } else {
        toggleBtn.style.left = '200px';
        toggleBtn.style.width = '40px';
        toggleBtn.style.height = '40px';
        toggleBtn.style.fontSize = '24px';
    }
});
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');

sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.textContent = messageText;

    chatMessages.appendChild(messageDiv);
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight; // auto-scroll to bottom
  }
});

// Optional: Allow "Enter" key to send
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});
