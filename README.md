# TokenMaster: Revolutionizing Bollywood Concert Ticketing with Blockchain

## Problem Statement

The traditional ticketing industry for Bollywood concerts faces several challenges:

1. Lack of Transparency: Opaque ticketing processes lead to distrust among consumers.
2. Security Concerns: Vulnerability to fraud and counterfeit tickets.
3. Unfair Distribution: Scalpers and bots often hoard tickets, making them inaccessible to genuine fans.
4. Poor User Experience: Complex and unreliable ticket purchasing processes.

TokenMaster aims to solve these issues by leveraging blockchain technology to create a transparent, secure, and fair ticketing platform for Bollywood concerts.

## Project Overview

TokenMaster is a groundbreaking blockchain-based ticketing platform that transforms the Bollywood concert ticketing experience. Key features include:

- **Transparent Transactions**: Built on Ethereum blockchain for open and immutable transaction records.
- **NFT Tickets**: Each ticket is a unique, verifiable NFT, ensuring authenticity.
- **Anti-Scalping Measures**: Single-ticket purchase limit to prevent hoarding.
- **User-Friendly Interface**: Intuitive React.js frontend for easy navigation and ticket purchase.
- **Secure Wallet Integration**: Seamless MetaMask integration for safe transactions.

## Technology Stack & Tools

- **Solidity**: Writing Smart Contracts & Tests
- **JavaScript**: React & Testing
- **Hardhat**: Development Framework
- **Ethers.js**: Blockchain Interaction
- **React.js**: Frontend Framework
- **MetaMask**: Ethereum Wallet Integration

## Requirements For Initial Setup

- Install NodeJS. Recommended to use the LTS version.
- Install MetaMask on your browser.

## Setting Up

1. **Clone/Download the Repository**

    ```bash
    git clone https://github.com/yourusername/tokenmaster.git
    cd tokenmaster
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run Tests**

    ```bash
    npx hardhat test
    ```

4. **Start Hardhat Node**

    ```bash
    npx hardhat node
    ```

5. **Run Deployment Script**

    In a separate terminal execute:

    ```bash
    npx hardhat run ./scripts/deploy.js --network localhost
    ```

6. **Start Frontend**

    ```bash
    npm run start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Workflow

The overall workflow of the TokenMaster app is illustrated in the following images:

### 1. Main Screen

![Main Screen](https://github.com/Rahul1227/TokenMaster/raw/main/images/mainscreen.png)

### 2. NFT Minted

![NFT Minted](https://github.com/Rahul1227/TokenMaster/raw/main/images/nft%20minted.png)

### 3. Seat Plan

![Seat Plan](https://github.com/Rahul1227/TokenMaster/raw/main/images/seatplan.png)


## Additional Information

TokenMaster is built on the principles of decentralization, immutability, and transparency. The integration of cutting-edge technologies such as Hardhat for local blockchain deployment and Ethers.js for seamless interaction with smart contracts from the frontend ensures a robust technical stack. The frontend, developed using React, provides a responsive and intuitive interface for users to browse, select, and purchase tickets to their favorite concerts with ease.

By enforcing a single-ticket purchase restriction, TokenMaster mitigates the risks associated with ticket scalping, ensuring fair and equitable access to concert tickets. This project not only benefits consumers by offering fair and transparent ticketing processes but also empowers event organizers with greater control over their ticket sales   .

## Acknowledgments

- **Swagatika Sahoo** - Project Guide, School of Computer Engineering, KIIT
- KIIT Deemed to be University

## Project Report

For an in-depth look at our methodologies, system design, and more, please refer to our [Full Project Report](https://github.com/Rahul1227/TokenMaster/blob/main/A%20PROJECT%20REPORT.pdf).

---

TokenMaster - Empowering Bollywood Enthusiasts with Blockchain Technology 🎶🎟️🔗

