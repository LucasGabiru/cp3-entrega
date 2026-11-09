const themeToggle = document.querySelector("[data-theme-toggle]");
const themeStatus = document.querySelector("[data-theme-status]");
const themeStorageKey = "lucas-portfolio-theme";

function showThemeStorageError(message, error) {
  console.error(message, error);
  if (themeStatus) {
    themeStatus.textContent = message;
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Ativar tema claro" : "Ativar tema escuro";
  }
}

try {
  const savedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(savedTheme === "dark" ? "dark" : "light");
} catch (error) {
  applyTheme("light");
  showThemeStorageError("Não foi possível carregar a preferência de tema.", error);
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);

  try {
    localStorage.setItem(themeStorageKey, nextTheme);
    if (themeStatus) {
      themeStatus.textContent = `Tema ${nextTheme === "dark" ? "escuro" : "claro"} ativado e salvo neste navegador.`;
    }
  } catch (error) {
    showThemeStorageError("O tema foi alterado, mas não foi possível salvar a preferência neste navegador.", error);
  }
});

const contactForm = document.querySelector("#formulario-contato");

if (contactForm) {
  const fields = [...contactForm.querySelectorAll("input, textarea")];
  const formStatus = contactForm.querySelector("[data-form-status]");

  function clearFieldError(field) {
    const errorMessage = document.getElementById(`${field.id}-error`);
    field.removeAttribute("aria-invalid");
    field.setCustomValidity("");
    if (errorMessage) {
      errorMessage.textContent = "";
    }
  }

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      clearFieldError(field);
      if (formStatus) {
        formStatus.textContent = "";
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach(clearFieldError);

    const nameField = contactForm.elements.namedItem("nome");
    const messageField = contactForm.elements.namedItem("mensagem");

    if (nameField.value.trim().length < 2) {
      nameField.setCustomValidity("Informe um nome com pelo menos 2 caracteres.");
    }
    if (messageField.value.trim().length < 10) {
      messageField.setCustomValidity("A mensagem deve ter pelo menos 10 caracteres.");
    }

    const invalidFields = fields.filter((field) => !field.validity.valid);
    if (invalidFields.length > 0) {
      invalidFields.forEach((field) => {
        field.setAttribute("aria-invalid", "true");
        const errorMessage = document.getElementById(`${field.id}-error`);
        if (errorMessage) {
          errorMessage.textContent = field.validationMessage;
        }
      });
      if (formStatus) {
        formStatus.textContent = "Revise os campos indicados antes de continuar.";
      }
      invalidFields[0].focus();
      return;
    }

    if (formStatus) {
      formStatus.textContent = "Formulário validado. Nenhuma mensagem foi enviada; este site ainda não tem um servidor configurado.";
    }
  });
}

const canvas = document.getElementById("meuCanvas");

if (canvas) {
  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "#dfeeff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#4f9dff";
    context.fillRect(70, 170, 120, 110);

    context.fillStyle = "#1f3a5f";
    context.fillRect(240, 120, 120, 160);

    context.fillStyle = "#1f9d7a";
    context.fillRect(410, 90, 120, 190);

    context.beginPath();
    context.arc(585, 95, 50, 0, Math.PI * 2);
    context.fillStyle = "#ffb703";
    context.fill();

    context.beginPath();
    context.moveTo(230, 240);
    context.lineTo(350, 115);
    context.lineTo(470, 240);
    context.closePath();
    context.fillStyle = "#ef476f";
    context.fill();
  }
}
