<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CIPT Application</title>
    <link rel="stylesheet" href="/CIPT/assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .navbar {
            position: sticky;
            top: 0;
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            width: 100%;
            text-align: right;
            z-index: 1000;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .navbar a, .dropdown {
            color: #fff;
            text-decoration: none;
            padding: 0 15px;
            display: inline-block;
            position: relative;
        }
        .navbar a:hover, .dropdown:hover .dropbtn {
            text-decoration: underline;
        }
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #333;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        .dropdown-content a {
            color: #fff;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        .dropdown-content a:hover {
            background-color: #575757;
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .blocks {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        .block {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
            width: calc(33% - 40px);
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .block:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .block h2 {
            color: #333;
            margin-bottom: 10px;
        }
        .block p {
            color: #666;
        }
        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        .logo {
            display: block;
            margin: 20px auto;
            width: 100px;
        }
    </style>
</head>
<body>
    <img src="/CIPT/logo.png" alt="CIPT Logo" class="logo">
    <div class="navbar">
        <a href="/CIPT/"><i class="fas fa-home"></i> Home</a>
        <div class="dropdown">
            <a class="dropbtn"><i class="fas fa-book"></i> Contents</a>
            <div class="dropdown-content">
                <a href="/CIPT/docs/introduction.html">Introduction</a>
                <a href="/CIPT/docs/installation.html">Installation</a>
                <a href="/CIPT/docs/features.html">Features</a>
                <a href="/CIPT/docs/using-the-application.html">Using the Application</a>
                <a href="/CIPT/docs/faq.html">FAQ</a>
            </div>
        </div>
        <a href="https://www.youtube.com/your-channel" target="_blank"><i class="fab fa-youtube"></i> YouTube</a>
        <a href="/CIPT/download.html"><i class="fas fa-download"></i> Download CIPT</a>
        <a href="/CIPT/about.html"><i class="fas fa-info-circle"></i> About CIPT</a>
        <div id="google_translate_element" style="margin-left: auto;"></div>
    </div>
    <div class="container">
        <div class="blocks">
            <div class="block" style="background-color: #ffeb3b;">
                <h2>Introduction</h2>
                <p>Learn about the CIPT application and its purpose.</p>
                <a href="/CIPT/docs/introduction.html" class="btn">Read More</a>
            </div>
            <div class="block" style="background-color: #8bc34a;">
                <h2>Installation</h2>
                <p>Step-by-step guide to install the CIPT application.</p>
                <a href="/CIPT/docs/installation.html" class="btn">Read More</a>
            </div>
            <div class="block" style="background-color: #03a9f4;">
                <h2>Features</h2>
                <p>Discover the features that make CIPT powerful.</p>
                <a href="/CIPT/docs/features.html" class="btn">Read More</a>
            </div>
            <div class="block" style="background-color: #ff5722;">
                <h2>Using the Application</h2>
                <p>Learn how to use CIPT to manage your finances.</p>
                <a href="/CIPT/docs/using-the-application.html" class="btn">Read More</a>
            </div>
            <div class="block" style="background-color: #9c27b0;">
                <h2>FAQ</h2>
                <p>Get answers to the most frequently asked questions.</p>
                <a href="/CIPT/docs/faq.html" class="btn">Read More</a>
            </div>
            <div class="block" style="background-color: #ffc107;">
                <h2>Download</h2>
                <p>Download the latest version of CIPT.</p>
                <a href="/CIPT/download.html" class="btn">Download Now</a>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; {{ site.time | date: "%Y" }} CIPT developed by Nawras with <span style="color: red;">&hearts;</span></p>
    </footer>
</body>
</html>
