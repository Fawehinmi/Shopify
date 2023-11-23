const sections = [
  "customize-store",
  "add-product",
  "add-domain",
  "name-store",
  "payment",
];

let checkedSections = ["customize-store"];

// --------Close Trail Section----------

document.querySelector(".cancel-btn").addEventListener("click", (e) => {
  document.querySelector(".trial").classList.add("d-hidden");
});

document.querySelector(".profile-name-btn").addEventListener("click", (e) => {
  document.querySelector(".profile-dropdown").classList.toggle("d-none");

  if (
    !document
      .querySelector(".notification-dropdown")
      .classList.value.includes("d-none")
  )
    document.querySelector(".notification-dropdown").classList.add("d-none");
});
document.querySelector(".notification-btn").addEventListener("click", (e) => {
  document.querySelector(".notification-dropdown").classList.toggle("d-none");
  if (
    !document
      .querySelector(".profile-dropdown")
      .classList.value.includes("d-none")
  )
    document.querySelector(".profile-dropdown").classList.add("d-none");
});

// -------------------------------------

// --------- control open and close of each guide sections----------

document.querySelectorAll(".guide-section-title-container").forEach((c) => {
  const parent1 = c.parentNode;

  c.querySelector(".checkbox-container").addEventListener("click", (e) => {
    // if not checked, add loading spinner
    checkboxContainer = e.currentTarget;

    if (checkedSections.includes(parent1.id)) {
      checkboxContainer.querySelector(".checked").classList.add("d-none");
      checkboxContainer
        .querySelector(".checkbox-spinner")
        .classList.remove("d-none");

      setTimeout(() => {
        checkboxContainer.querySelector(".checkbox").classList.remove("d-none");
        checkboxContainer
          .querySelector(".checkbox-spinner")
          .classList.add("d-none");
      }, 100);

      checkedSections = checkedSections.filter(
        (sections) => sections != parent1.id
      );
    } else {
      checkboxContainer.querySelector(".checkbox").classList.add("d-none");

      checkboxContainer
        .querySelector(".checkbox-spinner")
        .classList.remove("d-none");

      setTimeout(() => {
        checkboxContainer.querySelector(".checked").classList.remove("d-none");

        checkboxContainer
          .querySelector(".checkbox-spinner")
          .classList.add("d-none");
      }, 100);
      checkedSections.push(parent1.id);
    }

    document.querySelector(
      ".completed"
    ).innerHTML = `${checkedSections.length} / ${sections.length} completed`;

    document.querySelector(".progress-bar").style.width =
      parseInt((checkedSections.length / sections.length) * 100) + "%";
  });

  c.addEventListener("click", (e) => {
    document.querySelectorAll(".guide-section-title").forEach((t) => {
      t.classList.remove("font-bold");
    });
    parent1.querySelector(".guide-section-title").classList.toggle("font-bold");

    const parent = e.currentTarget.parentNode;

    document.querySelectorAll(".guide-section-body").forEach((s) => {
      const parent = s.parentNode;
      parent.classList.remove("bg-gray");

      if (!s.classList.value.includes("d-none")) s.classList.add("d-none");
    });
    parent.classList.add("bg-gray");

    const child = parent.querySelector(".guide-section-body");

    child.classList.toggle("d-none");
    addPointer();
    e.currentTarget.classList.remove("pointer");
  });
});

const addPointer = () => {
  document.querySelectorAll(".guide-section-title-container").forEach((c) => {
    c.classList.add("pointer");
  });
};

document.querySelector(".open-guide-btn").addEventListener("click", (e) => {
  document.querySelector(".close-guide-btn").classList.toggle("d-none");
  document.querySelector(".open-guide-btn").classList.toggle("d-none");
  document.querySelector("#guide-body").classList.toggle("d-none");
});

document.querySelector(".close-guide-btn").addEventListener("click", (e) => {
  document.querySelector(".close-guide-btn").classList.toggle("d-none");
  document.querySelector(".open-guide-btn").classList.toggle("d-none");
  document.querySelector("#guide-body").classList.toggle("d-none");
});
