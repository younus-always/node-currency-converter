# 💱 Currency Converter CLI

A simple Node.js command-line application to convert USD to various currencies using the ExchangeRate API
.
The app fetches real-time conversion rates and provides quick conversions with colored CLI outputs.

## 📑 Table of Contents

- [Features](#-features)

- [Installation](#️-installation)

- [Configuration](#-configuration)

- [Usage](#-usage)

- [Examples](#-examples)

- [Dependencies](#-dependencies)

- [Troubleshooting](#-troubleshooting)

- [Contributing](#-contribution)

- [License](#-license)

## ✨ Features

- Convert USD to any supported currency in real-time.

- CLI prompts for amount and target currency code.

- Validates user input and shows available currency codes if invalid.

- Colorized error messages with chalk.

- Uses dotenv for API key management.

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency_converter.git
   cd currency_converter
   ```

2. Install dependencies:

```bash
npm install
```

## 🔑 Configuration

3. Get a free API key from [ExchangeRate API.](https://www.exchangerate-api.com/ "Go to ExchangeRate API")

4. Create a .env file in the project root:

```bash
EXCHANGERATE_API_KEY=your_api_key_here
URL=https://v6.exchangerate-api.com/v6/your_api_key_here/latest/USD
```

## 🚀 Usage

Run the app in development mode:

```bash
npm run dev
```

Or directly:

```bash
node app.js
```

You’ll be prompted to enter:

- An amount in USD

- A target currency code (e.g., INR, EUR, BDT)

## 📌 Examples

```bash
Enter the amount in USD: 100
Enter the target currency (e.g ., BDT, INR, EUR): EUR
💲100 USD is approximately 92.34 EUR
```

Invalid input example:

```bash
Enter the target currency (e.g ., BDT, INR, EUR): XYZ
Invalid Currency Code: XYZ
Here are all valid currency code:👇
USD, EUR, INR, BDT, GBP, ...
```

## 📦 Dependencies

- [chalk](https://www.npmjs.com/package/chalk) CLI color styling

- [dotenv](https://www.npmjs.com/package/dotenv) Environment variable management

## 🛠 Troubleshooting

- Invalid API key: Ensure your .env file contains a valid key and URL.

- Network errors: Check your internet connection or API availability.

- Unsupported currency code: The app will list valid currency codes.

👥 Contributing

Contributions are welcome!

1. Fork the repo

2. Create a feature branch (git checkout -b feature-name)

3. Commit changes (git commit -m "Add feature")

4. Push to your fork and open a Pull Request

## 📜 License

This project is licensed under the ISC License.
