import chalk from "chalk";
import _ from "lodash";
import fs from "node:fs";

const { includes, startCase, find } = _;

const log = console.log;

const URL = "https://d4builds.gg/page-data/index/page-data.json";

(async () => {
  log(chalk.blue("Scraping aspects... ") + chalk.green("✓"));

  // JSON data from supportedAspects.json
  // https://raw.githubusercontent.com/aeon0/d4lf/main/assets/lang/enUS/aspects.json
  fs.readFile("./d4lf/supportedAspects.json", "utf8", (err, data) => {
    if (err) {
      log(chalk.red("Error reading aspects from d4lf/aspects.json: ") + err);
      return;
    }

    const supportedAspects = JSON.parse(data);

    log(
      chalk.blue("Fetching aspect data from d4builds.gg... ") + chalk.green("✓")
    );

    fetch(URL)
      .then(async (res) => {
        const data = await res.json().catch((e) => {
          log(chalk.red("Error parsing JSON: ") + e);
        });

        const aspects = data.result.pageContext.codexes;

        let aspectList = [];

        // Whitelist only supported aspects
        Object.keys(supportedAspects).forEach((supportedAspectKey, index) => {
          const formatttedAspectKey = startCase(
            supportedAspectKey
              .replace("(ph)_", "")
              .replace("of_the_", "")
              .replace("of_", "")
          ).toLowerCase();

          const matchingAspectData = find(aspects, (data) => {
            return includes(
              data.name.toLowerCase().replace("'", ""),
              formatttedAspectKey
            );
          });

          if (matchingAspectData) {
            aspectList = [
              ...aspectList,
              { ...matchingAspectData, id: index, slug: supportedAspectKey },
            ];
          }
        });

        fs.writeFile(
          "./src/data/aspects.json",
          JSON.stringify(aspectList, null, 2),
          (err) => {
            if (err) {
              log(chalk.red("Error writing aspects to file: ") + err);
            } else {
              log(chalk.blue("Writing aspects to file... ") + chalk.green("✓"));
            }
          }
        );
      })
      .catch((e) => {
        log(chalk.red("Error scraping aspects from d4builds.gg: ") + e);
      });

    log(
      chalk.blue("Success! You can find the file at 'src/data/aspects.json'") +
        chalk.green("✓")
    );
  });
})();
