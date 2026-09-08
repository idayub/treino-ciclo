"use strict";

/*
  Meu Treino
  Aplicativo em HTML, CSS e JavaScript puro.

  Para modificar os treinos, edite o objeto WORKOUTS abaixo.

  Cada exercício possui:
  - name: nome
  - sets: quantidade de séries exibidas
  - reps: repetições ou duração
  - rest: descanso em segundos
  - technique: técnica aplicada
  - tip: lembrete da execução
*/

const STORAGE_KEY = "meu-treino-github-pages-v1";
const THEME_KEY = "meu-treino-theme";

const DAYS = [
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "domingo"
];

const DAY_LABELS = {
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
  sabado: "Sábado",
  domingo: "Domingo"
};

const WORKOUTS = {
  segunda: {
    title: "Peito, ombros e tríceps",
    exercises: [
      {
        name: "Supino reto com barra",
        sets: 4,
        reps: "1×5–8 + 3×8–10",
        rest: 210,
        technique: "Top set + back-off",
        tip: "Faça 1 série pesada. Reduza 8–12% e faça 3 back-offs."
      },
      {
        name: "Supino inclinado com barra",
        sets: 4,
        reps: "6–12",
        rest: 150,
        technique: "Pirâmide crescente",
        tip: "Aumente a carga gradualmente sem perder a técnica."
      },
      {
        name: "Supino sentado na máquina",
        sets: 3,
        reps: "8–15",
        rest: 120,
        technique: "Pausa no alongamento",
        tip: "Segure 2 segundos na posição alongada."
      },
      {
        name: "Crossover na polia",
        sets: 3,
        reps: "12–20",
        rest: 75,
        technique: "Drop set na última",
        tip: "Reduza 20–30% da carga e continue."
      },
      {
        name: "Elevação lateral",
        sets: 5,
        reps: "10–20",
        rest: 75,
        technique: "Pausa + drop set",
        tip: "Pause no topo. Faça drop set apenas na última."
      },
      {
        name: "Tríceps testa",
        sets: 3,
        reps: "8–12",
        rest: 120,
        technique: "Excêntrica de 3 segundos",
        tip: "Controle a descida por aproximadamente 3 segundos."
      },
      {
        name: "Tríceps acima da cabeça na polia",
        sets: 3,
        reps: "10–15",
        rest: 105,
        technique: "Rest-pause na última",
        tip: "Descanse 15–20 segundos e faça 3–5 reps."
      }
    ]
  },

  terca: {
    title: "Costas, bíceps e panturrilhas",
    exercises: [
      {
        name: "Puxada alta, pegada fechada",
        sets: 4,
        reps: "6–12",
        rest: 150,
        technique: "Progressão dupla",
        tip: "Ao fazer 12 reps em todas, aumente a carga."
      },
      {
        name: "Remada T",
        sets: 5,
        reps: "1×6–8 + 4×8–10",
        rest: 180,
        technique: "Top set + back-off",
        tip: "Faça uma série pesada e depois reduza a carga."
      },
      {
        name: "Remada unilateral",
        sets: 4,
        reps: "8–12 por lado",
        rest: 105,
        technique: "Pausa na contração",
        tip: "Segure 1 segundo no topo."
      },
      {
        name: "Remada com apoio no peito",
        sets: 3,
        reps: "10–15",
        rest: 120,
        technique: "Drop set na última",
        tip: "Reduza a carga sem perder o controle."
      },
      {
        name: "Face pull",
        sets: 3,
        reps: "15–25",
        rest: 75,
        technique: "Contração de 1–2 segundos",
        tip: "Use carga moderada e movimento preciso."
      },
      {
        name: "Rosca direta com barra",
        sets: 4,
        reps: "6–10",
        rest: 120,
        technique: "Pirâmide crescente",
        tip: "Não balance o tronco."
      },
      {
        name: "Rosca martelo",
        sets: 3,
        reps: "8–15",
        rest: 105,
        technique: "Rest-pause na última",
        tip: "Descanse 15–20 segundos e faça 3–5 reps."
      },
      {
        name: "Panturrilha sentada",
        sets: 5,
        reps: "10–20",
        rest: 90,
        technique: "Alongamento + contração",
        tip: "2 segundos embaixo e 1 segundo no topo."
      }
    ]
  },

  quarta: {
    title: "Braços, deltoide posterior e panturrilhas",
    exercises: [
      {
        name: "Rosca inclinada com halteres",
        sets: 4,
        reps: "8–12",
        rest: 120,
        technique: "Excêntrica de 3 segundos",
        tip: "Controle a descida."
      },
      {
        name: "Rosca concentrada",
        sets: 3,
        reps: "10–15",
        rest: 90,
        technique: "Pico + drop set",
        tip: "Segure 2 segundos no pico. Drop set na última."
      },
      {
        name: "Tríceps na polia",
        sets: 4,
        reps: "8–15",
        rest: 105,
        technique: "Pirâmide crescente",
        tip: "Mantenha os ombros estáveis."
      },
      {
        name: "Tríceps coice na polia",
        sets: 3,
        reps: "12–20",
        rest: 75,
        technique: "Contração máxima",
        tip: "Mantenha o cotovelo fixo."
      },
      {
        name: "Tríceps testa com halteres",
        sets: 3,
        reps: "10–15",
        rest: 120,
        technique: "Myo-reps",
        tip: "Série principal + 15 segundos + mini-séries."
      },
      {
        name: "Elevação posterior com halteres",
        sets: 4,
        reps: "12–20",
        rest: 90,
        technique: "Drop set na última",
        tip: "Não use balanço."
      },
      {
        name: "Crucifixo inverso na máquina",
        sets: 3,
        reps: "12–20",
        rest: 90,
        technique: "Pausa de 2 segundos",
        tip: "Segure na contração."
      },
      {
        name: "Face pull",
        sets: 2,
        reps: "20–25",
        rest: 75,
        technique: "Controle técnico",
        tip: "Faça apenas se ainda houver boa execução."
      },
      {
        name: "Panturrilha unilateral",
        sets: 6,
        reps: "10–15 por lado",
        rest: 75,
        technique: "Rest-pause na última",
        tip: "Pausa curta e repetições controladas."
      }
    ]
  },

  quinta: {
    title: "Pernas e panturrilhas",
    exercises: [
      {
        name: "Agachamento livre",
        sets: 4,
        reps: "1×6–8 + 3×8–10",
        rest: 240,
        technique: "Top set + back-off",
        tip: "Sem falha absoluta. Priorize a técnica."
      },
      {
        name: "Leg press 45°",
        sets: 4,
        reps: "8–15",
        rest: 180,
        technique: "Pirâmide + rest-pause",
        tip: "Rest-pause leve somente na última."
      },
      {
        name: "Terra romeno",
        sets: 4,
        reps: "6–10",
        rest: 180,
        technique: "Excêntrica de 3 segundos",
        tip: "Coluna neutra e RIR 1–2."
      },
      {
        name: "Mesa flexora",
        sets: 4,
        reps: "8–15",
        rest: 105,
        technique: "Drop set duplo",
        tip: "Drop duplo somente na última série."
      },
      {
        name: "Cadeira extensora",
        sets: 4,
        reps: "10–20",
        rest: 90,
        technique: "Drop set na última",
        tip: "Reduza 25–30% da carga e continue."
      },
      {
        name: "Panturrilha em pé",
        sets: 5,
        reps: "8–15",
        rest: 105,
        technique: "Rest-pause na última",
        tip: "2 segundos no alongamento e 1 segundo no topo."
      }
    ]
  },

  sexta: {
    title: "Ombros e abdômen",
    exercises: [
      {
        name: "Desenvolvimento com barra",
        sets: 4,
        reps: "1×5–8 + 3×8–10",
        rest: 180,
        technique: "Top set + back-off",
        tip: "Sem falha absoluta."
      },
      {
        name: "Desenvolvimento na máquina",
        sets: 3,
        reps: "8–12",
        rest: 150,
        technique: "Falha controlada",
        tip: "Última série em RIR 0–1 se não houver dor."
      },
      {
        name: "Elevação lateral na máquina ou polia",
        sets: 5,
        reps: "12–20",
        rest: 75,
        technique: "Pausa + drop set",
        tip: "Pause no topo. Drop set na última."
      },
      {
        name: "Elevação lateral inclinada",
        sets: 3,
        reps: "12–20",
        rest: 75,
        technique: "Parciais alongadas",
        tip: "Parciais somente após reps completas."
      },
      {
        name: "Crucifixo inverso na máquina",
        sets: 3,
        reps: "15–25",
        rest: 75,
        technique: "Pausa de 2 segundos",
        tip: "Segure no pico da contração."
      },
      {
        name: "Abdominal na polia",
        sets: 4,
        reps: "10–15",
        rest: 90,
        technique: "Progressão de carga",
        tip: "Aproxime as costelas da pelve."
      },
      {
        name: "Abdominal infra declinado",
        sets: 4,
        reps: "10–20",
        rest: 90,
        technique: "Retroversão pélvica",
        tip: "Sem balançar as pernas."
      },
      {
        name: "Prancha",
        sets: 4,
        reps: "30–60 segundos",
        rest: 90,
        technique: "Progressão de tempo",
        tip: "Mantenha o corpo alinhado."
      }
    ]
  },

  sabado: {
    title: "Descanso ou cardio leve",
    exercises: []
  },

  domingo: {
    title: "Descanso",
    exercises: []
  }
};

const state = {
  selectedDay: "segunda",
  completed: {},
  notes: {},
  vibration: true,
  timer: {
    status: "idle",
    duration: 0,
    remaining: 0,
    endAt: null,
    exerciseName: ""
  }
};

const elements = {
  tabs: document.querySelector("#dayTabs"),
  title: document.querySelector("#selectedDayTitle"),
  progressText: document.querySelector("#dayProgressText"),
  progressPercent: document.querySelector("#progressPercent"),
  progressRing: document.querySelector("#progressRing"),
  workoutList: document.querySelector("#workoutList"),
  resetDayButton: document.querySelector("#resetDayButton"),
  restBanner: document.querySelector("#restBanner"),
  timerDisplay: document.querySelector("#timerDisplay"),
  timerStatus: document.querySelector("#timerStatus"),
  startTimerButton: document.querySelector("#startTimerButton"),
  pauseTimerButton: document.querySelector("#pauseTimerButton"),
  resumeTimerButton: document.querySelector("#resumeTimerButton"),
  restartTimerButton: document.querySelector("#restartTimerButton"),
  skipTimerButton: document.querySelector("#skipTimerButton"),
  notificationPermissionButton: document.querySelector(
    "#notificationPermissionButton"
  ),
  vibrationToggle: document.querySelector("#vibrationToggle"),
  dayNotes: document.querySelector("#dayNotes"),
  notificationMessage: document.querySelector("#notificationMessage"),
  toast: document.querySelector("#toast"),
  themeToggle: document.querySelector("#themeToggle")
};

let timerInterval = null;
let audioContext = null;
let toastTimeout = null;

function loadState() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    if (DAYS.includes(saved.selectedDay)) {
      state.selectedDay = saved.selectedDay;
    }

    state.completed = saved.completed || {};
    state.notes = saved.notes || {};
    state.vibration = saved.vibration !== false;

    if (saved.timer) {
      state.timer = {
        ...state.timer,
        ...saved.timer
      };
    }
  } catch {
    showToast("Não foi possível restaurar os dados salvos.");
  }

  elements.vibrationToggle.checked = state.vibration;
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      selectedDay: state.selectedDay,
      completed: state.completed,
      notes: state.notes,
      vibration: state.vibration,
      timer: state.timer
    })
  );
}

function getWorkout(day = state.selectedDay) {
  return WORKOUTS[day] || {
    title: "Descanso",
    exercises: []
  };
}

function getSetKey(day, exerciseIndex, setIndex) {
  return `${day}-${exerciseIndex}-${setIndex}`;
}

function isSetCompleted(day, exerciseIndex, setIndex) {
  return Boolean(
    state.completed[getSetKey(day, exerciseIndex, setIndex)]
  );
}

function setCompleted(day, exerciseIndex, setIndex, completed) {
  const key = getSetKey(day, exerciseIndex, setIndex);

  if (completed) {
    state.completed[key] = true;
  } else {
    delete state.completed[key];
  }

  saveState();
}

function getDayProgress(day = state.selectedDay) {
  const workout = getWorkout(day);

  let total = 0;
  let completed = 0;

  workout.exercises.forEach((exercise, exerciseIndex) => {
    total += exercise.sets;

    for (let setIndex = 0; setIndex < exercise.sets; setIndex++) {
      if (isSetCompleted(day, exerciseIndex, setIndex)) {
        completed++;
      }
    }
  });

  return {
    total,
    completed,
    percent: total === 0
      ? 0
      : Math.round((completed / total) * 100)
  };
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function formatRest(seconds) {
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (remainingSeconds === 0) {
      return `${minutes} min`;
    }

    return `${minutes}m ${remainingSeconds}s`;
  }

  return `${seconds}s`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 3500);
}

function renderTabs() {
  elements.tabs.innerHTML = "";

  DAYS.forEach((day) => {
    const button = document.createElement("button");
    const progress = getDayProgress(day);

    button.type = "button";
    button.className = "day-tab";
    button.textContent = DAY_LABELS[day];
    button.setAttribute(
      "aria-label",
      `Abrir treino de ${DAY_LABELS[day]}`
    );

    if (day === state.selectedDay) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }

    if (progress.completed > 0) {
      button.classList.add("has-progress");
    }

    button.addEventListener("click", () => {
      state.selectedDay = day;
      saveState();
      render();
    });

    elements.tabs.appendChild(button);
  });
}

function renderProgress() {
  const progress = getDayProgress();
  const degrees = progress.percent * 3.6;

  elements.progressText.textContent =
    `${progress.completed} de ${progress.total} séries concluídas`;

  elements.progressPercent.textContent =
    `${progress.percent}%`;

  elements.progressRing.style.background = `
    radial-gradient(circle at center, var(--surface) 56%, transparent 58%),
    conic-gradient(
      var(--success) ${degrees}deg,
      var(--surface-3) ${degrees}deg
    )
  `;
}

function renderWorkout() {
  const workout = getWorkout();

  elements.title.textContent = workout.title;
  elements.workoutList.innerHTML = "";
  elements.dayNotes.value = state.notes[state.selectedDay] || "";

  if (workout.exercises.length === 0) {
    elements.workoutList.innerHTML = `
      <article class="exercise-card">
        <h3>Dia de recuperação</h3>
        <p class="exercise-meta">
          Use este dia para descanso, mobilidade ou cardio leve.
        </p>
      </article>
    `;

    return;
  }

  workout.exercises.forEach((exercise, exerciseIndex) => {
    const card = document.createElement("article");
    const completedCount = Array.from(
      { length: exercise.sets },
      (_, setIndex) =>
        isSetCompleted(
          state.selectedDay,
          exerciseIndex,
          setIndex
        )
    ).filter(Boolean).length;

    card.className = "exercise-card";

    if (completedCount === exercise.sets) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <div class="exercise-header">
        <div>
          <h3>${escapeHtml(exercise.name)}</h3>
          <p class="exercise-meta">
            ${exercise.sets} séries · ${escapeHtml(exercise.reps)}
            · descanso ${formatRest(exercise.rest)}
          </p>
        </div>

        <span class="technique-label">
          ${escapeHtml(exercise.technique)}
        </span>
      </div>

      <p class="exercise-meta">
        Lembrete: ${escapeHtml(exercise.tip)}
      </p>

      <div class="set-list"></div>
    `;

    const setList = card.querySelector(".set-list");

    for (let setIndex = 0; setIndex < exercise.sets; setIndex++) {
      const checked = isSetCompleted(
        state.selectedDay,
        exerciseIndex,
        setIndex
      );

      const row = document.createElement("div");
      row.className = "set-row";

      if (checked) {
        row.classList.add("completed");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "set-checkbox";
      checkbox.checked = checked;
      checkbox.id =
        `set-${state.selectedDay}-${exerciseIndex}-${setIndex}`;

      const label = document.createElement("label");
      label.className = "set-label";
      label.htmlFor = checkbox.id;
      label.textContent = `Série ${setIndex + 1}`;

      const status = document.createElement("span");
      status.className = "set-status";
      status.textContent = checked ? "Concluída" : "Pendente";

      const restButton = document.createElement("button");
      restButton.type = "button";
      restButton.className = "rest-button";
      restButton.textContent =
        `Descansar ${formatRest(exercise.rest)}`;
      restButton.setAttribute(
        "aria-label",
        `Iniciar descanso de ${formatRest(exercise.rest)}`
      );

      checkbox.addEventListener("change", () => {
        setCompleted(
          state.selectedDay,
          exerciseIndex,
          setIndex,
          checkbox.checked
        );

        if (checkbox.checked) {
          prepareTimer(exercise);
          showToast(`Série ${setIndex + 1} concluída.`);
        }

        render();
      });

      restButton.addEventListener("click", () => {
        prepareTimer(exercise);
        startTimer();
      });

      row.append(
        checkbox,
        label,
        status,
        restButton
      );

      setList.appendChild(row);
    }

    elements.workoutList.appendChild(card);
  });
}

function renderTimer() {
  const timer = state.timer;

  if (!timer.duration) {
    elements.restBanner.classList.add("hidden");
    return;
  }

  elements.restBanner.classList.remove("hidden");
  elements.timerDisplay.textContent =
    formatTime(timer.remaining);

  if (timer.status === "running") {
    elements.timerStatus.textContent =
      `Descanso de ${timer.exerciseName}`;
  } else if (timer.status === "paused") {
    elements.timerStatus.textContent = "Descanso pausado";
  } else if (timer.status === "finished") {
    elements.timerStatus.textContent = "Descanso finalizado";
  } else {
    elements.timerStatus.textContent =
      `Pronto: ${timer.exerciseName}`;
  }

  elements.startTimerButton.disabled =
    timer.status === "running";

  elements.pauseTimerButton.disabled =
    timer.status !== "running";

  elements.resumeTimerButton.disabled =
    timer.status !== "paused";

  elements.restartTimerButton.disabled =
    !timer.duration;

  elements.skipTimerButton.disabled =
    !timer.duration || timer.status === "finished";
}

function render() {
  renderTabs();
  renderProgress();
  renderWorkout();
  renderTimer();
}

function prepareTimer(exercise) {
  state.timer = {
    status: "idle",
    duration: exercise.rest,
    remaining: exercise.rest,
    endAt: null,
    exerciseName: exercise.name
  };

  saveState();
  renderTimer();
}

function startTimer() {
  if (!state.timer.duration) {
    showToast("Selecione um exercício para iniciar o descanso.");
    return;
  }

  unlockAudio();

  if (state.timer.status === "finished") {
    state.timer.remaining = state.timer.duration;
  }

  state.timer.status = "running";
  state.timer.endAt =
    Date.now() + state.timer.remaining * 1000;

  saveState();
  startTimerLoop();
  renderTimer();
}

function pauseTimer() {
  if (state.timer.status !== "running") {
    return;
  }

  updateTimer();

  state.timer.status = "paused";
  state.timer.endAt = null;

  stopTimerLoop();
  saveState();
  renderTimer();
}

function resumeTimer() {
  if (state.timer.status !== "paused") {
    return;
  }

  state.timer.status = "running";
  state.timer.endAt =
    Date.now() + state.timer.remaining * 1000;

  saveState();
  startTimerLoop();
  renderTimer();
}

function restartTimer() {
  if (!state.timer.duration) {
    return;
  }

  state.timer.status = "idle";
  state.timer.remaining = state.timer.duration;
  state.timer.endAt = null;

  stopTimerLoop();
  saveState();
  renderTimer();
}

function skipTimer() {
  if (!state.timer.duration) {
    return;
  }

  state.timer.status = "finished";
  state.timer.remaining = 0;
  state.timer.endAt = null;

  stopTimerLoop();
  saveState();
  finishTimer();
}

function updateTimer() {
  if (state.timer.status !== "running") {
    renderTimer();
    return;
  }

  const remaining = Math.max(
    0,
    (state.timer.endAt - Date.now()) / 1000
  );

  state.timer.remaining = remaining;

  if (remaining <= 0) {
    state.timer.status = "finished";
    state.timer.remaining = 0;
    state.timer.endAt = null;

    stopTimerLoop();
    saveState();
    finishTimer();

    return;
  }

  saveState();
  renderTimer();
}

function startTimerLoop() {
  stopTimerLoop();
  timerInterval = setInterval(updateTimer, 250);
  updateTimer();
}

function stopTimerLoop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function finishTimer() {
  renderTimer();

  playAlertSound();
  vibrateDevice();
  notifyRestFinished();

  elements.notificationMessage.textContent =
    "Descanso finalizado. Próxima série.";

  showToast("Descanso finalizado.");
}

function unlockAudio() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  } catch {
    // O navegador pode bloquear o áudio.
  }
}

function playAlertSound() {
  try {
    if (!audioContext) {
      unlockAudio();
    }

    if (!audioContext) {
      return;
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(
      880,
      audioContext.currentTime
    );

    gain.gain.setValueAtTime(
      0.0001,
      audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.18,
      audioContext.currentTime + 0.015
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.35
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.35);
  } catch {
    // Notificação e vibração continuam sendo tentadas.
  }
}

function vibrateDevice() {
  if (
    state.vibration &&
    "vibrate" in navigator
  ) {
    navigator.vibrate([180, 100, 180]);
  }
}

async function notifyRestFinished() {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission !== "granted") {
    return;
  }

  const options = {
    body: "O descanso terminou. Próxima série.",
    tag: "meu-treino-descanso",
    renotify: true,
    silent: false
  };

  try {
    if ("serviceWorker" in navigator) {
      const registration =
        await navigator.serviceWorker.ready;

      await registration.showNotification(
        "Descanso finalizado",
        options
      );
    } else {
      new Notification(
        "Descanso finalizado",
        options
      );
    }
  } catch {
    // O sistema pode bloquear notificações.
  }
}

async function requestNotifications() {
  if (!("Notification" in window)) {
    showToast("Este navegador não oferece notificações.");
    return;
  }

  try {
    const permission =
      await Notification.requestPermission();

    if (permission === "granted") {
      showToast("Notificações permitidas.");
      elements.notificationMessage.textContent =
        "Notificações de descanso ativadas.";
    } else {
      showToast("Notificações não foram permitidas.");
    }
  } catch {
    showToast("Não foi possível solicitar permissão.");
  }
}

function resetSelectedDay() {
  const confirmed = window.confirm(
    `Redefinir todo o progresso de ${DAY_LABELS[state.selectedDay]}?`
  );

  if (!confirmed) {
    return;
  }

  const workout = getWorkout(state.selectedDay);

  workout.exercises.forEach((exercise, exerciseIndex) => {
    for (let setIndex = 0; setIndex < exercise.sets; setIndex++) {
      delete state.completed[
        getSetKey(
          state.selectedDay,
          exerciseIndex,
          setIndex
        )
      ];
    }
  });

  delete state.notes[state.selectedDay];

  saveState();
  render();
  showToast("Progresso do dia redefinido.");
}

function applySavedTheme() {
  const theme = localStorage.getItem(THEME_KEY);

  if (theme === "light" || theme === "dark") {
    document.documentElement.dataset.theme = theme;
  }
}

function toggleTheme() {
  const current =
    document.documentElement.dataset.theme || "dark";

  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
}

function saveNotes() {
  state.notes[state.selectedDay] =
    elements.dayNotes.value;

  saveState();
}

function restoreTimerAfterReload() {
  if (state.timer.status !== "running") {
    renderTimer();
    return;
  }

  if (!state.timer.endAt) {
    state.timer.status = "paused";
    saveState();
    renderTimer();
    return;
  }

  startTimerLoop();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    elements.notificationMessage.textContent =
      "Service Worker não disponível neste navegador.";

    return;
  }

  navigator.serviceWorker
    .register("./service-worker.js", {
      scope: "./"
    })
    .then(() => {
      elements.notificationMessage.textContent =
        "Aplicativo pronto. Notificações dependem da permissão do sistema.";
    })
    .catch((error) => {
      console.error(
        "Erro ao registrar o Service Worker:",
        error
      );

      elements.notificationMessage.textContent =
        "O app funciona, mas o Service Worker não pôde ser registrado.";
    });
}

function setupEvents() {
  elements.resetDayButton.addEventListener(
    "click",
    resetSelectedDay
  );

  elements.startTimerButton.addEventListener(
    "click",
    startTimer
  );

  elements.pauseTimerButton.addEventListener(
    "click",
    pauseTimer
  );

  elements.resumeTimerButton.addEventListener(
    "click",
    resumeTimer
  );

  elements.restartTimerButton.addEventListener(
    "click",
    restartTimer
  );

  elements.skipTimerButton.addEventListener(
    "click",
    skipTimer
  );

  elements.notificationPermissionButton.addEventListener(
    "click",
    requestNotifications
  );

  elements.vibrationToggle.addEventListener(
    "change",
    () => {
      state.vibration =
        elements.vibrationToggle.checked;

      saveState();
    }
  );

  elements.dayNotes.addEventListener(
    "input",
    saveNotes
  );

  elements.themeToggle.addEventListener(
    "click",
    toggleTheme
  );

  document.addEventListener(
    "visibilitychange",
    () => {
      if (!document.hidden) {
        updateTimer();
        renderTimer();
      }
    }
  );

  window.addEventListener(
    "focus",
    () => {
      updateTimer();
      renderTimer();
    }
  );

  window.addEventListener(
    "pageshow",
    () => {
      updateTimer();
      renderTimer();
    }
  );

  window.addEventListener(
    "beforeunload",
    saveState
  );
}

function init() {
  applySavedTheme();
  loadState();
  setupEvents();
  render();
  restoreTimerAfterReload();
  registerServiceWorker();
}

init();