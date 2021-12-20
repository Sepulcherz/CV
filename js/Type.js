import GlitchedWriter from "https://cdn.skypack.dev/glitched-writer@2.0.29";

const writer = new GlitchedWriter(".text", "neo");

writer.queueWrite(".phrases", 3000, false);
