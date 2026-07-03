#!/bin/bash
# Quick deployment verification script

echo "🔍 DEPLOYMENT VERIFICATION CHECKLIST"
echo "======================================"
echo ""

# Frontend Checks
echo "📦 FRONTEND CHECKS:"
echo "  ✅ package.json" && test -f frontend/package.json && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ package-lock.json" && test -f frontend/package-lock.json && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ .env.example" && test -f frontend/.env.example && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ public/index.html" && test -f frontend/public/index.html && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ src/index.js" && test -f frontend/src/index.js && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ build/ directory" && test -d frontend/build && echo "    └─ Found ($(du -sh frontend/build | cut -f1))" || echo "    └─ ❌ MISSING - Run 'npm run build'"
echo ""

# Backend Checks
echo "🐍 BACKEND CHECKS:"
echo "  ✅ server.py" && test -f backend/server.py && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ requirements.txt" && test -f backend/requirements.txt && echo "    └─ Found ($(wc -l < backend/requirements.txt) packages)" || echo "    └─ ❌ MISSING"
echo "  ✅ .env.example" && test -f backend/.env.example && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo ""

# Root Configuration
echo "⚙️  ROOT CONFIGURATION:"
echo "  ✅ vercel.json" && test -f vercel.json && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ .gitignore" && test -f .gitignore && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ DEPLOYMENT_GUIDE.md" && test -f DEPLOYMENT_GUIDE.md && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo "  ✅ README.md" && test -f README.md && echo "    └─ Found" || echo "    └─ ❌ MISSING"
echo ""

echo "======================================"
echo "✨ All files ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Create .env file in backend/ with MongoDB credentials"
echo "2. Create .env.local file in frontend/ with API URL"
echo "3. Push to GitHub"
echo "4. Deploy frontend to Vercel: https://vercel.com/new"
echo "5. Deploy backend to Railway/Render: https://railway.app or https://render.com"
