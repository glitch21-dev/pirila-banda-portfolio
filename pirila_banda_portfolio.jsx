<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pirila Banda | Portfolio</title>

  <style>
    :root {
      --bg: #0b0b10;
      --panel: #11111a;
      --purple: #a371f7;
      --purple2: #6d28d9;
      --text: #e5e7eb;
      --muted: #9ca3af;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Courier New", monospace;
    }

    body {
      background: radial-gradient(circle at top, #151523, var(--bg));
      color: var(--text);
      overflow-x: hidden;
    }

    /* subtle animated grid */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image: linear-gradient(rgba(163,113,247,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(163,113,247,0.05) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      animation: gridMove 20s linear infinite;
    }

    @keyframes gridMove {
      from { transform: translateY(0); }
      to { transform: translateY(40px); }
    }

    nav {
      display: flex;
      justify-content: space-between;
      padding: 20px 40px;
      border-bottom: 1px solid rgba(163,113,247,0.2);
      position: sticky;
      top: 0;
      background: rgba(10,10,15,0.7);
      backdrop-filter: blur(10px);
      z-index: 10;
    }

    nav h1 {
      color: var(--purple);
      font-size: 18px;
    }

    nav a {
      color: var(--muted);
      margin-left: 20px;
      text-decoration: none;
      transition: 0.3s;
      cursor: pointer;
    }

    nav a:hover {
      color: var(--purple);
    }

    section {
      display: none;
      padding: 80px 20px;
      max-width: 1000px;
      margin: auto;
      animation: fade 0.6s ease;
    }

    section.active {
      display: block;
    }

    @keyframes fade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero h2 {
      font-size: 40px;
      color: var(--purple);
    }

    .typing {
      border-right: 2px solid var(--purple);
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
    }

    .card {
      background: rgba(17,17,26,0.8);
      border: 1px solid rgba(163,113,247,0.2);
      padding: 20px;
      border-radius: 12px;
      margin: 10px;
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: var(--purple);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }

    .muted { color: var(--muted); }

    .btn {
      display: inline-block;
      margin-top: 10px;
      color: var(--purple);
      border: 1px solid var(--purple);
      padding: 5px 10px;
      border-radius: 6px;
      text-decoration: none;
      transition: 0.3s;
    }

    .btn:hover {
      background: var(--purple);
      color: black;
    }

    footer {
      text-align: center;
      padding: 40px;
      color: var(--muted);
    }
  </style>
</head>
<body>

<nav>
  <h1>Pirila Banda</h1>
  <div>
    <a onclick="show('home')">/home</a>
    <a onclick="show('about')">/about</a>
    <a onclick="show('projects')">/projects</a>
    <a onclick="show('contact')">/contact</a>
  </div>
</nav>

<!-- HOME -->
<section id="home" class="active hero">
  <h2 class="typing" id="typing"></h2>
  <p class="muted" style="margin-top:15px;">
    4th Year Computer Science Student | Full-Stack Developer | AI Enthusiast
  </p>
</section>

<!-- ABOUT -->
<section id="about">
  <h2 style="color:var(--purple)">/about-me</h2>
  <p class="muted" style="margin-top:15px; line-height:1.6;">
    I am a final-year Computer Science student passionate about building scalable systems,
    AI tools, and modern web applications. I focus on writing clean, reliable, and efficient code.
  </p>
</section>

<!-- PROJECTS -->
<section id="projects">
  <h2 style="color:var(--purple)">/projects</h2>

  <div class="grid" style="margin-top:20px;">

    <div class="card">
      <h3>Gesture-Control Mouse</h3>
      <p class="muted">AI hand tracking cursor control</p>
      <a class="btn" href="#">GitHub</a>
    </div>

    <div class="card">
      <h3>AI Summarizer</h3>
      <p class="muted">NLP document summarization tool</p>
      <a class="btn" href="#">GitHub</a>
    </div>

    <div class="card">
      <h3>Employee System</h3>
      <p class="muted">Full-stack management dashboard</p>
      <a class="btn" href="#">GitHub</a>
    </div>

  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <h2 style="color:var(--purple)">/contact</h2>
  <p class="muted" style="margin-top:10px;">
    Email: pirila@example.com <br>
    GitHub: github.com/pirila <br>
    LinkedIn: linkedin.com/in/pirila
  </p>
</section>

<footer>
  Built with 💜 by Pirila Banda
</footer>

<script>
  function show(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // typing effect
  const text = "Hi, I'm Pirila Banda";
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
</script>

</body>
</html>