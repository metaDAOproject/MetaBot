# MetaBot

MetaBot is an AI Discord bot that allows users to ask questions about a specific channel in a Discord server. This is useful for getting a summary of information without the need to read through hours of chat logs.

## Installation

```bash
npm install
```

## Installation

```
DISCORD_BOT_TOKEN= Your discord bot token
DISCORD_CLIENT_ID= Your discord client id
DISCORD_CLIENT_SECRET= your discord client secrete
DISCORD_GUILD_ID= Your discord server id
DISCORD_PROPOSAL_CATEGORY_ID= The Category ID containing the channels the bot is allowed to respond to.

OPEN_AI_KEY=
```

## Usage

Deploy command updates.

```bash
cd deploy

ts-node deploy-commands.ts
```

Run the bot in development mode.

```bash
ts-node index.ts
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
