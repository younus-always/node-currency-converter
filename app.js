import https from 'https';
import readline from "readline";
import chalk from 'chalk';
import dotenv from "dotenv";
dotenv.config();

const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});

const convertCurrency = (amount, rate) => {
      return (amount * rate).toFixed(2)
};

https.get(process.env.URL, (res) => {
      let data = "";
      res.on("data", (chunk) => {
            data += chunk
      });

      res.on("end", () => {
            const rates = JSON.parse(data).conversion_rates;

            rl.question("\nEnter the amount in USD: ", (amount) => {

                  rl.question("Enter the target currency (e.g ., BDT, INR, EUR): ", (currency) => {
                        const rate = rates[currency.toUpperCase()]

                        if (rate) {
                              console.log(`💲${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`)
                        } else {
                              console.log(chalk.bgRed.bold(` Invalid Currency Code: ${currency} `));
                              console.log(`Here are all valid currency code:👇\n${Object.keys(rates)}\n`);
                        }
                        rl.close()
                  })
            })
      });

      res.on("error", (err) => {
            console.log(err)
      });
});