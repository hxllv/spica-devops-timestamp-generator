const nameInput = document.getElementById("spica-ext__name");
const setName = document.getElementById("spica-ext__name-set");
const set12h = document.getElementById("spica-ext__12h");
const setDow = document.getElementById("spica-ext__dow");
const curName = document.getElementById("spica-ext__cur-name");
const cur12h = document.getElementById("spica-ext__cur-12h");
const curDow = document.getElementById("spica-ext__cur-dow");

function saveName(e) {
  e.preventDefault();
  browser.storage.sync.set({ name: nameInput.value }, () => {
    browser.storage.sync.get(["name"], (result) => {
      curName.innerHTML = result.name;
    });
  });
}

function save12h() {
  browser.storage.sync.set({ h12c: set12h.checked }, () => {
    browser.storage.sync.get(["h12c"], (result) => {
      cur12h.innerHTML = result.h12c;
    });
  });
}

function saveDow() {
  browser.storage.sync.set({ dow: setDow.checked }, () => {
    browser.storage.sync.get(["dow"], (result) => {
      curDow.innerHTML = result.dow;
    });
  });
}

setName.addEventListener("click", saveName);
set12h.addEventListener("click", save12h);
setDow.addEventListener("click", saveDow);

window.onload = () => {
  browser.storage.sync.get(["name", "h12c", "dow"], (result) => {
    curName.innerHTML = result.name;
    cur12h.innerHTML = set12h.checked = result.h12c;
    curDow.innerHTML = setDow.checked = result.dow;
  });
};
