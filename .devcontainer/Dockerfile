FROM mcr.microsoft.com/devcontainers/javascript-node:24

# 시스템 패키지 업데이트 및 필수 도구 설치
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    wget \
    vim \
    zsh \
    jq \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Claude Code CLI 설치
RUN npm install -g @anthropic-ai/claude-code
