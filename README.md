# Dash DApp Example

This repository provides an example of building a decentralized application (DApp) using the Dash Platform. The project demonstrates how to create identities, deploy data contracts, and interact with documents on the Dash blockchain.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LexxXell/dash-simple-dapp
   cd dash-simple-dapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```bash
   MNEMONIC="your_mnemonic"
   CONTRACT_ID="your_contract_id"
   OWNER_IDENTIFIER="your_owner_identifier"
   DOCUMENT_NAME="your_document_name"
   ```

## Usage

This project provides several scripts to interact with the Dash Platform.

### Generate New Mnemonic

Generate a new mnemonic phrase to create a new wallet.

```bash
npm run dash:new_mnemonic
```

### Get Address

Get the first address from the wallet.

```bash
npm run dash:address
```

### Register Identity

Create and register a new identity on the Dash Platform.

```bash
npm run identity:register
```

### Deploy Data Contract

Deploy a data contract based on a predefined schema.

```bash
npm run dataContract:deploy
```

### Push Document

Create and publish a document associated with the deployed data contract.

```bash
npm run document:push
```

### Fetch Document

Retrieve documents from the Dash Platform based on the contract.

```bash
npm run document:get
```

## License

This project is licensed under the MIT License.