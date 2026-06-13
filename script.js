const devices = {
  "Lava LZG409": {
    sensi: {
      general: 100,
      redDot: 95,
      scope2x: 90,
      scope4x: 80,
      sniper: 55,
      freeLook: 75
    }
  },

  "Samsung Galaxy A15": {
    sensi: {
      general: 95,
      redDot: 90,
      scope2x: 85,
      scope4x: 75,
      sniper: 50,
      freeLook: 75
    }
  },

  "Redmi Note 13": {
    sensi: {
      general: 95,
      redDot: 92,
      scope2x: 88,
      scope4x: 78,
      sniper: 55,
      freeLook: 75
    }
  },

  "Realme Narzo 60": {
    sensi: {
      general: 90,
      redDot: 88,
      scope2x: 85,
      scope4x: 70,
      sniper: 50,
      freeLook: 75
    }
  },

  "Vivo Y21": {
    sensi: {
      general: 100,
      redDot: 96,
      scope2x: 92,
      scope4x: 85,
      sniper: 60,
      freeLook: 80
    }
  }
};

function generateSensi() {
  const name = document.getElementById("device").value.trim();

  const resultDiv = document.getElementById("result");

  if (!devices[name]) {
    resultDiv.innerHTML = `
      <h3>Device not found</h3>
      <p>Try typing exact name like: Redmi Note 13</p>
    `;
    return;
  }

  const s = devices[name].sensi;

  resultDiv.innerHTML = `
    <h2>${name}</h2>
    <p>General: ${s.general}</p>
    <p>Red Dot: ${s.redDot}</p>
    <p>2X Scope: ${s.scope2x}</p>
    <p>4X Scope: ${s.scope4x}</p>
    <p>Sniper: ${s.sniper}</p>
    <p>Free Look: ${s.freeLook}</p>
  `;
    }
