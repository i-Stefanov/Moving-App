#!/bin/bash

# Ensure we're in a git repo
if [ ! -d .git ]; then
  echo "❌ This is not a Git repository. Run 'git init' and add a remote first."
  exit 1
fi

# Check for a remote
if ! git remote | grep -q origin; then
  echo "❌ No remote 'origin' found. Add one with:"
  echo "   git remote add origin https://github.com/i-Stefanov/Moving-App.git"
  exit 1
fi

# Prompt for commit message
read -p "Enter commit message: " msg

# Commit and push
git add .
git commit -m "$msg"
git push origin main
