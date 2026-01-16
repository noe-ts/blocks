#!/bin/bash

# Script to create a new project based on apps/web template
# Usage: ./create-project.sh <project-name>

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if project name is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Project name is required${NC}"
    echo "Usage: ./create-project.sh <project-name>"
    exit 1
fi

PROJECT_NAME="$1"
TEMPLATE_DIR="apps/web"
NEW_PROJECT_DIR="apps/${PROJECT_NAME}"

# Validate project name (alphanumeric and hyphens only)
if [[ ! "$PROJECT_NAME" =~ ^[a-z0-9-]+$ ]]; then
    echo -e "${RED}Error: Project name must contain only lowercase letters, numbers, and hyphens${NC}"
    exit 1
fi

# Check if template exists
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo -e "${RED}Error: Template directory '$TEMPLATE_DIR' does not exist${NC}"
    exit 1
fi

# Check if project already exists
if [ -d "$NEW_PROJECT_DIR" ]; then
    echo -e "${RED}Error: Project '$NEW_PROJECT_DIR' already exists${NC}"
    exit 1
fi

echo -e "${GREEN}Creating new project: ${PROJECT_NAME}${NC}"

# Create the new project directory
mkdir -p "$NEW_PROJECT_DIR"

# Copy template files, excluding build artifacts and dependencies
echo "Copying template files..."
if command -v rsync &> /dev/null; then
    rsync -av \
        --exclude='node_modules' \
        --exclude='dist' \
        --exclude='.wrangler' \
        --exclude='.tanstack' \
        --exclude='.alchemy' \
        --exclude='.git' \
        "$TEMPLATE_DIR/" "$NEW_PROJECT_DIR/"
else
    # Fallback to cp if rsync is not available
    echo -e "${YELLOW}Warning: rsync not found, using cp instead${NC}"
    cp -R "$TEMPLATE_DIR"/* "$NEW_PROJECT_DIR/" 2>/dev/null || true
    cp -R "$TEMPLATE_DIR"/.[!.]* "$NEW_PROJECT_DIR/" 2>/dev/null || true
    # Remove excluded directories if they were copied
    rm -rf "$NEW_PROJECT_DIR/node_modules" \
           "$NEW_PROJECT_DIR/dist" \
           "$NEW_PROJECT_DIR/.wrangler" \
           "$NEW_PROJECT_DIR/.tanstack" \
           "$NEW_PROJECT_DIR/.alchemy" \
           "$NEW_PROJECT_DIR/.git" 2>/dev/null || true
fi

# Update package.json name
if [ -f "$NEW_PROJECT_DIR/package.json" ]; then
    echo "Updating package.json..."
    # Use sed to replace the name field (works on macOS and Linux)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/\"name\": \"web\"/\"name\": \"${PROJECT_NAME}\"/" "$NEW_PROJECT_DIR/package.json"
    else
        sed -i "s/\"name\": \"web\"/\"name\": \"${PROJECT_NAME}\"/" "$NEW_PROJECT_DIR/package.json"
    fi
fi

# Update root package.json to add dev script
if [ -f "package.json" ]; then
    echo "Updating root package.json..."
    # Check if script already exists
    if grep -q "\"dev:${PROJECT_NAME}\"" package.json; then
        echo -e "${YELLOW}Warning: Script 'dev:${PROJECT_NAME}' already exists in root package.json${NC}"
    else
        # Add the new dev script after the existing dev:web script
        # Use a temporary file for better compatibility
        TEMP_FILE=$(mktemp)
        NEW_SCRIPT_LINE="    \"dev:${PROJECT_NAME}\": \"turbo -F ${PROJECT_NAME} dev\","
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS sed - requires newline after a\
            sed "/\"dev:web\":/a\\
${NEW_SCRIPT_LINE}" package.json > "$TEMP_FILE"
        else
            # Linux sed
            sed "/\"dev:web\":/a\\${NEW_SCRIPT_LINE}" package.json > "$TEMP_FILE"
        fi
        mv "$TEMP_FILE" package.json
    fi
fi

# Update vite.config.ts port (increment by 1 for each new project)
# Count existing projects to determine port
EXISTING_PROJECTS=$(ls -d apps/*/ 2>/dev/null | wc -l | tr -d ' ')
NEW_PORT=$((3000 + EXISTING_PROJECTS))
if [ -f "$NEW_PROJECT_DIR/vite.config.ts" ]; then
    echo "Updating vite.config.ts port to ${NEW_PORT}..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/port: 3001/port: ${NEW_PORT}/" "$NEW_PROJECT_DIR/vite.config.ts"
    else
        sed -i "s/port: 3001/port: ${NEW_PORT}/" "$NEW_PROJECT_DIR/vite.config.ts"
    fi
fi

echo -e "${GREEN}✓ Project created successfully!${NC}"
echo ""
echo "Next steps:"
echo "  1. cd ${NEW_PROJECT_DIR}"
echo "  2. bun install"
echo "  3. bun run dev"
echo ""
echo "Or run from root:"
echo "  bun run dev:${PROJECT_NAME}"
echo ""
echo "The app will be available at: http://localhost:${NEW_PORT}"
echo ""
echo -e "${YELLOW}Note: If you need to configure deployment, update packages/infra/alchemy.run.ts${NC}"
