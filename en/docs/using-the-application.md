---
layout: modern
title: "Using the Application"
description: "A comprehensive guide to using PiP Planner effectively. Learn how to navigate through different features and make the most out of PiP Planner."
lang: en
permalink: /en/docs/using-the-application/
keywords: "using PiP Planner, PiP guide, PiP application, trading guide, financial planning"
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }} | {{ site.title }}</title>
    <meta name="description" content="{{ page.description }}">
    <meta name="keywords" content="{{ page.keywords }}">
    {% seo %}
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/usage.css">
</head>
<body>
    <div class="container">
        <h1 style="text-align: center;">Using the Application</h1>
        <h2 style="text-align: center;">This guide will help you navigate the PiP Planner</h2>
        
        <h3>1. Login Page</h3>
        <p>When you open PiP Planner, you will be greeted by the login screen. Enter your password to access the application. If you forget your password, click on "Forgot Password?" for assistance.</p>

        <h3>2. Dashboard Overview</h3>
        <p>After logging in, you will see the main dashboard. This is your central hub where you can quickly view your financial status, including total profits and losses. The dashboard provides various summaries, including your current balance, average daily profit, and order information.</p>
        <ul>
            <li><strong>Plan Dashboard</strong>: Displays your initial balance, current balance, expected plan profits, extra profit amount, average daily profit, total orders amount, and total orders quantity. It also shows the remaining balance, remaining days, and earnings needed for the day.</li>
            <li><strong>Orders Information</strong>: Shows the quantity and amount of win and loss orders, with their respective percentages.</li>
        </ul>

        <h3>3. Orders Dashboard</h3>
        <p>Navigate to the Orders Dashboard to view a summary of your win and loss orders. You can filter orders by date or specific criteria to analyze your trading performance over time.</p>
        <ul>
            <li><strong>Filter Orders</strong>: Use filters to view specific orders, such as the last 5 orders, only profits, losses, or orders within a specific period.</li>
        </ul>

        <h3>4. Plan Designer</h3>
        <p>The PiP Plan Designer allows you to create and manage detailed financial plans. You can set your initial balance, target profit, and the period over which you aim to achieve your goals. The PiP Advisor helps you by calculating necessary percentages and providing risk level analysis.</p>
        <ul>
            <li><strong>Scenario Selection</strong>: Choose from scenarios like "How much will I earn?", "How many days to reach my goal?", "What percentage do I need?", and "How much will I earn in fixed days?".</li>
            <li><strong>Plan Calculation</strong>: Enter details like initial balance, profit, period, and percentage. Click "Design Plan" to create your plan.</li>
        </ul>

        <h3>5. Plan Creation</h3>
        <p>In the Plan Creation section, you can create a new financial plan by entering your initial balance, profit percentage, total days, and start date. You can also exclude weekends from your trading days for a more accurate plan. Use the "Check Plan Risk Rate" button to evaluate the risk of your plan before finalizing it.</p>
        <ul>
            <li><strong>Plan Details</strong>: Enter details such as initial balance, increment score percentage, total days, and start date.</li>
            <li><strong>Exclude Weekends</strong>: Option to exclude weekends from the trading days.</li>
            <li><strong>Plan Risk Check</strong>: Check the risk rate of your plan before creating it.</li>
        </ul>

        <h3>6. Order Entry</h3>
        <p>Record your daily trades in the Order Entry section. Enter the trade date, profit or loss amount, and any additional notes. The current date is set by default, but you can manually enter a different date if needed.</p>
        <ul>
            <li><strong>Enter New Order</strong>: Input the trade date, profit or loss amount, and optional notes. Click "Save Order" to record the trade.</li>
        </ul>

        <h3>7. Closing Open Days</h3>
        <p>Use the Close Open Days section to manage and close your trading days using extra profit. This helps you stay on track with your daily trading goals.</p>
        <ul>
            <li><strong>Close Days</strong>: Select the days you want to close and use the available extra profit to achieve your goals.</li>
        </ul>

        <h3>8. Day Orders Report</h3>
        <p>Generate detailed reports of your daily trading activities in the Day Orders Report section. You can filter orders by date and view the full information for each day.</p>
        <ul>
            <li><strong>One Day Orders Report</strong>: This shows the total win orders, total open days, and details of each order.</li>
            <li><strong>Full Information Report</strong>: Select a specific day to view the full report.</li>
        </ul>

        <h3>9. Plan Reports</h3>
        <p>View comprehensive reports on your overall plan performance, including key metrics and financial status. This helps you track your progress and make informed decisions about your trading strategy.</p>
        <ul>
            <li><strong>Plan Days Report</strong>: Displays detailed information about each day's performance, including date, should earn amount, profit/loss, status, and total orders.</li>
        </ul>

        <h3>10. Control Panel</h3>
        <p>The Control Panel provides access to essential management tools such as data backup, data restore, user guide, and update checks. This ensures your data is safe and your application is up-to-date.</p>
        <ul>
            <li><strong>Reset Plan</strong>: Reset your current plan data.</li>
            <li><strong>Database Backup and Restore</strong>: Backup your current data or restore from a previous backup.</li>
            <li><strong>User Guide and Updates</strong>: Access the user guide and check for application updates.</li>
        </ul>

        <h3>11. Using Macros and Events for Scenarios</h3>

        <h4>11.1 Risk Assessment</h4>
        <ul>
            <li><strong>Highlighting Risk Values</strong>: Automatically highlights risk metrics in different colors based on their values.</li>
            <li><strong>Refreshing Risk Assessment</strong>: Calculates and displays risk metrics and provides advice on managing risk.</li>
            <li><strong>Setting Tooltips</strong>: Provides helpful tooltips for various form elements to assist users.</li>
        </ul>

        <h4>11.2 Plan Creation and Management</h4>
        <ul>
            <li><strong>Creating a Plan</strong>: Generates a new financial plan based on user input.</li>
            <li><strong>Checking Plan Risk</strong>: Evaluates the risk level of the user's plan.</li>
            <li><strong>Initializing Forms</strong>: Applies translations and initializes the form with default settings and tooltips.</li>
        </ul>

        <h4>11.3 Order Management</h4>
        <ul>
            <li><strong>Default Date Setting</strong>: Sets the default date and applies translations.</li>
            <li><strong>Recording New Orders</strong>: Logs a new trade entry and updates the order information.</li>
            <li><strong>Highlighting Order Amounts</strong>: Changes text color based on the order amount value to highlight profits and losses.</li>
        </ul>

        <h4>11.4 Navigation and Settings</h4>
        <ul>
            <li><strong>Language Switching</strong>: Switch between English and Arabic within the application.</li>
            <li><strong>Form Resizing and Centering</strong>: Adjusts and centers the subform within the main form for a better user experience.</li>
        </ul>

        <h4>11.5 Backup and Restore</h4>
        <ul>
            <li><strong>Data Backup</strong>: Backs up current data to ensure it's safe and can be restored if needed.</li>
            <li><strong>Data Restoration</strong>: Restores data from a previous backup, allowing you to recover important information.</li>
        </ul>
        <p>PiP Planner is designed to help you manage your daily trading activities, track your financial progress, and achieve your financial goals effectively. By following these structured steps and utilizing the application's features, you can make informed decisions and improve your trading strategies.</p>
    </div>
    <script src="{{ site.baseurl }}/assets/js/usage.js"></script>
</body>
</html>
