---
layout: default
title: Introduction
---


# Introduction

The CIPT Application helps you manage your finances effectively. This guide will walk you through its features and how to use it.222
<p style="text-align: center;"><strong><span style="font-size: 22px;">werwerwerwerwer</span></strong></p>
<ul>
    <li><strong>Bold Text</strong>: Highlight the text you want to make bold and click the Bold button (B).</li>
    <li><strong>Increase Font Size</strong>: Highlight the text you want to enlarge and select a larger font size from the dropdown menu.</li>
    <li><strong>Highlight Text</strong>: Change the background color of the selected text to highlight it.</li>
    <li><strong>Headings</strong>: Change the text to headings (H1, H2, H3, etc.) to make them larger and more prominent.</li>
    <li><strong>Links</strong>: Add hyperlinks to text.</li>
</ul>
<h3>Step 4: Enable GitHub Pages</h3>
<ol>
<li>
<p><strong>Go to Repository Settings</strong>:</p>
<ul>
<li>Navigate to your repository on GitHub.</li>
<li>Click on <code>Settings</code>.</li>
</ul>
</li>
<li>
<p><strong>Enable GitHub Pages</strong>:</p>
<ul>
<li>Scroll down to the <code>Pages</code> section.</li>
<li>Under <code>Source</code>, select the branch you want to use (e.g., <code>main</code> or <code>master</code>) and the folder (usually <code>/root</code> for the root directory).</li>
<li>Click <code>Save</code>.</li>
</ul>
</li>
<li>
<p><strong>Access Your Website</strong>:</p>
<ul>
<li>Your website will be published at <code>https://your-username.github.io/your-repository-name/</code>.</li>
<li>It might take a few minutes for the site to be live.</li>
</ul>
</li>
</ol>
<h3>Step 5: Add Documentation and Resources</h3>
<ol>
<li>
<p><strong>Create a <code>docs</code> Folder</strong>:</p>
<ul>
<li>In your local repository, create a <code>docs</code> folder for additional documentation and resources.</li>
<li>Add your documentation files (e.g., HTML files, PDFs, etc.) to the <code>docs</code> folder.</li>
</ul>
</li>
<li>
<p><strong>Update Links</strong>:</p>
<ul>
<li>Ensure that the links in your <code>index.html</code> file point to the correct paths in the <code>docs</code> folder.</li>
</ul>
</li>
<li>
<p><strong>Commit and Push Changes</strong>:</p>
<ul>
<li>Add, commit, and push the changes to GitHub:
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">sql
<div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center">Copy code</button></span></div>
</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sql">git <span class="hljs-keyword">add</span> . git <span class="hljs-keyword">commit</span> <span class="hljs-operator">-</span>m "Add documentation and resources" git push origin main </code></div>
</div>
</li>
</ul>
</li>
</ol>
<h3>Example Folder Structure</h3>
<p>Your repository folder structure might look like this</p>
