// Elementos
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const errorDiv = document.getElementById('error');
const toggleBtn = document.getElementById('togglePassword');

// Mostrar/ocultar password
toggleBtn.addEventListener('click', () => {
  const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passInput.setAttribute('type', type);
  toggleBtn.textContent = type === 'password' ? '👁️' : '🙈';
});

// Validación simple y simulación de login
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorDiv.textContent = '';

  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  // Validaciones básicas
  if (!email) {
    errorDiv.textContent = 'Ingresa tu correo.';
    emailInput.focus();
    return;
  }
  if (!password) {
    errorDiv.textContent = 'Ingresa tu contraseña.';
    passInput.focus();
    return;
  }
  if (password.length < 6) {
    errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    passInput.focus();
    return;
  }

  // --- Opción A: Simulación local (demo)
  // Para pruebas locales sin backend: compara con credenciales demo (NO usar en producción)
  const demoUser = { email: 'demo@ejemplo.com', password: '123456' };
  if (email === demoUser.email && password === demoUser.password) {
    // Login exitoso (simulado)
    localStorage.setItem('token_demo', 'usuario_demo_autenticado');
    // Redirigir (simulado) o mostrar mensaje
    alert('Login exitoso — bienvenido');
    // window.location.href = 'dashboard.html';
    return;
  }

  errorDiv.textContent = 'Credenciales incorrectas (usa demo@ejemplo.com / 123456 para probar)';
});
