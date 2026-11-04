// ============ EDITE AQUI ============
const CONFIG = {
  nome: "Seu Nome",
  // WhatsApp com código do país + DDD + número, só números. Ex: 5521999998888
  whatsapp: "5521999999999",
  mensagem: "Olá! Vim pelo site e gostaria de mais informações 💕",
  instagram: "https://instagram.com/seuinstagram",
  endereco: "Rua Exemplo, 123 - Bairro, Cidade",
};
// ====================================

const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = waLink;
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-nome]").forEach((el) => (el.textContent = CONFIG.nome));
document.querySelectorAll("[data-endereco]").forEach((el) => (el.textContent = CONFIG.endereco));
document.querySelectorAll("[data-insta]").forEach((el) => {
  el.href = CONFIG.instagram;
  el.textContent = "@" + CONFIG.instagram.split("/").filter(Boolean).pop();
});
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Balão do WhatsApp
const bubble = document.getElementById("waBubble");
document.getElementById("waClose").addEventListener("click", () => bubble.classList.add("hide"));
setTimeout(() => bubble.classList.add("hide"), 15000);

// Animação ao rolar
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
