const body = document.body
const themeToggle = document.querySelector('#theme-toggle')
const menuToggle = document.querySelector('#menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')
const cvDialog = document.querySelector('#cv-dialog')
const emailComposer = document.querySelector('#email-composer')
const emailComposerTrigger = document.querySelector('#email-composer-trigger')
const emailComposerClose = document.querySelector('#email-composer-close')
const emailComposerForm = document.querySelector('#email-composer-form')
const emailSubject = document.querySelector('#email-subject')
const emailFormStatus = document.querySelector('#email-form-status')

function setTheme(theme) {
  body.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('theme', theme)
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
}

setTheme(localStorage.getItem('theme') || 'dark')
themeToggle?.addEventListener('click', () => setTheme(body.classList.contains('dark') ? 'light' : 'dark'))

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu')
  mobileMenu.hidden = isOpen
})

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-label', 'Open navigation menu')
  mobileMenu.hidden = true
}))

document.querySelector('#cv-button')?.addEventListener('click', () => cvDialog?.showModal())
document.querySelector('#close-cv')?.addEventListener('click', () => cvDialog?.close())
cvDialog?.addEventListener('click', (event) => { if (event.target === cvDialog) cvDialog.close() })
const year = document.querySelector('#year')
if (year) year.textContent = new Date().getFullYear()

emailComposerTrigger?.addEventListener('click', () => emailComposer?.showModal())
emailComposerClose?.addEventListener('click', () => emailComposer?.close())
emailComposer?.addEventListener('click', (event) => { if (event.target === emailComposer) emailComposer.close() })

document.querySelectorAll('[data-topic]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-topic]').forEach((item) => item.classList.remove('is-selected'))
  button.classList.add('is-selected')
  if (emailSubject && !emailSubject.value.trim()) emailSubject.value = button.dataset.topic
}))

emailComposerForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  const name = document.querySelector('#email-name')?.value.trim()
  const email = document.querySelector('#email-from')?.value.trim()
  const subject = emailSubject?.value.trim() || "Let's talk"
  const message = document.querySelector('#email-message')?.value.trim() || 'Hi Ahmad,'
  const sendButton = emailComposerForm.querySelector('.email-send')

  if (emailFormStatus) emailFormStatus.textContent = 'Sending…'
  if (sendButton) {
    sendButton.disabled = true
    sendButton.textContent = 'Sending…'
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Unable to send your message.')

    if (emailFormStatus) emailFormStatus.textContent = 'Message sent successfully.'
    emailComposerForm.reset()
  } catch (error) {
    if (emailFormStatus) emailFormStatus.textContent = error.message || 'Unable to send your message.'
  } finally {
    if (sendButton) {
      sendButton.disabled = false
      sendButton.textContent = 'Send'
    }
  }
})
