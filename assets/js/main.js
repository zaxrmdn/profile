<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zakaria | DevOps Engineer</title>

  <!-- TailwindCSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <!-- Custom Styles -->
  <link rel="stylesheet" href="assets/css/custom.css">
  <!-- AOS (Animate on Scroll) CSS -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body class="bg-gray-50 text-gray-800 scroll-smooth">

  <!-- ===== Navigation ===== -->
  <nav class="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm">
    <div class="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
      <a href="#home" class="font-bold text-indigo-600 text-xl">Zakaria</a>
      <ul class="hidden md:flex space-x-6 font-medium">
        <li><a href="#about" class="hover:text-indigo-600">About</a></li>
        <li><a href="#skills" class="hover:text-indigo-600">Skills</a></li>
        <li><a href="#projects" class="hover:text-indigo-600">Projects</a></li>
        <li><a href="#blog" class="hover:text-indigo-600">Blog</a></li>
        <li><a href="#contact" class="hover:text-indigo-600">Contact</a></li>
      </ul>
      <!-- Social icons -->
      <div class="flex items-center space-x-4">
        <a href="https://github.com/zakariaramadan" target="_blank" aria-label="GitHub" class="text-gray-600 hover:text-indigo-600 text-lg"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/zakariaramadan" target="_blank" aria-label="LinkedIn" class="text-gray-600 hover:text-indigo-600 text-lg"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/zakariadev" target="_blank" aria-label="Twitter" class="text-gray-600 hover:text-indigo-600 text-lg"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </nav>

  <!-- ===== Header / Hero ===== -->
  <header id="home" class="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-16">
    <div class="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600"></div>

    <h1 class="hero-title text-5xl md:text-7xl font-extrabold text-white mb-4">Hi, I'm Zakaria</h1>
    <p class="hero-subtitle text-xl md:text-2xl text-white mb-8 max-w-xl">DevOps Engineer who automates, monitors & visualises everything.</p>

    <a href="#projects" class="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-transform">See My Work</a>

    <!-- floating shapes -->
    <div class="bg-shapes">
      <span class="absolute w-24 h-24 bg-white/10 rounded-full top-10 left-1/4 blur-xl"></span>
      <span class="absolute w-16 h-16 bg-white/10 rounded-full bottom-20 right-1/3 blur-xl"></span>
      <span class="absolute w-20 h-20 bg-white/10 rounded-full top-1/3 right-1/4 blur-xl"></span>
    </div>
  </header>

  <!-- ===== About ===== -->
  <section id="about" class="py-24" data-aos="fade-up">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-bold mb-6 text-center">About Me</h2>
      <p class="max-w-3xl mx-auto text-lg leading-relaxed text-center">
        I’m a cloud-native & automation enthusiast who loves building reliable systems and sharing knowledge.
      </p>

      <!-- Profile Card -->
      <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <img src="assets/img/profile.jpg" alt="Zakaria Photo" class="w-40 h-40 object-cover rounded-full shadow-lg">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-semibold mb-1">Zakaria Ramadan</h3>
          <p class="text-indigo-600">DevOps & Cloud Engineer</p>
          <p class="mt-4 text-gray-600">Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Skills ===== -->
  <section id="skills" class="py-24 bg-gray-100" data-aos="fade-up">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <h3 class="text-xl font-semibold mb-2">CI/CD</h3>
          <p>GitHub Actions, Jenkins, GitLab CI</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <h3 class="text-xl font-semibold mb-2">Cloud</h3>
          <p>AWS, GCP, Azure</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <h3 class="text-xl font-semibold mb-2">Containers</h3>
          <p>Docker, Kubernetes, Helm</p>
        </div>
        <div class="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <h3 class="text-xl font-semibold mb-2">Monitoring</h3>
          <p>Zabbix, Prometheus, Grafana</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Projects ===== -->
  <section id="projects" class="py-24" data-aos="fade-up">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a href="https://github.com/zakariaramadan/project1" target="_blank" class="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all">
          <img src="assets/img/project1.png" alt="Project 1 Screenshot" class="rounded-lg mb-4 group-hover:scale-105 transition-transform">
          <h3 class="text-xl font-semibold mb-2">Zabbix Terraform Module</h3>
          <p class="text-gray-600">Reusable module to deploy Zabbix on AWS with autoscaling.</p>
        </a>
        <a href="https://github.com/zakariaramadan/project2" target="_blank" class="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all">
          <img src="assets/img/project2.png" alt="Project 2 Screenshot" class="rounded-lg mb-4 group-hover:scale-105 transition-transform">
          <h3 class="text-xl font-semibold mb-2">Grafana Reporting Tool</h3>
          <p class="text-gray-600">Automated PDF reports from Grafana dashboards via serverless functions.</p>
        </a>
        <a href="https://github.com/zakari

