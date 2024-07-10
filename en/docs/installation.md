---
layout: modern
title: Installation
description: "Step-by-step installation guide for PiP Planner. Follow these instructions to install PiP Planner on your Windows computer and enable macros in Microsoft Access."
lang: en
permalink: /en/docs/installation/
keywords: "PiP installation, PiP Planner, download PiP, install PiP, enable macros"
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }} | {{ site.title }}</title>
    <meta name="description" content="{{ page.description }}">
    <meta name="keywords" content="{{ page.keywords }}">
    {% seo %}
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/installation.css">
</head>
<body>
    <div class="container">
        <h1>Installation</h1>
        <h2>Step-by-Step Installation Guide</h2>
        <p>Follow these steps to install PiP Planner on your Windows computer:</p>
        <ol>
            <li>
                <h4><strong>Download the Installer</strong>:</h4>
                <ul>
                    <li>Visit the <a href="https://nawrashaswia.github.io/CIPT/download.html" target="_blank" rel="noreferrer">PiP Planner official website</a> and download the PiP_Installer.exe file.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Run the Installer</strong>:</h4>
                <ul>
                    <li>Locate the downloaded PiP_Installer.exe file on your computer.</li>
                    <li>Double-click the file to run the installer.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Follow the Installation Prompts</strong>:</h4>
                <ul>
                    <li>You will see a welcome screen. Click "Next" to continue.</li>
                    <li>Choose the installation directory. By default, it is set to <span class="code">{userappdata}\PiPFLDR</span>.</li>
                    <li>Click "Next" and then "Install" to start the installation process.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Complete the Installation</strong>:</h4>
                <ul>
                    <li>Wait for the installer to copy all necessary files to your computer.</li>
                    <li>Once the installation is complete, click "Finish".</li>
                </ul>
            </li>
            <li>
                <h4><strong>Launch PiP Planner</strong>:</h4>
                <ul>
                    <li>A shortcut to PiP Planner will be created on your desktop.</li>
                    <li>Double-click the shortcut to launch the application.</li>
                </ul>
            </li>
        </ol>
        <h3><span style="color: #ff6347;"><strong>Enabling Macros</strong></span></h3>
        <p>If PiP Planner does not work correctly, you may need to enable macros in Microsoft Access. Follow these steps to enable macros:</p>
        <ol>
            <li>
                <h4><strong>Open Microsoft Access</strong>:</h4>
                <ul>
                    <li>Launch Microsoft Access from your Start menu or desktop shortcut.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Access Options</strong>:</h4>
                <ul>
                    <li>Click on the File tab in the top-left corner.</li>
                    <li>Select Options from the menu.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Trust Center Settings</strong>:</h4>
                <ul>
                    <li>In the Access Options window, select Trust Center from the left-hand menu.</li>
                    <li>Click on the Trust Center Settings button.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Macro Settings</strong>:</h4>
                <ul>
                    <li>In the Trust Center window, select Macro Settings from the left-hand menu.</li>
                    <li>Choose Enable all macros to allow all macros to run. (Note: This setting is less secure, as it allows all macros, including potentially harmful ones.)</li>
                    <li>Click OK to save the settings.</li>
                </ul>
            </li>
            <li>
                <h4><strong>Restart Microsoft Access</strong>:</h4>
                <ul>
                    <li>Close and reopen Microsoft Access for the changes to take effect.</li>
                </ul>
            </li>
        </ol>
        <p>By following these steps, you should be able to enable macros and ensure PiP Planner runs smoothly. If you encounter any issues, please refer to the <a href="/en/contact/">Contact Me</a> page on the website.</p>
    </div>

    <script src="{{ site.baseurl }}/assets/js/installation.js"></script>
</body>
</html>
