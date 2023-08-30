# React ChatGPT

A ChatGPT built using ReactJS, NodeJS, and the OpenAI Completion API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This project is a clone of ChatGPT, utilizing the power of the OpenAI Completion API to create a chatbot interface. It allows users to interact with an AI-powered chatbot and receive responses based on the input they provide.

## Features

- Real-time chat interface.
- Interaction with an AI-powered chatbot.
- Simple and intuitive user experience.

## Setup

### Prerequisites

- Node.js (>= 12.0.0)
- OpenAI API Key (sign up at https://beta.openai.com/signup/ if you don't have one)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prasadhonrao/openai-projects/tree/main
   ```

2. Navigate to the project directory:

   ```bash
   cd react-chatgpt
   ```

3. Install nodejs dependencies:

   ```bash
   cd client
   npm install
   ```

4. Rename the example.env file in the server directory to .env:

   ```bash
   mv example.env .env
   ```

5. Start NodeJS Server

   ```bash
   npm run start:backend
   ```

6. Start React Client App

   ```bash
   npm run start:frontend
   ```

7. The app will open in your default web browser. Interact with the ChatGPT clone through the chat interface.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork: git push origin feature-name.
5. Create a pull request in this repository.
6. Please make sure to follow the code of conduct and contribution guidelines before submitting your pull request.
