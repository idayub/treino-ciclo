"use strict";

const STORAGE_KEY = "meu-treino-liquid-glass-v1";
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
  segunda: "Segunda",
  terca: "Terça",
  quarta: "Quarta",
  quinta: "Quinta",
  sexta: "Sexta",
  sabado: "Sábado",
  domingo: "Domingo"
};

const WORKOUTS = {
  segunda: {
    title: "Peito, ombros e tríceps",
    subtitle: "Empurradas fortes, controle e técnica.",
    exercises: [
      {
        name: "Supino reto com barra",
        sets: 4,
        reps: "1×5–8 + 3×8–10",
        rest: 210,
        technique: "Top set + back-off",
        tip: "Uma série pesada; depois reduza 8–12% da carga."
      },
      {
        name: "Supino inclinado com barra",
        sets: 4,
        reps: "6–12",
        rest: 150,
        technique: "Pirâmide crescente",
        tip: "Aumente a carga sem perder a amplitude."
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
        tip: "Pause no topo; drop set somente na última."
      },
      {
        name: "Tríceps testa",
        sets: 3,
        reps: "8–12",
        rest: 120,
        technique: "Excêntrica de 3 s",
        tip: "Controle a descida durante 3 segundos."
      },
      {
        name: "Tríceps acima da cabeça",
        sets: 3,
        reps: "10–15",
        rest: 105,
        technique: "Rest-pause",
        tip: "Descanse 15–20 s e faça 3–5 repetições."
      }
    ]
  },

  terca: {
    title: "Costas, bíceps e panturrilhas",
    subtitle: "Puxe com controle e construa densidade.",
    exercises: [
      {
        name: "Puxada alta, pegada fechada",
        sets: 4,
        reps: "6–12",
        rest: 150,
        technique: "Progressão dupla",
        tip: "Ao alcançar 12 repetições em todas, aumente a carga."
      },
      {
        name: "Remada T",
        sets: 5,
        reps: "1×6–8 + 4×8–10",
        rest: 180,
        technique: "Top set + back-off",
        tip: "Evite falha absoluta para preservar a técnica."
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
        technique: "Contração de 1–2 s",
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
        technique: "Rest-pause",
        tip: "Descanse 15–20 s na última série."
      },
      {
        name: "Panturrilha sentada",
        sets: 5,
        reps: "10–20",
        rest: 90,
        technique: "Alongamento + contração",
        tip: "2 s embaixo e 1 s no topo."
      }
    ]
  },

  quarta: {
    title: "Braços, deltoide posterior e panturrilhas",
    subtitle: "Volume de qualidade para braços e ombros.",
    exercises: [
      {
        name: "Rosca inclinada com halteres",
        sets: 4,
        reps: "8–12",
        rest: 120,
        technique: "Excêntrica de 3 s",
        tip: "Controle a descida."
      },
      {
        name: "Rosca concentrada",
        sets: 3,
        reps: "10–15",
        rest: 90,
        technique: "Pico + drop set",
        tip: "Segure 2 s no pico da contração."
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
        tip: "Série principal + 15 s + mini-séries."
      },
      {
        name: "Elevação posterior",
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
        technique: "Pausa de 2 s",
        tip: "Segure na contração."
      },
      {
        name: "Face pull",
        sets: 2,
        reps: "20–25",
        rest: 75,
        technique: "Controle técnico",
        tip: "Movimento leve e preciso."
      },
      {
        name: "Panturrilha unilateral",
        sets: 6,
        reps: "10–15 por lado",
        rest: 75,
        technique: "Rest-pause",
        tip: "Pausa curta e repetições controladas."
      }
    ]
  },

  quinta: {
    title: "Pernas e panturrilhas",
    subtitle: "Força, amplitude e execução limpa.",
    exercises: [
      {
        name: "Agachamento livre",
        sets: 4,
        reps: "1×6–8 + 3×8–10",
        rest: 240,
        technique: "Top set + back-off",
        tip: "Sem falha absoluta; priorize estabilidade."
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
        technique: "Excêntrica de 3 s",
        tip: "Coluna neutra e RIR 1–2."
      },
      {
        name: "Mesa flexora",
        sets: 4,
        reps: "8–15",
        rest: 105,
        technique: "Drop set duplo",
        tip: "Use o drop duplo somente na última."
      },
      {
        name: "Cadeira extensora",
        sets: 4,
        reps: "10–20",
        rest: 90,
        technique: "Drop set",
        tip: "Reduza 25–30% da carga na última."
      },
      {
        name: "Panturrilha em pé",
        sets: 5,
        reps: "8–15",
        rest: 105,
        technique: "Rest-pause",
        tip: "2 s no alongamento e 1 s no topo."
      }
    ]
  },

  sexta: {
    title: "Ombros e abdômen",
    subtitle: "Deltoides fortes e core estável.",
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
        name: "Elevação lateral",
        sets: 5,
        reps: "12–20",
        rest: 75,
        technique: "Pausa + drop set",
        tip: "Pause no topo; drop set na última."
      },
      {
        name: "Elevação lateral inclinada",
        sets: 3,
        reps: "12–20",
        rest: 75,
        technique: "Parciais alongadas",
        tip: "Parciais somente depois das reps completas."
      },
      {
        name: "Crucifixo inverso na máquina",
        sets: 3,
        reps: "15–25",
        rest: 75,
        technique: "Pausa de 2 s",
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
        reps: "30–60 s",
        rest: 90,
        technique: "Progressão de tempo",
        tip: "Mantenha o corpo alinhado."
      }
    ]
  },

  sabado: {
    title: "Descanso ou cardio leve",
    subtitle: "Recupere-se para treinar melhor.",
    exercises: []
  },

  domingo: {
    title: "Descanso",
    subtitle: "Recuperação completa.",
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

const $ = (selector) => document.querySelector(selector);

const elements = {
  tabs: $("#dayTabs"),
  selectedDayTitle: $("#selectedDayTitle"),
  sessionSubtitle: $("#sessionSubtitle"),
  progressRing: $("#progressRing"),
  progressPercent: $("#progressPercent"),
  dayProgressText: $("#dayProgressText"),
  exerciseProgressText: $("#exerciseProgressText"),
  sessionStatus: $("#sessionStatus"),
  workoutList: $("#workoutList"),
  timerCard: $("#timerCard"),
  timerExercise: $("#timerExercise"),
  timerStateBadge: $("#timerStateBadge"),
  timerDisplay: $("#timerDisplay"),
  timerProgress: $("#timerProgress"),
  timerMessage: $("#timerMessage"),
  pauseTimerButton: $("#pauseTimerButton"),
  resumeTimerButton: $("#resumeTimerButton"),
  restartTimerButton: $("#restartTimerButton"),
  skipTimerButton: $("#skipTimerButton"),
  resetDayButton: $("#resetDayButton"),
  dayNotes: $("#dayNotes"),
  vibrationToggle: $("#vibrationToggle"),
  notificationPermissionButton: $("#notificationPermissionButton"),
  notificationMessage: $("#notificationMessage"),
  themeToggle: $("#themeToggle"),
  themeIcon: $("#themeIcon"),
  toast: $("#toast")
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
    showToast("Não foi possível restaurar os dados.");
  }

  elements.vibrationToggle.checked = state.vibration;
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}

function getWorkout(day = state.selectedDay) {
  return WORKOUTS[day] || {
    title: "Descanso",
    subtitle: "",
    exercises: []
  };
}

function getSetKey(day, exerciseIndex, setIndex) {
  return `${day}-${exerciseIndex}-${setIndex}`;
}

function isCompleted(day, exerciseIndex, setIndex) {
  return Boolean(
    state.completed[
      getSetKey(day, exerciseIndex, setIndex)
    ]
  );
}

function updateSet(day, exerciseIndex, setIndex, value) {
  const key = getSetKey(day, exerciseIndex, setIndex);

  if (value) {
    state.completed[key] = true;
  } else {
    delete state.completed[key];
  }

  saveState();
}

function getProgress(day = state.selectedDay) {
  const workout = getWorkout(day);

  let totalSets = 0;
  let completedSets = 0;
  let totalExercises = workout.exercises.length;
  let completedExercises = 0;

  workout.exercises.forEach((exercise, exerciseIndex) => {
    let exerciseCompleted = 0;

    totalSets += exercise.sets;

    for (
      let setIndex = 0;
      setIndex < exercise.sets;
      setIndex++
    ) {
      if (isCompleted(day, exerciseIndex, setIndex)) {
        completedSets++;
        exerciseCompleted++;
      }
    }

    if (exerciseCompleted === exercise.sets) {
      completedExercises++;
    }
  });

  return {
    totalSets,
    completedSets,
    totalExercises,
    completedExercises,
    percent: totalSets
      ? Math.round((completedSets / totalSets) * 100)
      : 0
  };
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safe / 60);
  const remaining = safe % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remaining
  ).padStart(2, "0")}`;
}

function formatRest(seconds) {
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return remaining
      ? `${minutes}m ${remaining}s`
      : `${minutes} min`;
  }

  return `${seconds}s`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 3200);
}

function announce(message) {
  elements.notificationMessage.textContent = "";
  window.setTimeout(() => {
    elements.notificationMessage.textContent = message;
  }, 20);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTabs() {
  elements.tabs.innerHTML = "";

  DAYS.forEach((day) => {
    const button = document.createElement("button");
    const progress = getProgress(day);

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

    if (progress.completedSets > 0) {
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

function renderSummary() {
  const progress = getProgress();
  const degrees = progress.percent * 3.6;

  elements.dayProgressText.textContent =
    `${progress.completedSets}/${progress.totalSets}`;

  elements.exerciseProgressText.textContent =
    `${progress.completedExercises}/${progress.totalExercises}`;

  elements.progressPercent.textContent =
    `${progress.percent}%`;

  elements.progressRing.style.background = `
    radial-gradient(
      circle at center,
      var(--glass-strong) 61%,
      transparent 63%
    ),
    conic-gradient(
      var(--accent) ${degrees}deg,
      rgb(127 127 127 / 16%) ${degrees}deg
    )
  `;

  if (progress.totalSets === 0) {
    elements.sessionStatus.textContent = "Descanso";
  } else if (progress.percent === 100) {
    elements.sessionStatus.textContent = "Concluído";
  } else if (progress.completedSets > 0) {
    elements.sessionStatus.textContent = "Em andamento";
  } else {
    elements.sessionStatus.textContent = "Pronto";
  }
}

function renderWorkout() {
  const workout = getWorkout();

  elements.selectedDayTitle.textContent = workout.title;
  elements.sessionSubtitle.textContent = workout.subtitle;
  elements.dayNotes.value =
    state.notes[state.selectedDay] || "";

  elements.workoutList.innerHTML = "";

  if (!workout.exercises.length) {
    elements.workoutList.innerHTML = `
      <article class="exercise-card glass">
        <h3 class="exercise-title">Dia de recuperação</h3>
        <p class="exercise-meta">
          Descanse, faça mobilidade ou realize cardio leve.
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
        isCompleted(
          state.selectedDay,
          exerciseIndex,
          setIndex
        )
    ).filter(Boolean).length;

    card.className = "exercise-card glass";

    if (completedCount === exercise.sets) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <div class="exercise-header">
        <div>
          <h3 class="exercise-title">
            ${escapeHTML(exercise.name)}
          </h3>

          <p class="exercise-meta">
            ${exercise.sets} séries ·
            ${escapeHTML(exercise.reps)} ·
            ${formatRest(exercise.rest)} descanso
          </p>
        </div>

        <span class="technique-label">
          ${escapeHTML(exercise.technique)}
        </span>
      </div>

      <p class="exercise-tip">
        ${escapeHTML(exercise.tip)}
      </p>

      <div class="set-list"></div>
    `;

    const setList = card.querySelector(".set-list");

    for (
      let setIndex = 0;
      setIndex < exercise.sets;
      setIndex++
    ) {
      const checked = isCompleted(
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
      status.textContent = checked
        ? "Concluída"
        : "Pendente";

      const restButton = document.createElement("button");
      restButton.type = "button";
      restButton.className = "rest-button";
      restButton.textContent =
        `Descansar ${formatRest(exercise.rest)}`;
      restButton.setAttribute(
        "aria-label",
        `Iniciar descanso após ${exercise.name}`
      );

      checkbox.addEventListener("change", () => {
        updateSet(
          state.selectedDay,
          exerciseIndex,
          setIndex,
          checkbox.checked
        );

        if (checkbox.checked) {
          prepareTimer(exercise);
          startTimer(true);

          showToast(
            `Série ${setIndex + 1} concluída. Descanso iniciado.`
          );
        } else {
          showToast("Série desmarcada.");
        }

        render();
      });

      restButton.addEventListener("click", () => {
        prepareTimer(exercise);
        startTimer(false);
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
    elements.timerCard.classList.add("hidden");
    return;
  }

  elements.timerCard.classList.remove("hidden");

  elements.timerExercise.textContent =
    timer.exerciseName || "Próxima série";

  elements.timerDisplay.textContent =
    formatTime(timer.remaining);

  const ratio = timer.duration
    ? Math.max(0, Math.min(1, timer.remaining / timer.duration))
    : 0;

  elements.timerProgress.style.transform =
    `scaleX(${ratio})`;

  if (timer.status === "running") {
    elements.timerStateBadge.textContent = "Ativo";
    elements.timerMessage.textContent =
      "Recupere-se. A próxima série vem logo.";
  } else if (timer.status === "paused") {
    elements.timerStateBadge.textContent = "Pausado";
    elements.timerMessage.textContent =
      "O descanso está pausado.";
  } else if (timer.status === "finished") {
    elements.timerStateBadge.textContent = "Finalizado";
    elements.timerMessage.textContent =
      "Descanso finalizado. Próxima série.";
  } else {
    elements.timerStateBadge.textContent = "Pronto";
    elements.timerMessage.textContent =
      "Prepare-se para a próxima série.";
  }

  elements.pauseTimerButton.disabled =
    timer.status !== "running";

  elements.resumeTimerButton.disabled =
    timer.status !== "paused";

  elements.restartTimerButton.disabled =
    !timer.duration;

  elements.skipTimerButton.disabled =
    timer.status === "finished";
}

function render() {
  renderTabs();
  renderSummary();
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

function startTimer(autoStarted = false) {
  if (!state.timer.duration) {
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

  if (!autoStarted) {
    showToast("Descanso iniciado.");
  }

  announce("Descanso iniciado automaticamente.");
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

  showToast("Descanso pausado.");
}

function resumeTimer() {
  if (state.timer.status !== "paused") {
    return;
  }

  unlockAudio();

  state.timer.status = "running";
  state.timer.endAt =
    Date.now() + state.timer.remaining * 1000;

  saveState();
  startTimerLoop();
  renderTimer();

  showToast("Descanso retomado.");
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

  showToast("Descanso reiniciado.");
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

  showToast("Descanso pulado.");
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

  timerInterval = window.setInterval(
    updateTimer,
    250
  );

  updateTimer();
}

function stopTimerLoop() {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
}

function finishTimer() {
  renderTimer();
  playAlertSound();
  vibrateDevice();
  notifyRestFinished();

  announce("Descanso finalizado. Próxima série.");
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

    const oscillator =
      audioContext.createOscillator();

    const gain =
      audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      740,
      audioContext.currentTime
    );

    gain.gain.setValueAtTime(
      0.0001,
      audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.16,
      audioContext.currentTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.34
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(
      audioContext.currentTime + 0.34
    );
  } catch {
    // Notificação e vibração continuam disponíveis.
  }
}

function vibrateDevice() {
  if (
    state.vibration &&
    "vibrate" in navigator
  ) {
    navigator.vibrate([180, 90, 180]);
  }
}

async function notifyRestFinished() {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission !== "granted") {
    return;
  }

  try {
    if ("serviceWorker" in navigator) {
      const registration =
        await navigator.serviceWorker.ready;

      await registration.showNotification(
        "Descanso finalizado",
        {
          body: "A próxima série está pronta.",
          tag: "meu-treino-rest",
          renotify: true,
          silent: false
        }
      );
    } else {
      new Notification("Descanso finalizado", {
        body: "A próxima série está pronta."
      });
    }
  } catch {
    // O sistema pode bloquear notificações.
  }
}

async function requestNotifications() {
  if (!("Notification" in window)) {
    showToast("Notificações não são suportadas.");
    return;
  }

  try {
    const permission =
      await Notification.requestPermission();

    if (permission === "granted") {
      showToast("Notificações ativadas.");
      announce("Notificações ativadas.");
    } else {
      showToast("Notificações não foram permitidas.");
    }
  } catch {
    showToast("Não foi possível ativar notificações.");
  }
}

function resetDay() {
  const confirmed = window.confirm(
    `Redefinir o progresso de ${DAY_LABELS[state.selectedDay]}?`
  );

  if (!confirmed) {
    return;
  }

  const workout = getWorkout(state.selectedDay);

  workout.exercises.forEach((exercise, exerciseIndex) => {
    for (
      let setIndex = 0;
      setIndex < exercise.sets;
      setIndex++
    ) {
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
  showToast("Progresso redefinido.");
}

function saveNotes() {
  state.notes[state.selectedDay] =
    elements.dayNotes.value;

  saveState();
}

function toggleTheme() {
  const current =
    document.documentElement.dataset.theme || "light";

  const next =
    current === "light" ? "dark" : "light";

  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);

  elements.themeIcon.textContent =
    next === "dark" ? "☾" : "☼";
}

function restoreTheme() {
  const saved =
    localStorage.getItem(THEME_KEY);

  const theme =
    saved === "dark" || saved === "light"
      ? saved
      : "light";

  document.documentElement.dataset.theme = theme;
  elements.themeIcon.textContent =
    theme === "dark" ? "☾" : "☼";
}

function restoreTimer() {
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
    return;
  }

  navigator.serviceWorker
    .register("./service-worker.js", {
      scope: "./"
    })
    .catch((error) => {
      console.warn(
        "Service Worker não registrado:",
        error
      );
    });
}

function setupEvents() {
  elements.themeToggle.addEventListener(
    "click",
    toggleTheme
  );

  elements.resetDayButton.addEventListener(
    "click",
    resetDay
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
  restoreTheme();
  loadState();
  setupEvents();
  render();
  restoreTimer();
  registerServiceWorker();
}

init();