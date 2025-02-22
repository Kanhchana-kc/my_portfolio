// let menuLis = document.querySelectorAll(".menu_Links ul li");

// menuLis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // Remove active class from all menu items
//     document.querySelectorAll(".menu_Links ul li.active").forEach((activeEle) => {
//       activeEle.classList.remove("active");
//     });

//     // Add active class to the clicked menu item
//     e.target.classList.add("active");

//     // Get the corresponding section using the data-section attribute
//     const targetSection = document.querySelector(
//       `.sections > section[data-section="${e.target.dataset.section}"]`
//     );

//     if (targetSection) {
//       // Scroll to the section
//       targetSection.scrollIntoView({ behavior: "smooth" });

//       // Optional: Update visibility (if required for your logic)
//       document.querySelectorAll(".sections .visible").forEach((ele) => {
//         ele.classList.remove("visible");
//       });
//       targetSection.classList.add("visible");
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const menuLis = document.querySelectorAll(".menu_Links ul li");
//   const sections = document.querySelectorAll(".sections section");

//   menuLis.forEach((li) => {
//       li.addEventListener("click", () => {
//           // Remove 'active' class from all menu items
//           menuLis.forEach((item) => item.classList.remove("active"));

//           // Add 'active' class to the clicked menu item
//           li.classList.add("active");

//           // Get the target section from data-section attribute
//           const targetSection = li.getAttribute("data-section");

//           // Hide all sections and remove 'visible' class
//           sections.forEach((section) => section.classList.remove("visible"));

//           // Show the targeted section
//           const sectionToShow = document.querySelector(
//               `.sections section[data-section="${targetSection.trim()}"]`
//           );

//           if (sectionToShow) {
//               sectionToShow.classList.add("visible");
//               sectionToShow.scrollIntoView({ behavior: "smooth" });
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu_Links li");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const sectionId = link.getAttribute("data-section");
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }

            menuLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
});


