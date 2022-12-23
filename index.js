// Package that hides keys
require("dotenv").config();

// Prefix for commands

const prefix = ".";

// Import Discord JS

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
  ActivityType,
} = require(`discord.js`);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

// File control

const fs = require("fs");
const { writer } = require("repl");
const datasave = require("./datasave.json");

// Log in info

client.on("ready", () => {
  console.log("Beep Boop Online");
  client.user.setActivity(`you suffer from Railway, baka!`, {
    type: ActivityType.Watching,
  });
});

// Bot command handler

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // Message array not used yet

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  // Easter Eggs

  if (command === "arigato" && message.author.id == "198221520294772736") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      "https://media.discordapp.net/attachments/983178488456577065/1055151356459106387/ehjr8gwumta51.png?width=545&height=700"
    );
  }
  //Shiori command
  if (command === "ureshi" && message.author.id == "523893361799725076") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      "https://media.discordapp.net/attachments/1025535026999332925/1055519069756985354/103745560_p0_master1200.webp?width=526&height=701"
    );
  }

  // Info Commands

  // Ranks command
  if (command === "ranks") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description:
            "[Ranks](https://docs.google.com/spreadsheets/u/0/d/18VjvDwBrTinuWtqbxUxo0BNOvFpmztFO2p2D03tUxdA/htmlview#gid=1114939808)",
          color: 16711680,
        },
      ],
    });
  }
  // Luna command
  if (command === "luna") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          title: "Tower of Luna",
          color: 10813902,
          fields: [
            {
              name: "[Guia Chocolate](https://docs.google.com/spreadsheets/d/1qeANy8yjm0pXxKPyLPZ1ViquoO7VuflOVVosEpoJTI8/edit?usp=sharing)",
            },
            {
              name: "[Guia Detallada](https://docs.google.com/spreadsheets/d/1u3H0L2azdvFCLrCmlNh8SziDyIZlU7Pjk78BuSJaaVk/edit#gid=241958645)",
            },
          ],
        },
      ],
      attachments: [],
    });
  }
  // PvP command
  if (command === "pvp") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description: "[PvP](https://www.pcrdfans.com/en/battle)",
          color: 16711680,
        },
      ],
    });
  }
  // Banners command
  if (command === "banners") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description: "[Banners](https://i.imgur.com/GRClbpJ.jpg)",
          color: 16711680,
        },
      ],
    });
  }
  // UE command
  if (command === "ue") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description:
            "[UE](https://docs.google.com/spreadsheets/d/1JXbzIF4dWqzmmBwAxuNp74_v8eSM0tuDehWZtN9-lxY/edit#gid=504351475)",
          color: 16711680,
        },
      ],
    });
  }
  // Lvl command
  if (command === "lvl") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description:
            "[LvL](https://cdn.discordapp.com/attachments/1036808799895433236/1037922474135928832/YlBItDp.png)",
          color: 16711680,
        },
      ],
    });
  }
  // Event command
  if (command === "eventos") {
    setTimeout(() => message.delete(), 5000);
    message.channel.send({
      content: null,
      embeds: [
        {
          description:
            "[Eventos](https://fansubbing.com/priconne-upcoming-events-list/)",
          color: 16711680,
        },
      ],
    });
  }

  // Role Commands Adds

  // Enter role boss1
  if (command === "boss1" && message.channel.id == "1025525211182940313") {
    let user = message.member.id;
    message.member.roles.add("1036752816418586624");
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      ":white_check_mark: **<@" +
        user +
        "> HA SELECCIONADO BOSS 1 **:white_check_mark:"
    );
  }
  // Enter role boss2
  if (command === "boss2" && message.channel.id == "1025525211182940313") {
    let user = message.member.id;
    message.member.roles.add("1038597335678189599");
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      ":white_check_mark: **<@" +
        user +
        "> HA SELECCIONADO BOSS 1 **:white_check_mark:"
    );
  }
  // Enter role boss3
  if (command === "boss3" && message.channel.id == "1025525211182940313") {
    let user = message.member.id;
    message.member.roles.add("1038597841267986432");
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      ":white_check_mark: **<@" +
        user +
        "> HA SELECCIONADO BOSS 1 **:white_check_mark:"
    );
  }
  // Enter role boss4
  if (command === "boss4" && message.channel.id == "1025525211182940313") {
    let user = message.member.id;
    message.member.roles.add("1038597998797668392");
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      ":white_check_mark: **<@" +
        user +
        "> HA SELECCIONADO BOSS 1 **:white_check_mark:"
    );
  }
  // Enter role boss5
  if (command === "boss5" && message.channel.id == "1025525211182940313") {
    let user = message.member.id;
    message.member.roles.add("1038598004514504726");
    setTimeout(() => message.delete(), 5000);
    message.channel.send(
      ":white_check_mark: **<@" +
        user +
        "> HA SELECCIONADO BOSS 1 **:white_check_mark:"
    );
  }

  // Role Commands Removes

  // Leaves role boss1
  if (command == "bye" && message.channel.id == "1042046785448849448") {
    let user = message.member.id;
    message.member.roles.remove("1036752816418586624");
    setTimeout(() => message.delete(), 5000);
    message.channel
      .send(
        ":white_check_mark: **<@" +
          user +
          "> A SALIDO DEL CANAL**:white_check_mark:"
      )
      .then((message) => setTimeout(() => message.delete(), 5000));
  }
  // Leaves role boss2
  if (command == "bye" && message.channel.id == "1042046836615168083") {
    let user = message.member.id;
    message.member.roles.remove("1038597335678189599");
    setTimeout(() => message.delete(), 5000);
    message.channel
      .send(
        ":white_check_mark: **<@" +
          user +
          "> A SALIDO DEL CANAL**:white_check_mark:"
      )
      .then((message) => setTimeout(() => message.delete(), 5000));
  }
  // Leaves role boss3
  if (command == "bye" && message.channel.id == "1042046877853552691") {
    let user = message.member.id;
    message.member.roles.remove("1038597841267986432");
    setTimeout(() => message.delete(), 5000);
    message.channel
      .send(
        ":white_check_mark: **<@" +
          user +
          "> A SALIDO DEL CANAL**:white_check_mark:"
      )
      .then((message) => setTimeout(() => message.delete(), 5000));
  }
  // Leaves role boss4
  if (command == "bye" && message.channel.id == "1042046917955289088") {
    let user = message.member.id;
    message.member.roles.remove("1038597998797668392");
    setTimeout(() => message.delete(), 5000);
    message.channel
      .send(
        ":white_check_mark: **<@" +
          user +
          "> A SALIDO DEL CANAL**:white_check_mark:"
      )
      .then((message) => setTimeout(() => message.delete(), 5000));
  }
  // Leaves role boss5
  if (command == "bye" && message.channel.id == "1042046952575094864") {
    let user = message.member.id;
    message.member.roles.remove("1038598004514504726");
    setTimeout(() => message.delete(), 5000);
    message.channel
      .send(
        ":white_check_mark: **<@" +
          user +
          "> A SALIDO DEL CANAL**:white_check_mark:"
      )
      .then((message) => setTimeout(() => message.delete(), 5000));
  }
});

// Log in key

client.login(process.env["token"]);
